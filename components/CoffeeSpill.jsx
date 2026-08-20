"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CoffeeSpill() {
  const stageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  const cupRotate = useTransform(scrollYProgress, [0.08, 0.42], [0, 108]);
  const cupY = useTransform(scrollYProgress, [0.08, 0.42], [0, 18]);
  const cupOpacity = useTransform(scrollYProgress, [0.55, 0.72], [1, 0]);
  const floodScale = useTransform(
    scrollYProgress,
    [0.3, 0.42, 0.75],
    [0, 1, 46]
  );
  const floodOpacity = useTransform(scrollYProgress, [0.3, 0.36], [0, 1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section className="spill-stage" ref={stageRef}>
      <div className="spill-viewport">
        <motion.div className="spill-scroll-cue" style={{ opacity: cueOpacity }}>
          <span className="dot" /> Keep scrolling
        </motion.div>

        <motion.div
          className="spill-flood"
          style={{ scale: floodScale, opacity: floodOpacity }}
          aria-hidden="true"
        />

        <motion.div
          className="spill-cup"
          style={{ opacity: cupOpacity }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 300 260" className="spill-cup-svg">
            <ellipse cx="150" cy="230" rx="112" ry="17" fill="#d7d7dc" />
            <ellipse
              cx="150"
              cy="230"
              rx="112"
              ry="17"
              fill="none"
              stroke="#b3b3ba"
              strokeWidth="2"
            />

            <motion.g style={{ rotate: cupRotate, y: cupY }} className="spill-cup-body-group">
              <path
                d="M64 108 L236 108 L214 205 A70 20 0 0 1 86 205 Z"
                fill="#c7c7cf"
                stroke="#8f8f98"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path
                d="M226 128 C 268 128 268 186 224 190"
                fill="none"
                stroke="#8f8f98"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <ellipse cx="150" cy="108" rx="86" ry="24" fill="#c7c7cf" stroke="#8f8f98" strokeWidth="3" />
              <ellipse cx="150" cy="107" rx="74" ry="19" fill="#3a2417" />
              <ellipse cx="150" cy="103" rx="74" ry="17" fill="#4a2f1c" opacity="0.6" />
              <ellipse cx="128" cy="98" rx="22" ry="6" fill="#6b4226" opacity="0.55" />
            </motion.g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
