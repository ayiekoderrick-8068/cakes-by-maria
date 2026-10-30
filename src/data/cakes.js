import { flavourRate } from "./flavours";
import { cakeFilters } from "./categories";

import bentoChocolateImg from "../assets/cakes/bento-chocolate-hd.jpg";
import pinaColada2kgImg from "../assets/cakes/pinacolada-chocolate-2kg-hd.jpg";
import mintChocolateImg from "../assets/cakes/mint-chocolate-hd.jpg";
import chocolateCake1kgImg from "../assets/cakes/chocolate-cake-1kg-hd.jpg";
import cakePopsImg from "../assets/gallery/cake-pops.jpg";
import cakesiclesImg from "../assets/gallery/cakesicles.jpg";
import coconutImg from "../assets/gallery/coconut-berry-drip.jpg";
import peonyLineArtImg from "../assets/gallery/peony-line-art.jpg";
import wineBlackImg from "../assets/gallery/wine-black.jpg";
import brushstrokeFloralImg from "../assets/gallery/brushstroke-floral.jpg";
import blackGoldImg from "../assets/gallery/black-gold-silhouette.jpg";
import greenCrownImg from "../assets/gallery/green-crown.jpg";
import butterflyPinkImg from "../assets/gallery/butterfly-pink.jpg";
import yellowFlowersImg from "../assets/gallery/yellow-flowers.jpg";
import rosetteOmbreImg from "../assets/gallery/rosette-ombre-first-birthday.jpg";
import safariImg from "../assets/gallery/safari.jpg";
import pawPatrolImg from "../assets/gallery/paw-patrol.jpg";
import minnieMouseImg from "../assets/gallery/minnie-mouse.jpg";
import graduationImg from "../assets/gallery/graduation.jpg";
import teddyBearImg from "../assets/gallery/teddy-bear.jpg";
import pink10thImg from "../assets/gallery/pink-10th-birthday.jpg";
import freshFruitImg from "../assets/gallery/fresh-fruit.jpg";
import farewellImg from "../assets/gallery/farewell-strawberry.jpg";
import tiktokImg from "../assets/gallery/tiktok-11th-birthday.jpg";
import gradeOneImg from "../assets/gallery/ready-for-grade-one.jpg";
import guylianImg from "../assets/gallery/roses-chocolate-ribbon.jpg";
import lineArtFaceImg from "../assets/gallery/line-art-face-roses.jpg";
import honeybeeImg from "../assets/gallery/honeybee.jpg";
import redDripImg from "../assets/gallery/red-drip-strawberry.jpg";
import goldWhiteImg from "../assets/gallery/gold-white-buttercream.jpg";
import purple11Img from "../assets/gallery/purple-11th-birthday.jpg";
import blueDripImg from "../assets/gallery/blue-drip-13th-birthday.jpg";
import vanillaOreoImg from "../assets/gallery/vanilla-oreo-drip.jpg";
import mintDripCupcakesImg from "../assets/gallery/chocolate-mint-drip-cupcakes.jpg";
import blueberryGoldImg from "../assets/gallery/blueberry-gold-grey.jpg";
import princessImg from "../assets/gallery/princess-fondant.jpg";
import aquaLilacImg from "../assets/gallery/aqua-lilac-drip-liz.jpg";
import rainbowImg from "../assets/gallery/rainbow-layer.jpg";
import kitkatImg from "../assets/gallery/kitkat-candy.jpg";
import essenceImg from "../assets/gallery/essence-butterfly-square.jpg";
import chessImg from "../assets/gallery/chess-board.jpg";
import waferDripImg from "../assets/gallery/chocolate-wafer-drip.jpg";
import cem13Img from "../assets/gallery/cem-13th-roses-palm.jpg";
import vintage50Img from "../assets/gallery/vintage-50th-filmstrip.jpg";
import unicornImg from "../assets/gallery/unicorn-and-yellow-cakes.jpg";
import spongebobImg from "../assets/gallery/spongebob.jpg";
import emoji15Img from "../assets/gallery/emoji-15th.jpg";
import pink50Img from "../assets/gallery/pink-50th-strawberry.jpg";
import pianoImg from "../assets/gallery/grand-piano.jpg";
import letterSImg from "../assets/gallery/letter-s-graduation.jpg";
import citrusImg from "../assets/gallery/citrus-sponge.jpg";
import medalImg from "../assets/gallery/medal-print.jpg";
import raspberry31Img from "../assets/gallery/raspberry-chocolate-31st.jpg";
import purpleGoldLeafImg from "../assets/gallery/purple-gold-leaf.jpg";
import blackCopperImg from "../assets/gallery/black-copper-drip.jpg";
import g10Img from "../assets/gallery/g10-brotherhood.jpg";
import pinkBlueGraduationImg from "../assets/cakes/pink-blue-graduation-two-tier.jpg";
import blueWhiteCelebrationImg from "../assets/cakes/blue-white-congrats-celebration.jpg";
import redOrangeNumberImg from "../assets/cakes/red-orange-number-cakes-18-17.jpg";
import pinkCustomerAppreciationImg from "../assets/cakes/pink-customer-service-week-cake.jpg";

/**
 * The signature cakes from the business's real WhatsApp price list — fixed
 * prices, shown on the homepage "Popular Cakes" section and in the full
 * catalogue. Items without a `featured` flag only appear in the catalogue;
 * items without an `image` fall back to the branded placeholder.
 */
export const signatureCakes = [
  { id: "mint-chocolate-1kg", name: "Mint & Chocolate", flavour: "Mint & Chocolate", size: "1 kg", price: 2500, categories: ["birthday"], featured: true, image: mintChocolateImg, photoId: "minnie-cake" },
  { id: "red-velvet-chocolate", name: "Red Velvet & Chocolate", flavour: "Red Velvet & Chocolate", size: "1 kg", price: 2500, categories: ["birthday", "bridal"], featured: true },
  { id: "pina-colada-chocolate", name: "Piña Colada & Chocolate", flavour: "Piña Colada & Chocolate", size: "2 kg", price: 4300, categories: ["birthday", "bridal"], featured: true, image: pinaColada2kgImg, photoId: "teddy-cake" },
  { id: "mint-chocolate-2kg", name: "Mint & Chocolate", flavour: "Mint & Chocolate", size: "2 kg", price: 4700, categories: ["birthday", "corporate"], featured: true, image: mintChocolateImg, photoId: "minnie-cake" },
  { id: "bubblegum", name: "Bubblegum Cake", flavour: "Bubblegum", size: "1 kg", price: 2500, categories: ["birthday", "baby-shower"], featured: false },
  { id: "chocolate-caramel", name: "Chocolate Cake with Caramel Filling", flavour: "Chocolate & Caramel", size: "1 kg", price: 2500, categories: ["birthday"], featured: true, image: chocolateCake1kgImg },
  { id: "pina-colada-vanilla", name: "Piña Colada & Vanilla", flavour: "Piña Colada & Vanilla", size: "2 kg", price: 4000, categories: ["birthday", "baby-shower"], featured: false },
  { id: "chocolate-fudge", name: "Chocolate Fudge Cake", flavour: "Chocolate Fudge", size: "1 kg", price: 2800, categories: ["birthday", "graduation"], featured: false },
  { id: "coconut-cake", name: "Coconut Cake", flavour: "Coconut", size: "1.5 kg", price: 3700, categories: ["birthday", "baby-shower"], featured: true, image: coconutImg },
  { id: "sponge-cake", name: "Sponge Cake", flavour: "Sponge", size: "1 kg", price: 2000, categories: ["birthday", "corporate"], featured: false },
  { id: "chocolate-cake", name: "Chocolate Cake", flavour: "Chocolate", size: "1.5 kg", price: 5000, categories: ["birthday", "corporate"], featured: false, image: chocolateCake1kgImg },
  { id: "bento-chocolate", name: "Bento Chocolate", flavour: "Chocolate", size: "Bento", price: 1500, categories: ["bento"], featured: true, image: bentoChocolateImg },
  { id: "chocolate-popsicle", name: "Chocolate Popsicle", flavour: "Chocolate", size: "Each", price: 200, categories: ["treats"], featured: false, image: cakesiclesImg },
  { id: "cake-pops", name: "Cake Pops", flavour: "Assorted", size: "Each", price: 100, categories: ["treats"], featured: false, image: cakePopsImg },
  ...[
    // No photo supplied yet for the green drip cake: it shows the branded placeholder until one is added to src/assets/cakes.
    { id: "green-chocolate-drip", name: "Green Chocolate Drip Cake", price: 2000, categories: ["birthday"], description: "Beautifully decorated celebration cake with green buttercream borders and elegant chocolate drip detailing." },
    { id: "blue-white-celebration", name: "Blue & White Celebration Cake", price: 4000, categories: ["celebration"], image: blueWhiteCelebrationImg, alt: "Round blue-and-white buttercream cake with blue rosettes and a “Congrats Liam” message", description: "Elegant blue-and-white celebration cake with floral frosting details, perfect for special occasions." },
    { id: "pink-blue-graduation", name: "Pink & Blue Graduation Cake", price: 5800, categories: ["graduation"], image: pinkBlueGraduationImg, alt: "Two-tier pink and blue buttercream cake topped with a black graduation cap", description: "Two-tier graduation cake with vibrant pink-and-blue buttercream and a graduation cap decoration." },
    { id: "red-orange-number-cakes", name: "Red & Orange Number Cake", price: 2400, categories: ["number", "birthday"], image: redOrangeNumberImg, alt: "Red 18 cake and orange 17 cake decorated with buttercream rosettes and pearls", description: "Personalized number cake with colorful buttercream flowers, ideal for birthdays and milestone celebrations." },
    { id: "pink-customer-appreciation", name: "Pink Customer Appreciation Cake", price: 1000, categories: ["corporate", "custom"], image: pinkCustomerAppreciationImg, alt: "Pink square buttercream cake with piped borders, sprinkles and a Happy Customer Service Week message", description: "Custom message cake for customer appreciation, business celebrations, and special occasions." },
  ].map((cake) => ({ flavour: cake.name, size: "Custom size", featured: false, ...cake })),
];

/**
 * Identity of a photo, so the same picture is never shown twice. Drops the query
 * string and, in production builds, the file name: Vite names every asset
 * `<name>-<content hash>.<ext>`, so identical files saved under different names
 * share the trailing hash. (In dev the full path is used.)
 */
export function imageKey(src) {
  if (!src) return null;
  const path = String(src).split(/[?#]/)[0];
  return path.match(/-([\w-]{8})\.(?:jpe?g|png|webp)$/i)?.[1] ?? path;
}

/** Filter slugs in the order the homepage tries to represent them. */
export const HOMEPAGE_CATEGORY_PRIORITY = ["graduation", "kids", "birthday", "baby-shower", "wedding", "anniversary"];

/**
 * Picks a varied set of cakes for a homepage section. Only cakes with a photo
 * qualify, and each distinct photo is used once (`photoId` marks the same cake
 * photographed in different files). Cakes are taken round-robin through
 * `categoryPriority` — one per category per round — so no single occasion fills
 * the grid, and categories with no photographed cake are simply skipped. Fewer
 * than `limit` cakes are returned when that is all there is. Nothing is removed
 * from the catalogue.
 */
export function pickVariedCakes(cakes, categoryPriority = HOMEPAGE_CATEGORY_PRIORITY, limit = 9) {
  const candidates = [...cakes.filter((cake) => cake.featured), ...cakes.filter((cake) => !cake.featured)].filter(
    (cake) => cake.image
  );
  const photoKey = (cake) => cake.photoId ?? imageKey(cake.image);
  const picked = [];
  const usedPhotos = new Set();

  let addedThisRound = true;
  while (addedThisRound && picked.length < limit) {
    addedThisRound = false;
    for (const category of categoryPriority) {
      if (picked.length >= limit) break;
      const next = candidates.find((cake) => !usedPhotos.has(photoKey(cake)) && cakeMatches(cake, category));
      if (next) {
        picked.push(next);
        usedPhotos.add(photoKey(next));
        addedThisRound = true;
      }
    }
  }
  return picked;
}

/**
 * Photographed designs from the business's portfolio. They have no fixed price
 * (each is quoted on request) and are what the Gallery page shows too.
 *
 * To add a cake: drop the photo in src/assets/gallery, import it above, and add
 * a record here. `categories` are tags — any of the slugs in `categoryLabels`
 * (data/categories.js); the catalogue and gallery filters pick them up
 * automatically. Set `review` to a note when the occasion is a judgement call.
 */
// Photos that also back a priced cake above, stored there as a different file of the same cake
const SAME_PHOTO_AS_PRICED_CAKE = { "minnie-mouse": "minnie-cake", "teddy-bear": "teddy-cake" };

const photoCake = (id, name, categories, image, review) => ({
  id,
  name,
  flavour: name,
  size: "Custom size",
  categories,
  featured: false,
  image,
  ...(SAME_PHOTO_AS_PRICED_CAKE[id] ? { photoId: SAME_PHOTO_AS_PRICED_CAKE[id] } : {}),
  ...(review ? { review } : {}),
});

export const photoCakes = [
  photoCake("peony-line-art", "Peony & Line-Art Cake", ["custom"], peonyLineArtImg, "No occasion shown"),
  photoCake("black-wine-roses", "Black Wine & Roses Cake", ["birthday", "anniversary"], wineBlackImg),
  photoCake("brushstroke-floral", "Brushstroke Floral Cake", ["birthday"], brushstrokeFloralImg),
  photoCake("black-gold-birthday", "Black & Gold Birthday Cake", ["birthday"], blackGoldImg),
  photoCake("emerald-crown", "Emerald Crown Birthday Cake", ["birthday"], greenCrownImg),
  photoCake("pink-butterfly-birthday", "Pink Butterfly Birthday Cake", ["birthday"], butterflyPinkImg),
  photoCake("yellow-chrysanthemum", "Yellow Chrysanthemum Cake", ["custom"], yellowFlowersImg, "No occasion shown"),
  photoCake("ombre-rosette-first-birthday", "Ombre Rosette First Birthday Cake", ["birthday", "kids"], rosetteOmbreImg),
  photoCake("safari-baby", "Safari Baby Cake", ["kids", "birthday"], safariImg),
  photoCake("paw-patrol", "Paw Patrol Cake", ["kids", "birthday"], pawPatrolImg),
  photoCake("minnie-mouse", "Minnie Mouse Cake", ["kids", "birthday"], minnieMouseImg),
  photoCake("graduation", "Graduation Cake", ["graduation"], graduationImg),
  photoCake("teddy-bear", "Teddy Bear Cake", ["baby-shower", "kids", "birthday"], teddyBearImg),
  photoCake("pink-10th-birthday", "Pink Butterfly 10th Birthday Cake", ["birthday"], pink10thImg),
  photoCake("fresh-fruit", "Fresh Fruit Cake", ["custom"], freshFruitImg, "No occasion shown"),
  photoCake("farewell-strawberry", "Farewell Strawberry Cake", ["custom"], farewellImg),
  photoCake("tiktok-11th-birthday", "TikTok 11th Birthday Cake", ["birthday", "kids"], tiktokImg),
  photoCake("ready-for-grade-one", "Ready for Grade One Cake", ["graduation", "kids"], gradeOneImg),
  photoCake("roses-chocolate-ribbon", "Roses & Chocolate Ribbon Cake", ["birthday", "anniversary"], guylianImg),
  photoCake("line-art-face-roses", "Line-Art Face & Roses Cake", ["custom"], lineArtFaceImg, "Name cake; occasion not shown"),
  photoCake("honeybee-birthday", "Honeybee Birthday Cake", ["birthday", "kids"], honeybeeImg),
  photoCake("red-drip-strawberry", "Red Drip Strawberry Cake", ["birthday"], redDripImg),
  photoCake("gold-white-buttercream", "Gold Accent Buttercream Cake", ["custom"], goldWhiteImg, "No occasion shown"),
  photoCake("purple-11th-birthday", "Purple Butterfly 11th Birthday Cake", ["birthday"], purple11Img),
  photoCake("blue-drip-13th-birthday", "Blue Drip 13th Birthday Cake", ["birthday"], blueDripImg),
  photoCake("vanilla-oreo-drip", "Vanilla Oreo Drip Cake", ["birthday"], vanillaOreoImg),
  photoCake("black-copper-drip", "Black & Copper Drip Birthday Cake", ["birthday"], blackCopperImg),
  photoCake("blueberry-gold-grey", "Blueberry & Gold Birthday Cake", ["birthday"], blueberryGoldImg),
  photoCake("aqua-lilac-drip", "Aqua & Lilac Drip Birthday Cake", ["birthday"], aquaLilacImg),
  photoCake("kitkat-candy", "Kit Kat & Candy Birthday Cake", ["birthday"], kitkatImg),
  photoCake("essence-butterfly-square", "Butterfly Square Birthday Cake", ["birthday"], essenceImg),
  photoCake("cem-13th-roses", "Roses & Palm Fan 13th Birthday Cake", ["birthday"], cem13Img),
  photoCake("emoji-15th", "Emoji 15th Birthday Cake", ["birthday"], emoji15Img),
  photoCake("pink-50th-strawberry", "Pink Strawberry Drip 50th Birthday Cake", ["birthday"], pink50Img),
  photoCake("raspberry-chocolate-31st", "Chocolate & Raspberry 31st Birthday Cake", ["birthday"], raspberry31Img),
  photoCake("purple-gold-leaf", "Purple Ombre & Gold Leaf Birthday Cake", ["birthday"], purpleGoldLeafImg),
  photoCake("chocolate-wafer-drip", "Chocolate Wafer & Ferrero Drip Cake", ["birthday"], waferDripImg),
  photoCake("vintage-50th-filmstrip", "Vintage 50th Photo Film-Strip Cake", ["birthday", "custom"], vintage50Img),
  photoCake("chess-board", "Chess Board Cake", ["birthday", "custom"], chessImg),
  photoCake("grand-piano", "Grand Piano Cake", ["birthday", "custom"], pianoImg),
  photoCake("rainbow-layer", "Rainbow Layer Cake", ["birthday"], rainbowImg),
  photoCake("spongebob", "SpongeBob Cake", ["kids", "birthday"], spongebobImg),
  photoCake("princess-fondant", "Princess Cake", ["kids", "birthday"], princessImg),
  photoCake("unicorn-and-yellow-cakes", "Unicorn Birthday Cake", ["kids", "birthday"], unicornImg, "Photo also shows a yellow floral cake; swap in a unicorn-only photo when available"),
  photoCake("letter-s-graduation", "Letter S Graduation Cake", ["graduation", "custom"], letterSImg),
  photoCake("g10-brotherhood", "G10 Brotherhood Cake", ["custom"], g10Img, "Organisation logo cake; occasion not shown"),
  photoCake("medal-print", "Edible Medal Print Cake", ["custom"], medalImg, "Award/tribute cake; occasion not shown"),
  photoCake("chocolate-mint-drip-cupcakes", "Chocolate Mint Drip Cake with Cupcakes", ["birthday", "custom"], mintDripCupcakesImg),
  photoCake("citrus-sponge", "Citrus Sponge Cake", ["birthday", "custom"], citrusImg),
];

/** "Made for Every Celebration" on the homepage: up to 9 cakes, a mix of occasions, all with distinct photos. */
export const homepageCakes = pickVariedCakes([...signatureCakes, ...photoCakes]);

/** Curated flavour picks per occasion, used to flesh out the catalogue at standard sizes. */
const occasionFlavourPicks = {
  birthday: ["Vanilla", "Chocolate", "Red Velvet", "Marble", "Bubblegum"],
  "baby-shower": ["Vanilla", "Strawberry", "Lemon", "Coconut"],
  bridal: ["Red Velvet", "White Forest", "Salted Caramel", "Blueberry"],
  graduation: ["Chocolate Fudge", "Black Forest", "Coffee", "Carrot Cake"],
  corporate: ["Coffee", "Chocolate", "Carrot Cake", "Marble"],
};

const sizeOptions = [1, 1.5, 2];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function buildOccasionCakes() {
  const generated = [];
  Object.entries(occasionFlavourPicks).forEach(([category, flavours]) => {
    flavours.forEach((flavour, index) => {
      const size = sizeOptions[index % sizeOptions.length];
      generated.push({
        id: `${category}-${slugify(flavour)}-${size}kg`,
        name: `${flavour} Cake`,
        flavour,
        size: `${size} kg`,
        price: Math.round(flavourRate(flavour) * size),
        categories: [category],
        featured: false,
      });
    });
  });
  return generated;
}

const bentoCatalogueCakes = [
  {
    id: "bento-classic",
    name: "Bento Cake",
    flavour: "Chef's choice",
    size: "Bento",
    price: 1000,
    categories: ["bento"],
    featured: false,
  },
  {
    id: "bento-plus-2",
    name: "Bento Cake + 2 Cupcakes",
    flavour: "Chef's choice",
    size: "Bento",
    price: 1200,
    categories: ["bento"],
    featured: false,
  },
  {
    id: "bento-plus-5",
    name: "Bento Cake + 5 Cupcakes",
    flavour: "Chef's choice",
    size: "Bento",
    price: 1500,
    categories: ["bento"],
    featured: false,
  },
];

// No `price` on purpose: cupcake and doughnut prices are still to be discussed, so they show "Price on request".
// Add a `price` to each item once agreed, and an `image` when photos are available.
const cupcakeCatalogueCakes = [
  {
    id: "cupcake-plain",
    name: "Plain Cupcake",
    flavour: "Vanilla",
    size: "Single",
    categories: ["cupcakes"],
    featured: false,
  },
  {
    id: "cupcake-decorated",
    name: "Decorated Cupcake",
    flavour: "Assorted",
    size: "Single",
    categories: ["cupcakes"],
    featured: false,
  },
  {
    id: "cupcake-six-topper",
    name: "6 Decorated Cupcakes with Custom Topper",
    flavour: "Assorted",
    size: "Box of 6",
    categories: ["cupcakes"],
    featured: false,
  },
];

const doughnutCatalogueCakes = [
  {
    id: "doughnut-plain",
    name: "Plain Doughnut",
    flavour: "Classic",
    size: "Single",
    categories: ["doughnuts"],
    featured: false,
  },
  {
    id: "doughnut-frosted",
    name: "Assorted Frosted Doughnut",
    flavour: "Assorted",
    size: "Single",
    categories: ["doughnuts"],
    featured: false,
  },
];

// Photographed items lead the catalogue so the browsing experience is image-first.
export const allCakes = [
  ...signatureCakes.filter((cake) => cake.image),
  ...photoCakes,
  ...signatureCakes.filter((cake) => !cake.image),
  ...buildOccasionCakes(),
  ...bentoCatalogueCakes,
  ...cupcakeCatalogueCakes,
  ...doughnutCatalogueCakes,
];

export const PRICE_ON_REQUEST = "Price on request";

export function formatPrice(amount) {
  return typeof amount === "number" ? `KSh ${amount.toLocaleString("en-KE")}` : PRICE_ON_REQUEST;
}

/** True when `cake` belongs to the filter `slug` (a filter chip, or a single legacy tag). */
export function cakeMatches(cake, slug) {
  if (!slug || slug === "all") return true;
  const tags = cakeFilters.find((filter) => filter.slug === slug)?.tags ?? [slug];
  return tags.some((tag) => cake.categories.includes(tag));
}

/** The filter chips that have at least one cake in `cakes`, each with its cake count. */
export function filtersWithCounts(cakes) {
  return cakeFilters
    .map((filter) => ({ ...filter, count: cakes.filter((cake) => cakeMatches(cake, filter.slug)).length }))
    .filter((filter) => filter.count > 0);
}

export function getCakesByCategory(categorySlug) {
  return allCakes.filter((cake) => cakeMatches(cake, categorySlug));
}
