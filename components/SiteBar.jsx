import Image from "next/image";
import Link from "next/link";
import MenuButton from "@/components/MenuButton";

export default function SiteBar() {
  return (
    <div className="site-bar">
      <div className="container">
        <Link href="/" className="wordmark">
          <Image
            src="/images/brain-icon.svg"
            alt=""
            width={28}
            height={28}
            className="wordmark-icon"
          />
          Nerd&apos;s Guide To
        </Link>
        <MenuButton />
      </div>
    </div>
  );
}
