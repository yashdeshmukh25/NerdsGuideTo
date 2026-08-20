export const families = [
  {
    img: "/images/icon-beer.svg",
    share: "~3–13% ABV",
    name: "Beer",
    desc: "Grain (usually malted barley) is fermented, often with hops added for bitterness and aroma. The oldest and most-consumed alcoholic drink on Earth.",
    fact: "Beer was so central to ancient Mesopotamia that it was sometimes used to pay workers' wages.",
  },
  {
    img: "/images/icon-wine.svg",
    share: "~9–16% ABV",
    name: "Wine",
    desc: "Grapes (or other fruit) are crushed and fermented, skins and all for red, skins removed for white. Flavor depends heavily on grape variety and terroir.",
    fact: "A bottle of wine contains roughly 500–600 individual grapes.",
  },
  {
    img: "/images/icon-cocktail.svg",
    share: "~35–50% ABV",
    name: "Spirits",
    desc: "A fermented base (grain, fruit, sugarcane, agave) is distilled to concentrate the alcohol, boiling off and re-condensing it. This is where whiskey, vodka, rum, gin, and tequila all come from.",
    fact: 'The word "spirit" comes from alchemy — early distillers thought they were capturing the "spirit" of the liquid.',
  },
  {
    img: "/images/icon-cider.svg",
    share: "~4–12% ABV",
    name: "Cider & Mead",
    desc: "Cider ferments apple juice; mead ferments honey and water. Both are older and simpler than beer or wine, needing no grain-mashing or grape-crushing at all.",
    fact: "Mead is often called humanity's oldest alcoholic drink — honey ferments almost on its own if it gets wet.",
  },
];

export const journey = [
  { title: "Grow / Harvest", desc: "Grain, grapes, fruit, sugarcane, or agave are grown and harvested at peak ripeness or maturity." },
  { title: "Prepare", desc: "The raw material is malted, crushed, mashed, or juiced to release fermentable sugars." },
  { title: "Ferment", desc: "Yeast eats the sugar and produces alcohol and CO₂ — this alone makes beer, wine, cider, and mead." },
  { title: "Distill (optional)", desc: "For spirits, the fermented liquid is heated to concentrate the alcohol into a much stronger spirit." },
  { title: "Age / Rest", desc: "Many spirits and wines rest in barrels or tanks, picking up color, smoothness, and flavor over time." },
  { title: "Bottle & Serve", desc: "The finished drink is filtered, diluted to proof if needed, bottled, and poured." },
];

export const processes = [
  { name: "Fermentation", className: "process-ferment", desc: "Yeast converts sugar into alcohol and CO₂. Every alcoholic drink starts here — beer, wine, and cider stop at this step entirely." },
  { name: "Distillation", className: "process-distill", desc: "Fermented liquid is heated; alcohol evaporates first and is captured and cooled back into liquid. This is how you get spirits." },
  { name: "Aging", className: "process-age", desc: "Resting in oak barrels (or steel, or bottle) mellows harsh notes and adds color, vanilla, caramel, or oxidative complexity." },
];

export const strengths = [
  { name: "Session Beer", color: "#E8D9A8", desc: "~3–4% ABV. Light lagers and session ales, built for drinking more than one." },
  { name: "Wine & Cider", color: "#C9861F", desc: "~9–16% ABV. Fermentation alone rarely pushes past this — yeast dies off in its own alcohol." },
  { name: "Fortified / Liqueur", color: "#9C5A2E", desc: "~17–24% ABV. Port, sherry, and vermouth get a shot of spirit added after fermentation." },
  { name: "Standard Spirit", color: "#8A5A34", desc: "~40% ABV (80 proof). The global standard for whiskey, vodka, rum, gin, and tequila." },
  { name: "Cask Strength / Overproof", color: "#3A2417", desc: "55%+ ABV. Undiluted spirit straight from the barrel, or intentionally overproofed rum." },
];

export const proofExamples = [
  { name: "Light Beer", size: 8, use: "~4% ABV · 8 proof" },
  { name: "Wine", size: 13, use: "~12% ABV · 24 proof" },
  { name: "Fortified Wine", size: 17, use: "~20% ABV · 40 proof" },
  { name: "Standard Spirit", size: 24, use: "~40% ABV · 80 proof" },
  { name: "Navy Strength Gin", size: 28, use: "~57% ABV · 114 proof" },
  { name: "Cask Strength Whiskey", size: 33, use: "~65% ABV · 130 proof" },
  { name: "Grain Alcohol", size: 40, use: "~95% ABV · 190 proof" },
];

export const spirits = [
  {
    img: "/images/icon-whiskey.svg",
    name: "Whiskey",
    base: "Grain mash",
    abv: "~40–50% ABV",
    desc: "Fermented grain (barley, corn, rye, or wheat) is distilled and aged in wood barrels, which give it color and most of its flavor.",
  },
  {
    img: "/images/spirit-vodka.svg",
    name: "Vodka",
    base: "Grain or potato",
    abv: "~40% ABV",
    desc: "Distilled to a very high purity and heavily filtered to strip out flavor — the point is neutrality, not character.",
  },
  {
    img: "/images/spirit-rum.svg",
    name: "Rum",
    base: "Sugarcane / molasses",
    abv: "~40% ABV",
    desc: "Distilled from sugarcane juice or molasses. Unaged rum stays clear and light; aged rum turns amber and gains depth.",
  },
  {
    img: "/images/spirit-gin.svg",
    name: "Gin",
    base: "Grain + botanicals",
    abv: "~37–47% ABV",
    desc: "Starts as a neutral spirit, then gets redistilled or infused with juniper and other botanicals — that's the whole flavor.",
  },
  {
    img: "/images/spirit-tequila.svg",
    name: "Tequila",
    base: "Blue agave",
    abv: "~38–40% ABV",
    desc: "Made only from the roasted, fermented heart of the blue agave plant, and only in specific regions of Mexico.",
  },
  {
    img: "/images/spirit-brandy.svg",
    name: "Brandy",
    base: "Distilled wine/fruit",
    abv: "~35–60% ABV",
    desc: "Wine (or other fermented fruit) gets distilled, then usually aged in barrels — think of it as whiskey's fruity cousin.",
  },
];

function seg(type, name, pct, color, textColor) {
  return { type, name, pct, label: `${pct}%`, color, textColor };
}

export const cocktails = [
  {
    name: "Old Fashioned",
    sub: "Whiskey, sugar, and bitters, stirred over ice.",
    segments: [
      seg("whiskey", "Whiskey", 70, "#8A5A34", "#FBF1E1"),
      seg("sugar", "Sugar & Bitters", 10, "#E7A93F", "#3A2417"),
      seg("water", "Ice Melt", 20, "#BFDDD6", "#3A2417"),
    ],
  },
  {
    name: "Margarita",
    sub: "Tequila, orange liqueur, and fresh lime.",
    segments: [
      seg("tequila", "Tequila", 50, "#E7A93F", "#3A2417"),
      seg("liqueur", "Orange Liqueur", 20, "#F0A87A", "#5C3A26"),
      seg("lime", "Lime Juice", 30, "#A9D18D", "#2C4A1E"),
    ],
  },
  {
    name: "Mojito",
    sub: "White rum, lime, mint, and soda water.",
    segments: [
      seg("rum", "White Rum", 40, "#DDE3E8", "#3A2417"),
      seg("mint", "Lime & Mint", 20, "#3F9C82", "#FBF1E1"),
      seg("soda", "Soda Water", 40, "#BFDDD6", "#3A2417"),
    ],
  },
  {
    name: "Negroni",
    sub: "Equal parts gin, Campari, and sweet vermouth.",
    segments: [
      seg("gin", "Gin", 34, "#DCEFE8", "#3A2417"),
      seg("campari", "Campari", 33, "#B23A48", "#FBF1E1"),
      seg("vermouth", "Sweet Vermouth", 33, "#7B2D42", "#FBF1E1"),
    ],
  },
  {
    name: "Daiquiri",
    sub: "White rum, lime juice, and a little sugar.",
    segments: [
      seg("rum", "White Rum", 60, "#DDE3E8", "#3A2417"),
      seg("lime", "Lime Juice", 25, "#3F9C82", "#FBF1E1"),
      seg("sugar", "Sugar", 15, "#E7A93F", "#3A2417"),
    ],
  },
  {
    name: "Whiskey Sour",
    sub: "Whiskey, lemon juice, and a touch of sweetness.",
    segments: [
      seg("whiskey", "Whiskey", 50, "#8A5A34", "#FBF1E1"),
      seg("lemon", "Lemon Juice", 30, "#E7A93F", "#3A2417"),
      seg("foam", "Sugar & Foam", 20, "#FBF1E1", "#3A2417"),
    ],
  },
];

export function cocktailKey(segments) {
  return segments.map((s) => ({ type: s.type, label: s.name, color: s.color }));
}

export const glossary = [
  { term: "ABV", def: "Alcohol By Volume — the percentage of a drink's total volume that is pure alcohol." },
  { term: "Proof", def: "A strength scale roughly double the ABV in the US (40% ABV = 80 proof) — a holdover from an old gunpowder test." },
  { term: "Fermentation", def: "The process where yeast eats sugar and produces alcohol and CO₂ — the origin of every alcoholic drink." },
  { term: "Distillation", def: "Heating a fermented liquid to concentrate its alcohol by capturing and re-condensing the vapor." },
  { term: "Congeners", def: "Flavor-and-hangover-causing byproducts of fermentation, more common in darker, less-filtered spirits." },
  { term: "Cask Strength", def: "A spirit bottled straight from the barrel without dilution — usually 55%+ ABV." },
  { term: "Neat / On the Rocks", def: '"Neat" means straight, no ice, no water. "On the rocks" means poured over ice.' },
  { term: "Mixology", def: "The craft (and, these days, the science) of building balanced cocktails." },
];

export const facts = [
  { title: "Ancient habit", body: "Evidence of intentional alcohol fermentation dates back at least 9,000 years, to pottery found in Neolithic China." },
  { title: "Angel's share", body: 'Barrel-aged spirits lose a small percentage of volume to evaporation every year — distillers call it the "angel\'s share."' },
  { title: "Legally defined", body: "Bourbon must be made in the United States from at least 51% corn and aged in new charred oak barrels — anywhere else, it's not bourbon." },
  { title: "One proof standard", body: "The word \"proof\" comes from 16th-century England, where gunpowder soaked in spirit had to still ignite to \"prove\" the alcohol content." },
];
