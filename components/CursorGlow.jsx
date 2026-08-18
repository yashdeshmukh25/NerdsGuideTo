"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const elRef = useRef(null);
  const pos = useRef({ x: 0, y: 0, ready: false });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight * 0.35;
    target.current = { x: startX, y: startY };
    pos.current = { x: startX, y: startY, ready: false };

    function place(x, y) {
      if (elRef.current) {
        elRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    }
    place(startX, startY);

    function onMove(e) {
      target.current = { x: e.clientX, y: e.clientY };
      if (!pos.current.ready) {
        // Snap on the very first real pointer reading, then ease from there on.
        pos.current.x = e.clientX;
        pos.current.y = e.clientY;
        pos.current.ready = true;
      }
    }
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf;
    function tick() {
      pos.current.x += (target.current.x - pos.current.x) * 0.09;
      pos.current.y += (target.current.y - pos.current.y) * 0.09;
      place(pos.current.x, pos.current.y);
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={elRef} className="cursor-glow" aria-hidden="true" />;
}
