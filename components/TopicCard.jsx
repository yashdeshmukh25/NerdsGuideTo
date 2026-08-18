"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const arrow = (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function TopicCard({ title, description, icon, href, live }) {
  const content = (
    <>
      <span className={`badge ${live ? "badge-live" : "badge-soon"}`}>
        {live ? "Ready to read" : "Coming soon"}
      </span>
      <Image src={icon} alt="" width={58} height={58} className="topic-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      {live && (
        <span className="go-link">
          Read the guide
          {arrow}
        </span>
      )}
    </>
  );

  const motionProps = live
    ? {
        whileHover: { y: -6, rotate: -0.5, boxShadow: "var(--cream-shadow)" },
        whileTap: { y: -2 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }
    : {
        whileHover: { y: -3 },
        transition: { type: "spring", stiffness: 300, damping: 20 },
      };

  if (live) {
    return (
      <motion.div {...motionProps} className="topic-card is-live">
        <Link href={href} className="block">
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...motionProps} className="topic-card is-soon">
      {content}
    </motion.div>
  );
}
