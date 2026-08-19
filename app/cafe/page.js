import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Comic from "@/components/Comic";
import Lift from "@/components/Lift";
import RatioBar from "@/components/RatioBar";
import {
  beans,
  journey,
  processes,
  roasts,
  grinds,
  brewMethods,
  drinks,
  drinkKey,
  glossary,
  facts,
} from "@/lib/coffeeData";

export const metadata = {
  title: "Coffee 101 — Nerd's Guide To",
  description:
    "A friendly, illustrated field guide to coffee: beans, roasts, grinds, brew methods, and every espresso drink explained.",
};

export default function CafePage() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="cafe-hero bg-dots">
          <div className="container">
            <Reveal>
              <div className="cafe-crumb">
                <Link href="/">Guides</Link> / Cafe
              </div>
              <span className="hero-eyebrow">Volume 01</span>
              <h1>Coffee 101: from cherry to cup.</h1>
              <p className="hero-lede">
                Everything a curious beginner needs to actually understand
                coffee — the beans, the roast, the grind, the brew method,
                and the whole family tree of espresso drinks. Explained by a
                nerd, to a caveman, so nobody feels dumb.
              </p>
              <div className="scroll-cue">
                <span className="dot" /> Scroll down, it gets nerdy
              </div>
            </Reveal>
            <Reveal delay={0.15} className="cafe-hero-art">
              <Image
                src="/images/geek-outline.svg"
                alt="A line-art illustration of the geek character, holding a book."
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
              <h2>Wait, what even is coffee?</h2>
            </Reveal>
            <Comic
              figures={[
                {
                  who: "nerd",
                  img: "/images/geek-outline.svg",
                  alt: "A line-art illustration of the geek character.",
                  text: (
                    <>
                      Coffee is a brewed drink made from roasted coffee{" "}
                      <em>seeds</em> — people call them &quot;beans,&quot; but
                      they&apos;re actually the pit inside a small fruit
                      called a coffee cherry.
                    </>
                  ),
                },
                {
                  who: "caveman",
                  img: "/images/caveman-outline.svg",
                  alt: "A line-art illustration of the caveman character.",
                  text: "So we dry out a seed, burn it a little, smash it to bits, and pour hot water through it. On purpose.",
                },
              ]}
            />
          </div>
        </section>

        {/* CHAPTER 2: BEAN TYPES */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 2</span>
              <h2>Meet the four species</h2>
              <p>
                Every bag of coffee traces back to one of these four plant
                species — and almost everything you drink is one of the
                first two.
              </p>
            </Reveal>
            <div className="bean-grid">
              {beans.map((bean, i) => (
                <Reveal key={bean.name} delay={i * 0.08}>
                  <Lift className="bean-card">
                    <Image src={bean.img} alt={`An illustrated ${bean.name} coffee bean.`} width={64} height={40} />
                    <span className="bean-share">{bean.share}</span>
                    <h3>{bean.name}</h3>
                    <p>{bean.desc}</p>
                    <p className="fun-fact">
                      <b>Fun fact:</b> {bean.fact}
                    </p>
                  </Lift>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 3: BEAN TO CUP */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 3</span>
              <h2>From cherry to cup</h2>
              <p>Every bean goes on the same journey before it ever meets water.</p>
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

        {/* CHAPTER 4: ROAST LEVELS */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 4</span>
              <h2>Roast levels, decoded</h2>
              <p>
                Same bean, wildly different flavor — it all depends on how
                long and how hot it&apos;s roasted.
              </p>
            </Reveal>
            <Reveal>
              <div className="roast-bar">
                {roasts.map((r) => (
                  <span key={r.name} style={{ background: r.color }} />
                ))}
              </div>
              <div className="roast-labels">
                {roasts.map((r) => (
                  <div key={r.name}>
                    <div className="roast-swatch" style={{ background: r.color }} />
                    <h4>{r.name}</h4>
                    <p>{r.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CHAPTER 5: GRIND SIZE */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 5</span>
              <h2>Grind size matters more than you think</h2>
              <p>
                The finer the grind, the faster water pulls flavor out of it
                — so grind size and brew method have to match.
              </p>
            </Reveal>
            <div className="grind-row">
              {grinds.map((g, i) => (
                <Reveal key={g.name} delay={i * 0.05} className="grind-col">
                  <div className="grind-dot" style={{ width: g.size, height: g.size }} />
                  <h5>{g.name}</h5>
                  <p>{g.use}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 6: BREWING METHODS */}
        <section className="g-section alt">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 6</span>
              <h2>Pick your brewing method</h2>
              <p>
                Same beans, completely different cup — every method extracts
                coffee a little differently.
              </p>
            </Reveal>
            <div className="brew-grid">
              {brewMethods.map((m, i) => (
                <Reveal key={m.name} delay={i * 0.07}>
                  <Lift className="brew-card" rotate={-0.4}>
                    <Image src={m.img} alt={`Illustration of ${m.name}.`} width={60} height={60} />
                    <h3>{m.name}</h3>
                    <div className="brew-meta">
                      <span>{m.grind}</span>
                      <span>{m.time}</span>
                    </div>
                    <p>{m.desc}</p>
                  </Lift>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 7: DRINK FAMILY TREE */}
        <section className="g-section">
          <div className="container">
            <Reveal className="section-heading">
              <span className="g-kicker">Chapter 7</span>
              <h2>The espresso drink family tree</h2>
              <p>
                Every drink on this list starts with the exact same shot of
                espresso — the only thing that changes is what you add to
                it. Ratios below are approximate; baristas will argue about
                the exact numbers forever.
              </p>
            </Reveal>
            <div className="drink-grid">
              {drinks.map((d, i) => (
                <Reveal key={d.name} delay={i * 0.06} className="drink-card">
                  <h3>{d.name}</h3>
                  <div className="drink-sub">{d.sub}</div>
                  <RatioBar segments={d.segments} />
                  <div className="ratio-key">
                    {drinkKey(d.segments).map((k) => (
                      <span key={k.type}>
                        <i style={{ background: k.color, border: k.type === "foam" ? "1px solid #E7D2A6" : "none" }} />
                        {k.label}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 34, color: "var(--espresso-70)", fontSize: ".92rem" }}>
              Bonus round: an <b>Affogato</b> isn&apos;t really a ratio drink
              — it&apos;s just a hot shot of espresso poured straight over a
              scoop of vanilla ice cream. Equal parts coffee and dessert.
            </p>
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
                  text: "Okay. Nerd stuff aside... this is really, really good.",
                },
                {
                  who: "nerd",
                  img: "/images/geek-outline.svg",
                  alt: "A line-art illustration of the geek character.",
                  text: "That's the whole point. Now go make yourself a cup.",
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

      <Footer note="Volume 01: Cafe. More volumes brewing." />
    </>
  );
}
