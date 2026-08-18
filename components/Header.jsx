import Link from "next/link";
import Image from "next/image";

export default function Header({ variant = "home" }) {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src="/images/logo-mark.svg"
            alt=""
            width={38}
            height={38}
            className="brand-mark"
          />
          <span>
            Nerd&apos;s Guide To
            <small>A Geek&apos;s Compendium</small>
          </span>
        </Link>
        <nav className="site-nav">
          {variant === "cafe" ? (
            <Link href="/">← All Guides</Link>
          ) : (
            <Link href="/cafe">☕ Cafe Guide</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
