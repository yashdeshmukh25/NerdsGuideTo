"use client";

import { motion } from "framer-motion";

const steamPath = "M0 16c-4-6 4-8 0-16";

function Steam({ x, delay }) {
  return (
    <motion.path
      d={steamPath}
      transform={`translate(${x} 152)`}
      stroke="#C7B39A"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: [0, 1, 0], y: [0, -14, -22] }}
      transition={{ duration: 2.6, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

function Dingbat({ children, delay }) {
  return (
    <motion.g
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.g>
  );
}

export default function HeroNerd({ className }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 340 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto" }}
      >
        <g opacity="0.55">
          <Dingbat delay={0}>
            <circle cx="52" cy="70" r="16" fill="#E7A93F" />
          </Dingbat>
          <Dingbat delay={0.6}>
            <circle cx="286" cy="60" r="20" fill="#3F9C82" opacity="0.85" />
            <circle cx="286" cy="60" r="7" fill="#FBF1E1" />
          </Dingbat>
          <Dingbat delay={1.2}>
            <circle cx="300" cy="150" r="12" fill="#E07A44" />
          </Dingbat>
          <Dingbat delay={0.3}>
            <circle cx="40" cy="200" r="10" fill="#8A5A34" />
          </Dingbat>
        </g>

        <ellipse cx="170" cy="388" rx="110" ry="12" fill="#3A2417" opacity="0.08" />

        <path
          d="M78 400V300c0-38 22-64 58-70h68c36 6 58 32 58 70v100z"
          fill="#E07A44"
        />
        <path
          d="M150 232l20 26 20-26 14 10-18 30h-32l-18-30z"
          fill="#FBF1E1"
        />
        <path d="M162 252l-14 8v10l14 8v-8l-8-5 8-5z" fill="#2C7561" />
        <path d="M178 252l14 8v10l-14 8v-8l8-5-8-5z" fill="#3F9C82" />
        <circle cx="170" cy="260" r="4" fill="#2C7561" />

        <rect x="156" y="205" width="28" height="34" rx="10" fill="#E8B98A" />

        <path
          d="M228 268c22-6 34-26 36-52l16 4c-2 34-18 60-46 68z"
          fill="#E07A44"
        />
        <circle cx="286" cy="214" r="15" fill="#E8B98A" />

        <g>
          <rect
            x="264"
            y="176"
            width="44"
            height="38"
            rx="8"
            fill="#FBF1E1"
            stroke="#3A2417"
            strokeWidth="3"
          />
          <path
            d="M308 184h8a10 10 0 0 1 0 20h-8"
            fill="none"
            stroke="#3A2417"
            strokeWidth="3"
          />
          <rect x="270" y="182" width="32" height="10" fill="#8A5A34" />
          <Steam x={274} delay={0} />
          <Steam x={286} delay={0.5} />
          <Steam x={298} delay={1} />
        </g>

        <path
          d="M112 268c-22-4-36-22-40-48l-16 3c3 32 20 56 48 64z"
          fill="#C05A2C"
        />
        <circle cx="56" cy="220" r="14" fill="#E8B98A" />

        <circle cx="170" cy="150" r="62" fill="#E8B98A" />
        <circle cx="110" cy="152" r="9" fill="#E8B98A" />
        <circle cx="230" cy="152" r="9" fill="#E8B98A" />

        <path
          d="M108 130c0-40 28-64 62-64s62 24 62 64c-10-8-14-20-16-30-10 10-30 16-46 14-8 10-24 12-36 8 0 6-2 10-6 14-4-2-6 0-8 4-6-4-10-6-12-10z"
          fill="#2B1B12"
        />
        <path
          d="M112 118c-4 10-4 22 0 32-6-2-10-10-10-20s4-10 10-12z"
          fill="#2B1B12"
        />

        <g stroke="#2B1B12" strokeWidth="4" fill="#FFFFFF" fillOpacity="0.35">
          <rect x="122" y="140" width="38" height="30" rx="10" />
          <rect x="180" y="140" width="38" height="30" rx="10" />
          <line x1="160" y1="152" x2="180" y2="152" />
          <line x1="118" y1="150" x2="106" y2="146" />
          <line x1="222" y1="150" x2="234" y2="146" />
        </g>
        <circle cx="141" cy="156" r="4" fill="#2B1B12" />
        <circle cx="199" cy="156" r="4" fill="#2B1B12" />

        <path
          d="M124 132c8-6 20-6 28-2"
          stroke="#2B1B12"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M188 130c8-4 20-4 28 2"
          stroke="#2B1B12"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        <ellipse cx="128" cy="182" rx="10" ry="6" fill="#E07A44" opacity="0.35" />
        <ellipse cx="212" cy="182" rx="10" ry="6" fill="#E07A44" opacity="0.35" />

        <path
          d="M148 188c8 14 36 14 44 0"
          stroke="#2B1B12"
          strokeWidth="4.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
