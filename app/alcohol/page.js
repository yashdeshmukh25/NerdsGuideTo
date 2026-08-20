import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Comic from "@/components/Comic";
import Lift from "@/components/Lift";
import RatioBar from "@/components/RatioBar";
import HandwritingTitle from "@/components/HandwritingTitle";
import { titlePath as alcoholTitlePath } from "@/lib/alcoholTitlePath";
import {
  families,
  journey,
  processes,
  strengths,
  proofExamples,
  spirits,
  cocktails,
  cocktailKey,
  glossary,
  facts,
} from "@/lib/alcoholData";

export const metadata = {
  title: "Alcohol 101 — Nerd's Guide To",
  description:
    "A friendly, illustrated introduction to alcohol: how it's made, how strong it is, the major families, and the world's classic cocktails.",
};

export default function AlcoholPage() {
  return (
    <>
      <main>
        <HandwritingTitle
          data={alcoholTitlePath}
          tagline="Fermentation, distillation, and everything after"
        />

        {/* HERO */}
        <section className="cafe-hero bg-dots">
          <div className="container">
            <Reveal>
              <div className="cafe-crumb">
                <Link href="/">Guides</Link> / Alcohol
              </div>
              <span className="hero-eyebrow">Volume 02</span>
              <h1>Alcohol 101: from ferment to first sip.</h1>
              <p className="hero-lede">
                Everything a curious beginner needs to actually understand
                alcohol — how fermentation and distillation work, how strong
                different drinks really are, the major families you&apos;ll meet
                at any bar, and the handful of cocktails worth knowing by
                heart. Explained by a nerd, to a caveman, so nobody feels
                dumb.
              </p>
              <div className="scroll-cue">
                <span className="dot" /> Scroll down, it gets nerdy
              </div>
            </Reveal>
            <Reveal delay={0.15} className="cafe-hero-art">
              <Image
                src="/images/caveman-outline.svg"
                alt="A line-art illustration of the caveman character, holding a mug."
                width={260}
                height={380}
              />
            </Reveal>
          </div>
        </section>

        {/* CHAPTER 1: INTRO COMIC */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 1</span>
              <h2>Wait, what even is alcohol?</h2>
            </Reveal>
            <Comic
              figures={[
                {
                  who: "nerd",
                  img: "/images/geek-outline.svg",
                  alt: "A line-art illustration of the geek character.",
                  text: (
                    <>
                      Alcohol — specifically ethanol — is what you get when
                      yeast eats sugar. It&apos;s a natural byproduct of{" "}
                      <em>fermentation</em>, a process humans have been
                      hijacking on purpose for at least 9,000 years.
                    </>
                  ),
                },
                {
                  who: "caveman",
                  img: "/images/caveman-outline.svg",
                  alt: "A line-art illustration of the caveman character.",
                  text: "So we let tiny bugs eat sugar, and drink their exhaust. Great. Love that for us.",
                },
              ]}
            />
          </div>
        </section>

        {/* CHAPTER 2: FAMILIES */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 2</span>
              <h2>Meet the four families</h2>
              <p>
                Almost every alcoholic drink on Earth traces back to one of
                these four — and the difference between them comes down to
                one extra step: distillation.
              </p>
            </Reveal>
            <div className="bean-grid">
              {families.map((f, i) => (
                <Reveal key={f.name} delay={i * 0.08}>
                  <Lift className="bean-card">
                    <Image src={f.img} alt={`An icon representing ${f.name}.`} width={64} height={64} />
                    <span className="bean-share">{f.share}</span>
                    <h3>{f.name}</h3>
                    <p>{f.desc}</p>
                    <p className="fun-fact">
                      <b>Fun fact:</b> {f.fact}
                    </p>
                  </Lift>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 3: FROM FIELD TO GLASS */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 3</span>
              <h2>From field to glass</h2>
              <p>Every drink follows some version of the same path.</p>
            </Reveal>

            <div className="timeline">
              {journey.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06} className="timeline-step">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </Reveal>
              ))}
            </div>

            <div className="process-grid">
              {processes.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08} className={`process-card ${p.className}`}>
                  <h4>{p.name}</h4>
                  <p>{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 4: STRENGTH SCALE */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 4</span>
              <h2>Proof and strength, decoded</h2>
              <p>
                ABV (alcohol by volume) tells you how strong a drink actually
                is — and it varies a lot more than most people realize.
              </p>
            </Reveal>
            <Reveal>
              <div className="roast-bar">
                {strengths.map((s) => (
                  <span key={s.name} style={{ background: s.color }} />
                ))}
              </div>
              <div className="roast-labels">
                {strengths.map((s) => (
                  <div key={s.name}>
                    <div className="roast-swatch" style={{ background: s.color }} />
                    <h4>{s.name}</h4>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CHAPTER 5: STRENGTH AT A GLANCE */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 5</span>
              <h2>Strength at a glance</h2>
              <p>
                Proof is just ABV × 2 in the US — a bigger dot means a bigger
                kick per sip.
              </p>
            </Reveal>
            <div className="grind-row">
              {proofExamples.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.05} className="grind-col">
                  <div className="grind-dot" style={{ width: p.size, height: p.size }} />
                  <h5>{p.name}</h5>
                  <p>{p.use}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 6: SPIRITS */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 6</span>
              <h2>Pick your spirit</h2>
              <p>
                Same basic idea — ferment, then distill — but the starting
                ingredient changes everything about the result.
              </p>
            </Reveal>
            <div className="brew-grid">
              {spirits.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.07}>
                  <Lift className="brew-card" rotate={-0.4}>
                    <Image src={s.img} alt={`Illustration of ${s.name}.`} width={60} height={60} />
                    <h3>{s.name}</h3>
                    <div className="brew-meta">
                      <span>{s.base}</span>
                      <span>{s.abv}</span>
                    </div>
                    <p>{s.desc}</p>
                  </Lift>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 7: COCKTAIL FAMILY TREE */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 7</span>
              <h2>Six cocktails worth knowing</h2>
              <p>
                Every one of these is a classic for a reason. Ratios below
                are approximate — bartenders will argue about the exact
                numbers forever.
              </p>
            </Reveal>
            <div className="drink-grid">
              {cocktails.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.06} className="drink-card">
                  <h3>{c.name}</h3>
                  <div className="drink-sub">{c.sub}</div>
                  <RatioBar segments={c.segments} />
                  <div className="ratio-key">
                    {cocktailKey(c.segments).map((k) => (
                      <span key={k.type}>
                        <i style={{ background: k.color }} />
                        {k.label}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 8: GLOSSARY + FACTS */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 8</span>
              <h2>Nerd vocabulary, defined</h2>
            </Reveal>

            <dl className="glossary-grid">
              {glossary.map((g, i) => (
                <Reveal key={g.term} delay={i * 0.05} className="gterm">
                  <dt>{g.term}</dt>
                  <dd>{g.def}</dd>
                </Reveal>
              ))}
            </dl>

            <div className="facts-strip">
              {facts.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08} className="fact-card">
                  <b>{f.title}</b>
                  {f.body}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING COMIC */}
        <section className="cafe-closing">
          <div className="container">
            <Comic
              figures={[
                {
                  who: "caveman",
                  img: "/images/caveman-outline.svg",
                  alt: "A line-art illustration of the caveman character.",
                  text: "Okay. So it's just bug spit and heat. Somehow that explains a lot of my weekends.",
                },
                {
                  who: "nerd",
                  img: "/images/geek-outline.svg",
                  alt: "A line-art illustration of the geek character.",
                  text: "Pretty much. Now go order something and impress the bartender.",
                },
              ]}
            />
            <Reveal delay={0.2}>
              <Link href="/" className="btn btn-primary">
                Back to all guides
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer note="Volume 02: Alcohol. More volumes brewing." />
    </>
  );
}
