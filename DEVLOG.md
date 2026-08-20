# Project Log — Nerd's Guide To

This is a plain-language history of the project: what got built, in what order, and — most importantly — **why**. No code jargon left unexplained. If you're ever wondering "wait, why did we do that?", check here first.

Newest entries are at the bottom, so it reads top-to-bottom like a story.

**Jump to:**
- [Day 1 — First version, built as a simple website](#day-1--2026-08-17--first-version-built-as-a-simple-website)
- [Day 2 — Rebuilt as a real web app, with animation](#day-2--2026-08-18--rebuilt-as-a-real-web-app-with-animation)
- [Day 3 — Real handwriting fix, Cafe cup/spill, and a new Alcohol 101 guide](#day-3--2026-08-20--real-handwriting-fix-cafe-cupspill-and-a-new-alcohol-101-guide)
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

## Day 2 (continued) — 2026-08-19 — Transparent header, new icon, and a caveman/geek duo illustration

**The ask, in seven parts:** make the top bar see-through so the mouse glow shows through it; make that glow a bit darker, more visible, and smaller; add a faint grid of tiny dots across the homepage background; design a new "brain lighting up" icon to use as the site's favicon and next to the site name; make sure the homepage text wraps sensibly on phones; add a new illustration — a caveman by a cave and a geek by a library, facing each other, pure black outlines only, right under the homepage title, visible without scrolling — and reuse that same pair everywhere the site needs to depict them (starting with the Coffee 101 page); and finally, a solid grey footer with X (Twitter) and LinkedIn icon links.

**What changed:**

- **See-through top bar.** The site bar no longer has any background fill — it's just the logo, name, and menu button floating directly over whatever's behind them, including the glow.
- **Glow tuning.** The blue got a shade darker, noticeably more visible (opacity turned up), and physically smaller (about 18% smaller on desktop, more on phones) so it reads as a focused light rather than a big soft wash.
- **Dot grid.** A faint grid of small grey dots now sits behind the entire homepage, low-key enough to read as texture rather than pattern.
- **New favicon: a brain, lighting up.** A simple line-drawn brain with a lightning bolt spark in the middle and a few small rays coming off the top — used as the browser tab icon and placed next to "Nerd's Guide To" in the top bar and the footer, replacing the old coffee-cup icon (which was themed for the Cafe guide specifically, and didn't really represent the whole site).
- **Mobile text wrapping.** The homepage tagline now has a deliberate break point on small screens instead of relying on the browser to wrap wherever it runs out of room.
- **The caveman-and-geek illustration.** This was the biggest piece of this round. Four new illustrations were hand-drawn from scratch, this time in a completely different visual style from anything on the site before: pure black outlines, no fill color at all (previous illustrations were flat, colored shapes) —
  - a **caveman**, club over one shoulder, standing beside a simple **rock cave**
  - a **geek**, holding a book, standing beside a simple **bookshelf/library**
  
  positioned side by side, facing each other, directly under the homepage's animated title — and the whole homepage was tightened up (less empty padding around the title) specifically so this illustration fits on screen without needing to scroll on a typical laptop or phone.
- **One consistent pair, used everywhere.** As asked, this new caveman and geek aren't just a homepage decoration — they've replaced *every* earlier illustration of the two characters across the site, including the three spots on the Coffee 101 page that used to show the old colored versions (the page's opening illustration, and both comic-style back-and-forth moments). The old colored illustrations were removed since nothing uses them anymore. One thing worth knowing: this means the caveman and geek now look identical in every appearance (same pose, same expression) rather than having a different reaction drawn for each moment in the story — a deliberate simplification in exchange for one clean, consistent identity for the two characters, exactly as asked for.
- **Footer.** Solid grey background now (previously white), plus two small circular icon buttons linking out to X and LinkedIn.

**On verification this round:** the same visual-preview limitation from recent sessions was still in effect, so nothing here was confirmed with an actual screenshot. To compensate, this round leaned harder than usual on code-level checks that don't require seeing pixels — measuring exactly where elements land on the page (confirming the title + illustration genuinely fit within a typical screen's height before any scrolling), checking every new illustration's underlying shape data for errors, and confirming every image and page loads without errors. That's a meaningfully more rigorous check than "the code looks right," but it's still not the same as looking at it — please have a look when you can.

---

## Day 3 — 2026-08-20 — Real handwriting fix, Cafe cup/spill, and a new Alcohol 101 guide

**The ask, in three parts:** the "handwriting" title animation still wasn't right — it needed to finish one letter before starting the next, and the thin traced outline needed to become one solid, thick stroke, like real pen ink. Then, bring that same title animation to the Coffee page as "Cafe 101," add an illustrated coffee cup below it that topples and spills as you scroll, permanently turning the rest of the page brown from that point on (with every section re-colored to still look good against it), and swap the mouse cursor to a coffee emoji on that page only. Finally, build a whole new guide — Alcohol 101 — using the same visual playbook as the Coffee page, covering the basics for someone brand new to the topic.

**Why the animation still looked wrong:** the previous version traced every letter's outline as one single, uninterrupted pen path — which is actually why it looked like the letters were all blending together into one scribble instead of finishing one at a time. The fix was to treat each letter as its own separate drawing, so one letter's stroke has to fully finish before the next one starts (using the real per-letter shape data — the previous version had only ever captured the *whole word* as one connected outline, so this required regenerating that underlying data letter-by-letter, not just changing the animation). On top of that, the stroke itself was made much thicker — thick enough that tracing a letter's outline actually looks like solid ink filling in the shape, rather than a thin line sketching its edges.

**A detour worth knowing about:** getting this right took an unusually long back-and-forth this session, because the tool used to preview the site live wasn't visibly open on your end. Browsers intentionally pause all animation for a tab that isn't actually being looked at (to save your computer's battery/CPU) — so every test kept showing the animation "frozen," which looked exactly like a bug, even though the underlying code was firing correctly every time. That got fully diagnosed and ruled out as a real problem, but it's the reason this round leaned on lower-level checks (reading the page's internal state directly, rather than watching it animate) instead of the usual "watch it happen in a browser" verification. **Please open the preview / visit the live site yourself once this is up, to confirm the animations actually look right** — that's the one thing that couldn't be double-checked from this end today.

**What got built on the Coffee page:**
- A "Cafe 101" title now opens the page, drawn with the same fixed handwriting animation as the homepage.
- Below the existing intro, a new illustrated grey coffee cup (with coffee visible inside, seen from slightly above) sits in a scroll-driven sequence: as you scroll, the cup tips over, coffee floods out and covers the whole screen, and once it clears, the page's background has permanently switched to a warm brown for the rest of the article.
- Every section after that point — bean cards, the roasting/brewing/drink chapters, the glossary, the closing comic — was re-themed to read clearly on brown instead of white, without changing any of the actual written content. This was done efficiently by introducing a small set of reusable "theme" variables (surface color, text color, card color, etc.) that the Coffee page's styling already reads from, so flipping them once at the point of the spill re-colors everything below it automatically, instead of hand-editing every section individually.
- The mouse cursor turns into a coffee cup emoji anywhere on the Coffee page specifically (not the rest of the site).

**What got built for Alcohol 101:** a full new guide page at `/alcohol`, using the exact same visual language as the Coffee page (the handwritten title, the nerd/caveman comic banter, the card grids, the glossary, the closing joke) but on the normal light theme — no cup-and-spill equivalent, by design (agreed on scope before building, to keep that effect a coffee-specific touch rather than diluting it). Content-wise it covers: the four main families (beer, wine, spirits, cider/mead), how fermentation and distillation actually work, a strength/proof scale so "40% ABV" and "80 proof" actually mean something, a walk through the major spirits (whiskey, vodka, rum, gin, tequila, brandy), six classic cocktails with their real ingredient ratios, and a glossary of bar terms. A handful of new small icons (beer mug, wine glass, cocktail glass, and bottle icons per spirit) were hand-drawn to match the site's existing icon style. It's now listed on the homepage as a second "ready to read" guide, right next to Coffee.

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
