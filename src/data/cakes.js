import { flavourRate } from "./flavours";

import bentoChocolateImg from "../assets/cakes/bento-chocolate-hd.jpg";
import pinaColada2kgImg from "../assets/cakes/pinacolada-chocolate-2kg-hd.jpg";
import mintChocolateImg from "../assets/cakes/mint-chocolate-hd.jpg";
import chocolateCake1kgImg from "../assets/cakes/chocolate-cake-1kg-hd.jpg";
import cakePopsImg from "../assets/gallery/cake-pops.jpg";
import cakesiclesImg from "../assets/gallery/cakesicles.jpg";
import coconutImg from "../assets/gallery/coconut-berry-drip.jpg";

/**
 * The signature cakes from the business's real WhatsApp price list — fixed
 * prices, shown on the homepage "Popular Cakes" section and in the full
 * catalogue. Items without a `featured` flag only appear in the catalogue;
 * items without an `image` fall back to the branded placeholder.
 */
export const signatureCakes = [
  { id: "mint-chocolate-1kg", name: "Mint & Chocolate", flavour: "Mint & Chocolate", size: "1 kg", price: 2500, categories: ["birthday"], featured: true, image: mintChocolateImg },
  { id: "red-velvet-chocolate", name: "Red Velvet & Chocolate", flavour: "Red Velvet & Chocolate", size: "1 kg", price: 2500, categories: ["birthday", "bridal"], featured: true },
  { id: "pina-colada-chocolate", name: "Piña Colada & Chocolate", flavour: "Piña Colada & Chocolate", size: "2 kg", price: 4300, categories: ["birthday", "bridal"], featured: true, image: pinaColada2kgImg },
  { id: "mint-chocolate-2kg", name: "Mint & Chocolate", flavour: "Mint & Chocolate", size: "2 kg", price: 4700, categories: ["birthday", "corporate"], featured: true, image: mintChocolateImg },
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
];
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

const cupcakeCatalogueCakes = [
  {
    id: "cupcake-plain",
    name: "Plain Cupcake",
    flavour: "Vanilla",
    size: "Single",
    price: 50,
    categories: ["cupcakes"],
    featured: false,
  },
  {
    id: "cupcake-decorated",
    name: "Decorated Cupcake",
    flavour: "Assorted",
    size: "Single",
    price: 80,
    categories: ["cupcakes"],
    featured: false,
  },
  {
    id: "cupcake-six-topper",
    name: "6 Decorated Cupcakes with Custom Topper",
    flavour: "Assorted",
    size: "Box of 6",
    price: 600,
    categories: ["cupcakes"],
    featured: false,
  },
];

export const allCakes = [
  ...signatureCakes,
  ...buildOccasionCakes(),
  ...bentoCatalogueCakes,
  ...cupcakeCatalogueCakes,
];

export function formatPrice(amount) {
  return `KSh ${amount.toLocaleString("en-KE")}`;
}

export function getCakesByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return allCakes;
  return allCakes.filter((cake) => cake.categories.includes(categorySlug));
}
