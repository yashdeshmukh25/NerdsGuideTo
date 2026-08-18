"use client";

import { motion } from "framer-motion";

const SEG_STYLE = {
  espresso: { background: "var(--espresso)", color: "var(--paper)" },
  milk: { background: "#E9D9BE", color: "var(--espresso)" },
  foam: { background: "#FBF1E1", color: "var(--espresso)" },
  water: { background: "#BFDDD6", color: "var(--espresso)" },
  choc: { background: "#6B3A22", color: "var(--paper)" },
};

export default function RatioBar({ segments }) {
  return (
    <div className="ratio-bar">
      {segments.map((seg, i) => (
        <motion.span
          key={seg.type}
          style={SEG_STYLE[seg.type]}
          initial={{ width: "0%" }}
          whileInView={{ width: `${seg.pct}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.9,
            delay: i * 0.12,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
        >
          {seg.label}
        </motion.span>
      ))}
    </div>
  );
}
