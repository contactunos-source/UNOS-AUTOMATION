"use client";

import { useEffect, useRef } from "react";

const FLAKES = ["❄", "❅", "❆", "✻", "✼"];
const MAX_FLAKES = 40;

export default function SnowEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<{ x: number; y: number } | null>(null);
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function spawnFlake(x: number, y: number) {
      if (!container) return;

      // Keep DOM clean: if too many flakes exist, remove the oldest
      if (container.childElementCount >= MAX_FLAKES) {
        container.firstElementChild?.remove();
      }

      const snow = document.createElement("div");
      snow.className = "snowflake";
      snow.textContent = FLAKES[Math.floor(Math.random() * FLAKES.length)];

      // Slight natural variations for realism
      const size = Math.floor(Math.random() * 8) + 16; // 16px - 24px
      const drift = (Math.random() - 0.5) * 40; // -20px to +20px horizontal drift
      const rotation = (Math.random() > 0.5 ? 1 : -1) * (200 + Math.random() * 200);

      snow.style.left = `${x}px`;
      snow.style.top = `${y}px`;
      snow.style.fontSize = `${size}px`;
      snow.style.setProperty("--drift-x", `${drift}px`);
      snow.style.setProperty("--rot", `${rotation}deg`);

      container.appendChild(snow);

      setTimeout(() => {
        snow.remove();
      }, 2000);
    }

    // 1. Mouse movement trigger (matching user's script)
    const handleMouseMove = (e: MouseEvent) => {
      lastMousePos.current = { x: e.clientX, y: e.clientY };

      if (Math.random() > 0.65) {
        // Slight offset so flakes don't spawn exactly under the cursor tip
        const offsetX = (Math.random() - 0.5) * 12;
        const offsetY = (Math.random() - 0.5) * 12;
        spawnFlake(e.clientX + offsetX, e.clientY + offsetY);
      }
    };

    // 2. Scroll trigger: when someone scrolls the web page, snowflakes appear
    const handleScroll = () => {
      const now = Date.now();
      // Rate-limit scroll spawning to every 70ms for silky-smooth performance
      if (now - lastScrollTime.current < 70) return;
      lastScrollTime.current = now;

      // If user has a mouse position, spawn near the cursor; otherwise across the viewport
      if (lastMousePos.current) {
        const jitterX = (Math.random() - 0.5) * 80;
        const jitterY = (Math.random() - 0.5) * 50;
        spawnFlake(
          lastMousePos.current.x + jitterX,
          Math.max(10, lastMousePos.current.y + jitterY)
        );
      } else {
        // Spawn randomly across top/middle of visible screen
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * (window.innerHeight * 0.5);
        spawnFlake(randomX, randomY);
      }

      // Occasionally spawn a companion flake during fast scrolls
      if (Math.random() > 0.5) {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * (window.innerHeight * 0.4);
        spawnFlake(randomX, randomY);
      }
    };

    // 3. Touch move trigger for mobile screens
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0 && Math.random() > 0.6) {
        const touch = e.touches[0];
        lastMousePos.current = { x: touch.clientX, y: touch.clientY };
        spawnFlake(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="snow-container" aria-hidden="true" />;
}
