import Link from "next/link";
import MenuButton from "@/components/MenuButton";

export default function SiteBar() {
  return (
    <div className="site-bar">
      <div className="container">
        <Link href="/" className="wordmark">
          Nerd&apos;s Guide To
        </Link>
        <MenuButton />
      </div>
    </div>
  );
}
