# Project Log — Nerd's Guide To

This is a plain-language history of the project: what got built, in what order, and — most importantly — **why**. No code jargon left unexplained. If you're ever wondering "wait, why did we do that?", check here first.

Newest entries are at the bottom, so it reads top-to-bottom like a story.

**Jump to:**
- [Day 1 — First version, built as a simple website](#day-1--2026-08-17--first-version-built-as-a-simple-website)
- [Day 2 — Rebuilt as a real web app, with animation](#day-2--2026-08-18--rebuilt-as-a-real-web-app-with-animation)
- [Plain-language glossary](#plain-language-glossary)

---

## Day 1 — 2026-08-17 — First version, built as a simple website

**The ask:** a personal "compendium" website — a homepage listing future guides on nerdy topics, with one guide fully finished: Coffee 101. Design-heavy, fun to scroll, illustrated, with a running bit of a "nerd" character explaining things to a confused "caveman" character.

**What got built:**
- A homepage with a hero section and a grid of topic cards — Coffee is clickable, five other topics (Whiskey, Mechanical Keyboards, Vinyl, Fountain Pens, Film Photography) show as "Coming Soon" placeholders so the page doesn't feel empty while more guides get written later.
- The full Coffee 101 guide: bean types, how coffee is processed and roasted, grind sizes, six brewing methods, the whole family tree of espresso drinks (with little bar charts showing the espresso/milk/foam ratios), a glossary, and some fun facts.
- Every single illustration — the nerd, the caveman, coffee beans, brewing devices, drink icons — was hand-drawn by writing the actual image code (SVG) by hand, not generated or downloaded from anywhere.

**Why it was built as a plain website (no fancy tooling):** your computer didn't have Node.js installed yet — the software needed to run modern web-development tools. Rather than stopping to install things right away, it made sense to build a first version using nothing but HTML, CSS, and a little JavaScript, which any browser can run directly with zero setup. That also meant every file was simple enough for you to open and read yourself, even without a coding background.

**Getting it online:**
- Connected this project folder to your GitHub account (`yashdeshmukh25/NerdsGuideTo`) — GitHub is where the project's code lives and its history is tracked.
- Turned on **GitHub Pages**, a free feature of GitHub that can host a simple website straight from the repository.
- The very first deploy attempt silently failed — a known hiccup that happens the first time you turn on GitHub Pages (the hosting takes a minute to fully switch on behind the scenes). Fixed by simply triggering a second deploy, which succeeded.
- Confirmed the live site loaded correctly, with every image and animation working.

---

## Day 2 — 2026-08-18 — Rebuilt as a real web app, with animation

**The ask:** you said you didn't want a "static" website — you wanted something built the way modern, polished websites actually are, with room for much richer animation and interactivity, aiming for "the best website out there."

**The decision, and why:** a plain HTML/CSS/JS site (what we had) can only animate so much before the code gets messy and hard to maintain. The standard way professional/polished sites are built today is with a **framework** — pre-built tooling that organizes a site into reusable pieces and makes rich animation straightforward. Specifically, we went with:
- **Next.js** — the framework itself, handles the site's structure and pages
- **Tailwind CSS** — a styling toolkit
- **Framer Motion** — an animation library, used for everything from the mascot's floating idle animation and rising steam, to cards lifting on hover, to sections fading/sliding into view as you scroll, to the drink-ratio bars animating their fill

This does require Node.js, so before starting, you were asked to install it — you ran the install command yourself (`winget install OpenJS.NodeJS.LTS`), which was the one piece of "software installation" in this whole project.

**What happened during the rebuild (the technical part, simplified):**
- Set up the new project structure and got Node.js talking to it correctly.
- Your project folder lives inside OneDrive, which is great for backup but tries to cloud-sync *everything* in the folder — including thousands of small technical files that modern web tooling generates (a folder called `node_modules`). That's not dangerous, just occasionally slow. A couple of approaches to sidestep it were tried; the one that actually worked without breaking anything was simply accepting that OneDrive syncs those files too — a documented, low-priority annoyance rather than a real problem.
- Rebuilt the homepage and the Coffee 101 guide from scratch as **components** — reusable building blocks (a "card" component, a "header" component, etc.) instead of repeating the same HTML over and over. This makes it much faster to add new guides later: most of the Coffee 101 content is now just a list of data (bean types, brewing methods, drinks) that the page automatically turns into cards, rather than hand-written HTML for each one.
- Along the way, one bug came up and got fixed same-session: the animated mascot on the homepage briefly rendered invisible (zero size) due to a common technical quirk with images inside grid layouts — added an explicit size rule and it started rendering correctly.
- Tested everything in a real browser (both pages, every animation, every image) before considering it done.
- Cleaned up all the old plain-HTML files, since they were now fully replaced.

**Moving hosting from GitHub Pages to Vercel:** the new site needs a slightly smarter hosting setup than GitHub Pages can provide (GitHub Pages only serves plain files; this site now needs a small amount of server-side logic to run). **Vercel** is the standard, free hosting service built specifically for Next.js sites, made by the same company that builds Next.js. You signed up and connected your GitHub repo to it yourself — from now on, every time this project's code is updated and pushed to GitHub, Vercel automatically rebuilds and re-deploys the live site within about a minute. No manual redeploy steps needed anymore.

**Result:** confirmed live at [nerds-guide-to.vercel.app](https://nerds-guide-to.vercel.app/), both pages checked directly in a browser, everything — layout, illustrations, animations — working as intended.

Your old GitHub Pages link now shows a stale, broken version of the old static site (expected, since we moved away from it) — safe to ignore, or you can turn off GitHub Pages entirely in the repo's Settings whenever convenient.

---

## Day 2 (continued) — 2026-08-18 — New white + blue-glow theme, animated title, redesigned nav

**The ask:** switch the whole site's background to white, add a soft blue glow that follows the mouse around, drop the boxed header in favor of just the site name top-left with a menu top-right, and open the homepage with a big elegant animated title instead of the old headline/button/mascot combo.

**What changed and why:**

- **White background, everywhere.** The old warm cream/tan tones (used for section stripes, card fills, and the dark-brown footer) are gone — page background, cards, and footer are all white now, with a soft neutral gray for borders instead of the old tan. This wasn't just a color swap: the new cursor glow needs actual open white space to be visible against, so simplifying the backgrounds down to one consistent white was part of making the glow effect work at all.
- **The cursor glow.** A large, soft blue circle now follows your mouse around the page, sitting behind everything (so it never blocks clicks) and easing smoothly toward the cursor rather than snapping instantly to it — that little bit of "lag" is what makes it feel alive instead of just glued to the pointer.
- **New top bar, used on every page.** The old boxed header (with a border and background) is gone. In its place: just the site name, "Nerd's Guide To," floating top-left, and a small hamburger-style menu button top-right that opens a dropdown with Home and Coffee 101 (easy to add more guides to later). It's the same on every page now, instead of the homepage and guide pages having slightly different headers.
- **Animated homepage title.** The old homepage opened with a headline, a paragraph, a button, and the nerd mascot illustration. That's been replaced with something more like a title card: "Nerd's Guide To" written out in an elegant script font, animating in one letter at a time — but only once the page (and its fonts) have actually finished loading, so it never starts before it can look right. Once the last letter lands, a simple tagline fades in underneath: "Pick new rabbit holes to fall into." The font you asked for, "Angelleta," doesn't appear to be a published font available online, so a close, similarly elegant cursive font called **Great Vibes** was used instead — easy to swap later if you find the exact font you meant.
- **The animated mascot lost its homepage spot.** Since the new homepage opening is typography-led rather than illustration-led, the little floating nerd-with-coffee-mug animation from the old hero isn't used on the homepage anymore. Nothing was deleted from history — it's recoverable from an earlier checkpoint if you'd like it back somewhere (like the Coffee guide page).

**A note on how this got checked:** normally each round of changes gets a real look in a browser before being called done. This time, the visual preview tool wasn't displaying on this end, so this round shipped based on thorough structural checks (colors, fonts, layout math, menu behavior, mobile sizing all verified in code) rather than an actual look at it — worth double-checking this one yourself and flagging anything that looks off.

---

## Day 2 (continued) — 2026-08-19 — True handwriting animation for the title

**The ask:** the letter-by-letter fade-in from the previous round wasn't what was wanted — the request was for the title to look like it's genuinely being handwritten with one continuous pen stroke, not letters popping/fading in one at a time (a "typewriter effect").

**Why the previous version fell short:** animating whole letters fading upward one after another is a common trick, but it doesn't look like handwriting — real handwriting is a single moving line tracing out the actual shape of each letter. To do that properly, the animation needs to know the real outline of every letter's strokes, not just show/hide whole characters.

**What was built instead:** the actual letter-shapes of the word "Nerd's Guide To," as drawn by the Great Vibes script font, were extracted directly from the font file itself (a small one-time script, `scripts/generate-title-path.js`, using a library called `opentype.js` that can read a font file's internal letter-outline data) and flattened into a single continuous outline, ordered left to right the same way a pen would move across the page. That outline is saved as data (`lib/titlePath.js`) and drawn on the homepage using a standard web technique for "draw-on" effects: the outline starts completely hidden, then is gradually revealed along its length until the whole word is traced, and only once the tracing finishes does it fill in solid, like ink soaking into the outline. This is genuinely animating the pen strokes, not the letters as blocks — closer to what was actually asked for.

A nice side effect: because the drawing no longer depends on the script font being loaded and rendered live in the browser (the shape is already captured as data), the site no longer needs to download that font at all — one less thing to load.

Also added: if someone's device is set to reduce motion (an accessibility setting some people use to avoid animation-related discomfort), the title just appears instantly instead of animating — a small courtesy that costs little to include.

---

## Plain-language glossary

A few terms that'll keep coming up in this log or in conversation:

- **Repo (repository):** the project's folder, tracked by Git/GitHub, with a full history of every change ever made to it.
- **Commit:** one saved "checkpoint" of changes, with a short message explaining what changed and why.
- **Push:** sending your saved checkpoints up to GitHub, so they're backed up and (if hosting is connected) go live.
- **Deploy / Deployment:** the act of publishing the current code so it's live on the internet at a real URL.
- **Framework:** a pre-built toolkit for building websites/apps, so you're not reinventing basic plumbing every time.
- **Component:** one reusable, self-contained piece of a page — e.g. a "card," a "header" — built once and reused wherever it's needed.
- **Dependency / package:** a piece of code someone else wrote that this project relies on (e.g. the animation library). `node_modules` is the folder where all of these actually live on your computer.
- **Node.js:** the underlying software that lets JavaScript-based web tools run on your computer at all (outside of a browser).
- **Dev server:** a temporary, local-only version of the website that runs on your own computer while building it, so changes can be previewed instantly before anything goes live.
