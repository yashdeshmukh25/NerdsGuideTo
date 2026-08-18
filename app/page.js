import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroNerd from "@/components/HeroNerd";
import Reveal from "@/components/Reveal";
import TopicCard from "@/components/TopicCard";

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
      <Header variant="home" />

      <main>
        <section className="hero bg-dots">
          <div className="container hero-grid">
            <Reveal>
              <span className="hero-eyebrow">Volume 01 &amp; counting</span>
              <h1>
                Deep dives for the <span>relentlessly curious.</span>
              </h1>
              <p className="hero-lede">
                Nerd&apos;s Guide To is a growing compendium of the stuff worth
                geeking out about — brewed, distilled, and illustrated one
                topic at a time. A friendly nerd explains it all to a very
                confused caveman, so you don&apos;t have to feel lost either.
              </p>
              <div className="hero-actions">
                <Link href="/cafe" className="btn btn-primary">
                  Start with Coffee 101
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="hero-art">
              <HeroNerd />
            </Reveal>
          </div>
        </section>

        <section className="topics">
          <div className="container">
            <Reveal className="section-heading">
              <h2>Pick a rabbit hole</h2>
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
