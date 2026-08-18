# Nerd's Guide To

A growing compendium of deep-dive guides for the things worth geeking out about — designed, illustrated, and animated by hand. Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**.

**Live so far:** Volume 01 — [Coffee 101](/cafe)

**New here or non-technical?** Read [DEVLOG.md](DEVLOG.md) — a plain-language history of what's been built, in what order, and why.

## How this project is put together

```
app/
  layout.js            → root layout: fonts, page metadata
  page.js               → the homepage (topic grid, "Coming Soon" cards)
  globals.css           → design system: colors, fonts, every page's CSS
  cafe/
    page.js              → the Coffee 101 guide (the first finished volume)

components/
  Header.jsx, Footer.jsx → shared site chrome
  Reveal.jsx             → wraps content in a fade/slide-up scroll animation
  TopicCard.jsx          → the homepage's topic cards (live + "Coming Soon")
  HeroNerd.jsx            → the animated nerd mascot (floating idle + rising steam)
  Comic.jsx               → the Nerd/Caveman dialogue panels
  RatioBar.jsx            → the animated espresso-drink ratio bars
  Lift.jsx                → small hover-lift wrapper used on a few card grids

lib/
  coffeeData.js          → all of the Coffee 101 content, as data (beans, roasts,
                            grinds, brew methods, drinks, glossary, facts) —
                            the page just maps over these arrays

public/images/
  *.svg                  → every illustration and icon, all hand-coded SVG
```

## Running it locally

This needs [Node.js](https://nodejs.org) installed (LTS version). From the project folder:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. Any file you save hot-reloads instantly in the browser.

## Adding a new "Coming Soon" guide later

1. Add a new folder under `app/` (e.g. `app/whiskey/page.js`) using `app/cafe/page.js` as a template.
2. Put its content into a new file in `lib/` (following `lib/coffeeData.js` as an example), and draw matching SVG illustrations into `public/images/`.
3. In `app/page.js`, find that topic's entry in the `topics` array and add `href: "/whiskey"` and `live: true` — the card updates automatically.

## Deploying

This site deploys to **Vercel**, connected directly to this GitHub repo — every push to `main` builds and deploys automatically.

## A note on OneDrive

This project folder lives inside OneDrive. `node_modules` (installed dependencies) will sync along with it — that's expected and fine, just occasionally slower than a non-synced folder. If `npm run dev` ever throws strange file-lock errors, it's usually OneDrive mid-sync; wait a few seconds and try again.
