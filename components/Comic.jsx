import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Comic({ figures }) {
  return (
    <div className="comic">
      {figures.map((f, i) => (
        <Reveal
          key={f.who}
          delay={i * 0.15}
          className={`comic-figure who-${f.who}`}
        >
          <div className="speech">{f.text}</div>
          <Image src={f.img} alt={f.alt} width={190} height={210} />
          <div className="comic-name">
            {f.who === "nerd" ? "The Nerd" : "The Caveman"}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
