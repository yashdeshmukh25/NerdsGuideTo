export const beans = [
  {
    img: "/images/bean-arabica.svg",
    share: "~60–70% of world production",
    name: "Arabica",
    desc: "Grown at high altitude in cooler climates. Smoother, sweeter, and more acidic, with delicate floral or fruity notes. Lower caffeine, higher price.",
    fact: 'Nearly every "specialty" or single-origin bag you see is Arabica.',
  },
  {
    img: "/images/bean-robusta.svg",
    share: "~30–40% of world production",
    name: "Robusta",
    desc: "Grown at lower altitudes on a hardier, disease-resistant plant. Bolder, harsher, more bitter — with roughly double the caffeine.",
    fact: "It also produces more crema, so it sneaks into a lot of espresso blends.",
  },
  {
    img: "/images/bean-liberica.svg",
    share: "<2% of world production",
    name: "Liberica",
    desc: "Rare, large, irregularly shaped beans mostly grown in the Philippines and Malaysia. Woody, smoky, almost floral-fruity flavor unlike anything else.",
    fact: 'It\'s called "Barako" coffee in the Philippines and has a cult following.',
  },
  {
    img: "/images/bean-excelsa.svg",
    share: "A rare Liberica relative",
    name: "Excelsa",
    desc: "Once classified as its own species, now considered a Liberica variety. Tart, fruity, and a little dark-roast-y — often used to add complexity to blends.",
    fact: "It brings both tart and dark notes to the same cup — chaotic, but it works.",
  },
];

export const journey = [
  { title: "Grow & Ripen", desc: "Coffee cherries ripen on the plant over 7–9 months, usually near the equator." },
  { title: "Harvest", desc: "Ripe cherries are hand- or machine-picked, ideally at peak red ripeness." },
  { title: "Process", desc: "The fruit is removed from the seed — washed, natural, or honey method." },
  { title: "Dry & Mill", desc: "Beans are dried to ~11% moisture, then milled to remove any remaining husk." },
  { title: "Roast", desc: "Green beans are roasted at high heat, turning brown and developing flavor." },
  { title: "Grind & Brew", desc: "Roasted beans are ground to the right size and brewed into your cup." },
];

export const processes = [
  { name: "Washed", className: "process-washed", desc: "Fruit is stripped off before drying. Clean, bright, and acidic — the flavor is all bean, no fruit." },
  { name: "Natural", className: "process-natural", desc: "Cherries dry whole, fruit still on. Heavy body, boozy-sweet, fruit-forward flavor." },
  { name: "Honey", className: "process-honey", desc: 'Some sticky fruit ("mucilage") stays on during drying. Sweet, syrupy, right in between.' },
];

export const roasts = [
  { name: "Light", color: "#D9B48F", desc: "Bright, acidic, origin flavor front and center. No surface oil." },
  { name: "Medium", color: "#B98457", desc: "Balanced sweetness and acidity. The everyday crowd-pleaser." },
  { name: "Medium-Dark", color: "#8A5A34", desc: "Fuller body, deeper flavor, a hint of surface sheen." },
  { name: "Dark", color: "#5C3A26", desc: "Bold, smoky, bittersweet. Oily surface, less origin character." },
  { name: "French", color: "#2B1B12", desc: "Almost black, very oily. Charred and smoky — roast flavor wins." },
];

export const grinds = [
  { name: "Extra Fine", size: 8, use: "Turkish coffee" },
  { name: "Fine", size: 13, use: "Espresso" },
  { name: "Medium-Fine", size: 18, use: "Pour-over, AeroPress" },
  { name: "Medium", size: 23, use: "Drip machine" },
  { name: "Medium-Coarse", size: 28, use: "Chemex, Clever" },
  { name: "Coarse", size: 33, use: "French press" },
  { name: "Extra Coarse", size: 38, use: "Cold brew" },
];

export const brewMethods = [
  {
    img: "/images/device-espresso.svg",
    name: "Espresso",
    grind: "Fine grind",
    time: "~25–30 sec",
    desc: "Hot water is forced through tightly packed grounds at high pressure. Concentrated, syrupy, and the base for every milk drink below.",
  },
  {
    img: "/images/device-pourover.svg",
    name: "Pour-Over",
    grind: "Medium-fine",
    time: "~3 min",
    desc: "Water is poured slowly and manually over grounds in a filter cone (like a V60). Clean, bright, and highlights delicate flavors.",
  },
  {
    img: "/images/device-frenchpress.svg",
    name: "French Press",
    grind: "Coarse",
    time: "~4 min",
    desc: "Grounds steep directly in hot water, then get pressed out with a metal mesh plunger. Full body, no paper filter to soak up the oils.",
  },
  {
    img: "/images/device-aeropress.svg",
    name: "AeroPress",
    grind: "Medium-fine",
    time: "~1–2 min",
    desc: "Part immersion, part pressure — grounds steep briefly, then get pushed through a paper filter. Fast, forgiving, and travel-friendly.",
  },
  {
    img: "/images/device-mokapot.svg",
    name: "Moka Pot",
    grind: "Fine-medium",
    time: "~5 min",
    desc: "Stovetop pressure pushes boiling water up through grounds. Strong, bold, and about as close to espresso as most kitchens get.",
  },
  {
    img: "/images/device-coldbrew.svg",
    name: "Cold Brew",
    grind: "Extra coarse",
    time: "12–24 hrs",
    desc: "Grounds steep in cold or room-temp water for a very long time. Smooth, low-acid, naturally sweet — usually served over ice.",
  },
];

const KEY_LABEL = {
  espresso: "Espresso",
  milk: "Milk",
  foam: "Foam",
  water: "Water",
  choc: "Chocolate",
};
const KEY_COLOR = {
  espresso: "#3A2417",
  milk: "#E9D9BE",
  foam: "#FBF1E1",
  water: "#BFDDD6",
  choc: "#6B3A22",
};

function seg(type, pct) {
  return { type, pct, label: `${pct}%` };
}

export const drinks = [
  { name: "Espresso", sub: "Just the shot. No additions.", segments: [seg("espresso", 100)] },
  { name: "Americano", sub: "Espresso, elongated with hot water.", segments: [seg("espresso", 30), seg("water", 70)] },
  { name: "Macchiato", sub: 'Espresso, "marked" with a little foam.', segments: [seg("espresso", 85), seg("foam", 15)] },
  { name: "Cortado", sub: "Espresso cut with an equal part steamed milk.", segments: [seg("espresso", 50), seg("milk", 50)] },
  { name: "Flat White", sub: "Espresso with silky microfoam milk, stronger than a latte.", segments: [seg("espresso", 35), seg("milk", 65)] },
  { name: "Cappuccino", sub: "Even thirds of espresso, milk, and thick foam.", segments: [seg("espresso", 33), seg("milk", 33), seg("foam", 34)] },
  { name: "Latte", sub: "Espresso, lots of steamed milk, a light cap of foam.", segments: [seg("espresso", 20), seg("milk", 70), seg("foam", 10)] },
  { name: "Mocha", sub: "A latte with chocolate — dessert's gateway drug.", segments: [seg("espresso", 20), seg("choc", 15), seg("milk", 55), seg("foam", 10)] },
];

export function drinkKey(segments) {
  return [...new Set(segments.map((s) => s.type))].map((type) => ({
    type,
    label: KEY_LABEL[type],
    color: KEY_COLOR[type],
  }));
}

export const glossary = [
  { term: "Crema", def: "The reddish-brown foam on top of a fresh espresso shot, from trapped CO₂ and oils." },
  { term: "Extraction", def: 'How much flavor water pulls from the grounds — "under" tastes sour, "over" tastes bitter.' },
  { term: "Body", def: "How heavy or thick a coffee feels on your tongue, from watery to syrupy." },
  { term: "Acidity", def: "The bright, tangy quality in coffee — not sourness, more like the zing in citrus." },
  { term: "Single-Origin", def: "Beans from one specific farm, region, or country, rather than a blend." },
  { term: "Terroir", def: "How soil, altitude, and climate shape a bean's flavor — borrowed straight from wine." },
  { term: "Cupping", def: "The formal tasting process pros use to score and compare coffees, like a wine tasting." },
  { term: "Green Coffee", def: "Unroasted coffee seeds — pale green, grassy-smelling, and shelf-stable for years." },
];

export const facts = [
  { title: "Legend has it...", body: "Coffee was discovered in Ethiopia when a goat herder named Kaldi noticed his goats got extra energetic after eating certain red berries." },
  { title: "World's priciest brew", body: "Kopi Luwak is made from beans eaten and, well, excreted by civets. Yes, people pay a lot of money for that." },
  { title: "Coffee capital", body: "Finland has the highest coffee consumption per person on Earth — several cups a day is completely normal there." },
  { title: "Global heavyweight", body: "Coffee is one of the most heavily traded commodities in the world, grown across more than 70 countries." },
];
