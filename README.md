# Nerd's Guide To

A growing compendium of deep-dive guides for the things worth geeking out about — designed, illustrated, and built by hand. No frameworks, no build step: just HTML, CSS, and a little JavaScript, so it's easy to open, read, and edit even if you're new to code.

**Live so far:** Volume 01 — [Coffee 101](cafe/index.html)

## How this project is put together

```
index.html            → the homepage (topic grid, "Coming Soon" cards)
cafe/index.html        → the Coffee 101 guide (the first finished volume)

assets/
  css/
    style.css          → shared design system: colors, fonts, header, footer, cards
    cafe.css           → styles specific to the Coffee 101 page
  js/
    main.js            → shared scroll-reveal animation used on every page
    cafe.js             → the little animation that fills in the drink-ratio bars
  img/
    *.svg              → every illustration and icon, all hand-coded SVG
```

There's no build tool (no Node, no npm, no bundler) — every page is a plain `.html` file that links directly to the shared CSS/JS/images. That means you can open any `.html` file straight in a browser and see it exactly as it will look live.

## Previewing your changes locally

Just double-click `index.html` (or `cafe/index.html`) and it'll open in your default browser. Refresh after saving any change.

## Adding a new "Coming Soon" guide later

1. Duplicate the `cafe/` folder as a starting point, or start a new page from scratch using `cafe/index.html` as a template.
2. Draw or add matching SVG icons/illustrations into `assets/img/`.
3. Update the matching card on the homepage (`index.html`) — change its class from `is-soon` to `is-live`, swap the badge, and link it to the new page.

## Deploying

This site is hosted for free with **GitHub Pages**, straight from this repo — any push to `main` updates the live site automatically once Pages is enabled in the repo settings.
