"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { titlePath } from "@/lib/titlePath";

const DRAW_DURATION = 2.6;
const FILL_DURATION = 0.9;

export default function HeroTitleReveal() {
  const [ready, setReady] = useState(false);
  const [drawn, setDrawn] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        if (!cancelled) {
          setSkipAnimation(true);
          setReady(true);
          setDrawn(true);
        }
        return;
      }

      if (document.readyState !== "complete") {
        await new Promise((resolve) =>
          window.addEventListener("load", resolve, { once: true })
        );
      }
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      if (!cancelled) setReady(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="hero-splash">
      <svg
        className="hero-title-svg"
        viewBox={titlePath.viewBox}
        role="img"
        aria-label={titlePath.text}
      >
        <motion.path
          d={titlePath.d}
          fill="var(--espresso)"
          stroke="var(--espresso)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, fillOpacity: 0 }}
          animate={
            ready
              ? { pathLength: 1, fillOpacity: drawn ? 1 : 0 }
              : { pathLength: 0, fillOpacity: 0 }
          }
          transition={{
            pathLength: {
              duration: skipAnimation ? 0 : DRAW_DURATION,
              ease: [0.65, 0, 0.35, 1],
            },
            fillOpacity: {
              duration: skipAnimation ? 0 : FILL_DURATION,
              ease: "easeOut",
            },
          }}
          onAnimationComplete={(def) => {
            if (def && def.pathLength === 1) setDrawn(true);
          }}
        />
      </svg>

      <motion.p
        className="hero-title-tagline"
        initial={{ opacity: 0, y: 12 }}
        animate={drawn ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{
          duration: skipAnimation ? 0 : 0.6,
          ease: [0.2, 0.65, 0.3, 0.9],
        }}
      >
        Pick new rabbit holes to fall into
      </motion.p>
    </div>
  );
}
