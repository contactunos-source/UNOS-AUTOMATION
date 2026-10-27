"use client";

import { useEffect, useRef } from "react";

const FLAKES = ["❄", "❅", "❆", "✻", "✼"];
const MAX_FLAKES = 12;

export default function SnowEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef<number>(0);

  useEffect(() => {
    // 1. Mobile & Touch Optimization: Do not run particle generator on mobile / touch
    if (typeof window === "undefined") return;
    const isTouchOrMobile =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 768;

    if (isTouchOrMobile) return;

    const container = containerRef.current;
    if (!container) return;

    function spawnFlake(x: number, y: number) {
      if (!container) return;

      // Keep DOM exceptionally clean & lightweight
      if (container.childElementCount >= MAX_FLAKES) {
        container.firstElementChild?.remove();
      }

      const snow = document.createElement("div");
      snow.className = "snowflake";
      snow.textContent = FLAKES[Math.floor(Math.random() * FLAKES.length)];

      const size = Math.floor(Math.random() * 6) + 14; // 14px - 20px
      const drift = (Math.random() - 0.5) * 30;
      const rotation = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 180);

      snow.style.left = `${x}px`;
      snow.style.top = `${y}px`;
      snow.style.fontSize = `${size}px`;
      snow.style.setProperty("--drift-x", `${drift}px`);
      snow.style.setProperty("--rot", `${rotation}deg`);

      container.appendChild(snow);

      setTimeout(() => {
        snow.remove();
      }, 1800);
    }

    // High-performance throttled mouse movement listener (max 1 flake per 140ms)
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnTime.current < 140) return;
      lastSpawnTime.current = now;

      const offsetX = (Math.random() - 0.5) * 12;
      const offsetY = (Math.random() - 0.5) * 12;
      spawnFlake(e.clientX + offsetX, e.clientY + offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="snow-container" aria-hidden="true" />;
}
