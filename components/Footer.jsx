import Link from "next/link";
import Image from "next/image";

export default function Footer({ note = "Built by hand, brewed with curiosity." }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src="/images/logo-mark.svg"
            alt=""
            width={38}
            height={38}
            className="brand-mark"
          />
          <span>Nerd&apos;s Guide To</span>
        </Link>
        <p>A passion project, one geeky topic at a time.</p>
        <div className="footer-note">{note}</div>
      </div>
    </footer>
  );
}
