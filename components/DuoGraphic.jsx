import Image from "next/image";

export default function DuoGraphic() {
  return (
    <div className="duo-graphic" aria-hidden="true">
      <div className="duo-side">
        <Image
          src="/images/cave-outline.svg"
          alt=""
          width={280}
          height={300}
          className="duo-prop"
        />
        <Image
          src="/images/caveman-outline.svg"
          alt=""
          width={260}
          height={380}
          className="duo-character"
        />
      </div>
      <div className="duo-side">
        <Image
          src="/images/geek-outline.svg"
          alt=""
          width={260}
          height={380}
          className="duo-character"
        />
        <Image
          src="/images/library-outline.svg"
          alt=""
          width={280}
          height={300}
          className="duo-prop"
        />
      </div>
    </div>
  );
}
