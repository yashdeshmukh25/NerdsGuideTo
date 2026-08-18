"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TITLE = "Nerd's Guide To";
const WORDS = TITLE.split(" ");
const TOTAL_LETTERS = TITLE.replace(/ /g, "").length;

const letterVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroTitleReveal() {
  const [ready, setReady] = useState(false);
  const [titleDone, setTitleDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function waitUntilFullyLoaded() {
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

    waitUntilFullyLoaded();
    return () => {
      cancelled = true;
    };
  }, []);

  let globalIndex = -1;

  return (
    <div className="hero-splash">
      <motion.h1
        className="hero-title-cursive"
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
        }}
        aria-label={TITLE}
      >
        {WORDS.map((word, wi) => (
          <span className="htc-word" key={wi} aria-hidden="true">
            {word.split("").map((ch, ci) => {
              globalIndex += 1;
              const isLast = globalIndex === TOTAL_LETTERS - 1;
              return (
                <motion.span
                  key={ci}
                  variants={letterVariants}
                  transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }}
                  onAnimationComplete={
                    isLast ? () => setTitleDone(true) : undefined
                  }
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.h1>

      <motion.p
        className="hero-title-tagline"
        initial={{ opacity: 0, y: 12 }}
        animate={titleDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
      >
        Pick new rabbit holes to fall into
      </motion.p>
    </div>
  );
}
