"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DRAW_DURATION = 2.2;
const MIN_LETTER_DURATION = 0.12;
const FILL_DURATION = 0.16;
const FADE_DURATION = 0.5;
const INK_WIDTH = 20;

export default function HandwritingTitle({ data, tagline, className }) {
  const [activeIndex, setActiveIndex] = useState(-1);
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
          setActiveIndex(data.letters.length);
        }
        return;
      }

      if (document.readyState !== "complete") {
        await new Promise((resolve) => {
          if (document.readyState === "complete") return resolve();
          window.addEventListener("load", resolve, { once: true });
        });
      }
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
      if (!cancelled) {
        setActiveIndex(0);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalWidth = data.letters.reduce(
    (sum, l) => sum + Math.max(l.x1 - l.x0, 0),
    0
  );
  const done = activeIndex >= data.letters.length;

  return (
    <div className={`hero-splash${className ? ` ${className}` : ""}`}>
      <svg
        className="hero-title-svg"
        viewBox={data.viewBox}
        role="img"
        aria-label={data.text}
      >
        {data.letters.map((letter, i) => {
          const letterWidth = Math.max(letter.x1 - letter.x0, 0.01);
          const drawDuration = skipAnimation
            ? 0
            : Math.max(
                MIN_LETTER_DURATION,
                (letterWidth / totalWidth) * DRAW_DURATION
              );
          const drawing = i <= activeIndex;
          const filled = i < activeIndex;
          return (
            <motion.path
              key={i}
              d={letter.d}
              fill="var(--espresso)"
              stroke="var(--espresso)"
              strokeWidth={INK_WIDTH}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{
                pathLength: drawing ? 1 : 0,
                fillOpacity: filled ? 1 : 0,
              }}
              transition={{
                pathLength: {
                  duration: drawDuration,
                  ease: [0.65, 0, 0.35, 1],
                },
                fillOpacity: {
                  duration: skipAnimation ? 0 : FILL_DURATION,
                  ease: "easeOut",
                },
              }}
              onAnimationComplete={(def) => {
                if (i !== activeIndex) return;
                if (def && def.pathLength === 1) {
                  setActiveIndex((idx) =>
                    idx < data.letters.length ? idx + 1 : idx
                  );
                }
              }}
            />
          );
        })}
      </svg>

      {tagline ? (
        <motion.p
          className="hero-title-tagline"
          initial={{ opacity: 0, y: 12 }}
          animate={done ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{
            duration: skipAnimation ? 0 : FADE_DURATION,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {tagline}
        </motion.p>
      ) : null}
    </div>
  );
}
