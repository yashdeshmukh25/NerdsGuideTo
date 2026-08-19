import Link from "next/link";
import Image from "next/image";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <line x1="4" y1="4" x2="20" y2="20" />
      <line x1="20" y1="4" x2="4" y2="20" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <circle cx="7.2" cy="7.5" r="1.3" fill="currentColor" stroke="none" />
      <line x1="7.2" y1="11" x2="7.2" y2="18" strokeWidth="2" strokeLinecap="round" />
      <path d="M11,18 L11,13.5 C11,11 15,11 15,13.5 L15,18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer({ note = "Built by hand, brewed with curiosity." }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src="/images/brain-icon.svg"
            alt=""
            width={34}
            height={34}
            className="brand-mark"
          />
          <span>Nerd&apos;s Guide To</span>
        </Link>
        <p>A passion project, one geeky topic at a time.</p>
        <div className="footer-social">
          <a
            href="https://www.x.com/theycallmeyd_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on X"
          >
            <XIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/yash-deshmukh25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        <div className="footer-note">{note}</div>
      </div>
    </footer>
  );
}
