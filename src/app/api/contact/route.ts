import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Rate limiting (simple in-memory, per-IP) ────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
  const max = 5; // max 5 submissions per IP per hour

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + window });
    return false;
  }
  if (entry.count >= max) return true;
  entry.count++;
  return false;
}

// ─── Validation ───────────────────────────────────────────────────────────────
function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: unknown): string {
  if (typeof str !== "string") return "";
  return str.trim().slice(0, 1000);
}

// ─── Email sending ────────────────────────────────────────────────────────────
async function sendEmail(data: Record<string, string>) {
  const {
    SMTP_HOST = "smtp.gmail.com",
    SMTP_PORT = "587",
    SMTP_USER = "contactunos@gmail.com",
    SMTP_PASS,
  } = process.env;
  const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || "contactunos@gmail.com";

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL_TO) {
    const missing = [];
    if (!SMTP_PASS) missing.push("SMTP_PASS (Gmail App Password)");
    throw new Error(`Email service unconfigured: Missing [${missing.join(", ")}] in .env.local`);
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || "587"),
    secure: SMTP_PORT === "465",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  await transporter.sendMail({
    from: `"UNOS AUTOMATIONS Website" <${SMTP_USER}>`,
    to: CONTACT_EMAIL_TO,
    replyTo: data.email,
    subject: `New Project Enquiry: ${data.fullName} (${data.businessName}) — ${data.service}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #171717; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 12px;">
        <div style="border-bottom: 2px solid #f97316; padding-bottom: 12px; margin-bottom: 20px;">
          <h2 style="color: #171717; margin: 0; font-size: 20px;">UNOS AUTOMATIONS — New Client Enquiry</h2>
          <p style="color: #737373; font-size: 13px; margin: 4px 0 0 0;">Received at: ${new Date().toLocaleString()}</p>
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          ${[
            ["Full Name", data.fullName],
            ["Business Name", data.businessName],
            ["Email Address", `<a href="mailto:${data.email}">${data.email}</a>`],
            ["Phone / WhatsApp", data.phone ? `<a href="tel:${data.phone}">${data.phone}</a>` : "Not provided"],
            ["Service Requested", `<strong style="color: #f97316;">${data.service}</strong>`],
            ["Preferred Time", data.preferredTime || "Flexible"],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 10px 12px; background: #f9f9f9; font-weight: 600; font-size: 12px; color: #525252; width: 35%; border: 1px solid #eeeeee;">${label}</td>
              <td style="padding: 10px 12px; font-size: 14px; color: #171717; border: 1px solid #eeeeee;">${value}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="padding: 16px; background: #fafafa; border: 1px solid #eeeeee; border-radius: 8px;">
          <p style="font-size: 12px; font-weight: 600; color: #525252; margin: 0 0 8px;">Project Details</p>
          <p style="font-size: 14px; color: #171717; margin: 0; line-height: 1.5; white-space: pre-wrap;">${data.description}</p>
        </div>
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eeeeee; font-size: 12px; color: #a3a3a3; text-align: center;">
          UNOS AUTOMATIONS Website Contact Router
        </div>
      </div>
    `,
  });
}

// ─── Optional: WhatsApp notification via webhook ──────────────────────────────
async function notifyWhatsApp(data: Record<string, string>) {
  const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;
  if (!webhookUrl) return;

  const message = [
    "🔔 *New UNOS AUTOMATIONS Enquiry*",
    `👤 *Client:* ${data.fullName} (${data.businessName})`,
    `📧 *Email:* ${data.email}`,
    data.phone ? `📱 *Phone:* ${data.phone}` : null,
    `🛠 *Service:* ${data.service}`,
    `📝 *Note:* ${data.description}`,
    `⏰ *Time:* ${new Date().toLocaleString()}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  } catch (e) {
    console.warn("[contact] WhatsApp webhook notification failed", e);
  }
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions from your connection. Please wait an hour or contact us on WhatsApp directly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const data = {
    fullName: sanitize(body.fullName),
    businessName: sanitize(body.businessName),
    email: sanitize(body.email),
    phone: sanitize(body.phone),
    service: sanitize(body.service),
    description: sanitize(body.description),
    preferredTime: sanitize(body.preferredTime),
  };

  // Field validations
  if (!data.fullName) return NextResponse.json({ error: "Full name is required." }, { status: 422 });
  if (!data.businessName) return NextResponse.json({ error: "Business name is required." }, { status: 422 });
  if (!data.email || !validateEmail(data.email)) return NextResponse.json({ error: "A valid email address is required." }, { status: 422 });
  if (!data.service) return NextResponse.json({ error: "Please select a service of interest." }, { status: 422 });
  if (!data.description) return NextResponse.json({ error: "Project description is required." }, { status: 422 });

  // Bot check
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  // Log lead securely to server stdout so no lead is lost even during configuration setup
  console.log(`[contact-lead] Received enquiry from ${data.fullName} (${data.businessName}) | ${data.email} | Service: ${data.service}`);

  const hasSmtpConfig = Boolean(
    (process.env.SMTP_HOST || "smtp.gmail.com") &&
    (process.env.SMTP_USER || "contactunos@gmail.com") &&
    process.env.SMTP_PASS &&
    (process.env.CONTACT_EMAIL_TO || "contactunos@gmail.com")
  );

  if (hasSmtpConfig) {
    try {
      await sendEmail(data);
      console.log(`[contact] Email sent successfully to contactunos@gmail.com`);
    } catch (err: unknown) {
      console.error("[contact] Email dispatch error (lead preserved in logs):", err);
    }
  } else {
    console.log(
      `[contact] Lead captured for contactunos@gmail.com (SMTP_PASS pending):\n` +
      JSON.stringify(data, null, 2)
    );
  }

  // Attempt optional WhatsApp webhook if configured
  await notifyWhatsApp(data);

  return NextResponse.json({
    ok: true,
    message: "Enquiry submitted successfully.",
  });
}
