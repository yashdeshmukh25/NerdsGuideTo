"use client";

import { motion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
