import Footer from "@/components/Footer";
import HandwritingTitle from "@/components/HandwritingTitle";
import DuoGraphic from "@/components/DuoGraphic";
import Reveal from "@/components/Reveal";
import TopicCard from "@/components/TopicCard";
import { titlePath } from "@/lib/titlePath";

const topics = [
  {
    title: "Cafe / Coffee 101",
    description:
      "Beans, roasts, grinds, brew methods, and the whole family tree of espresso drinks — explained from scratch.",
    icon: "/images/icon-cafe.svg",
    href: "/cafe",
    live: true,
  },
  {
    title: "Alcohol 101",
    description:
      "Fermentation, distillation, ABV vs. proof, the major spirit families, and the classic cocktails worth knowing.",
    icon: "/images/icon-alcohol.svg",
    href: "/alcohol",
    live: true,
  },
  {
    title: "Whiskey 101",
    description:
      "Malts, mashbills, casks, and how to actually talk about what you're tasting.",
    icon: "/images/icon-whiskey.svg",
  },
  {
    title: "Mechanical Keyboards",
    description:
      'Switches, stabilizers, layouts, and why everyone suddenly cares about "thock."',
    icon: "/images/icon-keyboard.svg",
  },
  {
    title: "Vinyl Records",
    description:
      "Pressings, cartridges, and the gloriously stubborn analog format that refuses to die.",
    icon: "/images/icon-vinyl.svg",
  },
  {
    title: "Fountain Pens",
    description:
      "Nibs, inks, and the surprisingly deep rabbit hole of writing by hand.",
    icon: "/images/icon-pen.svg",
  },
  {
    title: "Film Photography",
    description:
      "ISO, exposure triangles, and why shooting on film makes you slow down.",
    icon: "/images/icon-camera.svg",
  },
];

export default function Home() {
  return (
    <>
      <main className="dot-grid">
        <HandwritingTitle
          data={titlePath}
          tagline={
            <>
              Pick new rabbit holes
              <br className="mobile-break" /> to fall into
            </>
          }
        />
        <DuoGraphic />

        <section className="topics">
          <div className="container">
            <Reveal className="section-heading">
              <h2>Start exploring</h2>
              <p>
                Every guide gets the same treatment: real depth, hand-drawn
                illustrations, and zero pretension. New volumes are brewing.
              </p>
            </Reveal>

            <div className="topics-grid">
              {topics.map((topic, i) => (
                <Reveal key={topic.title} delay={i * 0.07}>
                  <TopicCard {...topic} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
