"use client";

import { motion } from "framer-motion";

export default function Lift({ children, className, rotate = 0 }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -6, rotate, boxShadow: "var(--cream-shadow)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
