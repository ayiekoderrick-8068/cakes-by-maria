import birthdayImg from "../assets/gallery/black-gold-silhouette.jpg";
import babyShowerImg from "../assets/gallery/teddy-bear.jpg";
import bridalImg from "../assets/gallery/peony-line-art.jpg";
import graduationImg from "../assets/gallery/graduation.jpg";
import corporateImg from "../assets/gallery/wine-black.jpg";
import bentoImg from "../assets/cakes/bento-chocolate-hd.jpg";
import cupcakesImg from "../assets/gallery/brushstroke-floral.jpg";
import treatsImg from "../assets/gallery/cake-pops.jpg";
import customImg from "../assets/gallery/green-crown.jpg";

export const categories = [
  // `focus` is the object-position used when the photo is cropped to a card
  { slug: "birthday", label: "Birthday Cakes", image: birthdayImg, focus: "50% 40%" },
  { slug: "baby-shower", label: "Baby Shower Cakes", image: babyShowerImg, focus: "50% 70%" },
  { slug: "bridal", label: "Bridal Shower Cakes", image: bridalImg, focus: "50% 35%" },
  { slug: "graduation", label: "Graduation Cakes", image: graduationImg, focus: "50% 45%" },
  { slug: "corporate", label: "Corporate Cakes", image: corporateImg, focus: "50% 45%" },
  { slug: "bento", label: "Bento Cakes", image: bentoImg, focus: "50% 50%" },
  { slug: "cupcakes", label: "Cupcakes", image: cupcakesImg, focus: "50% 75%" },
  { slug: "treats", label: "Cake Pops & Popsicles", image: treatsImg, focus: "50% 55%" },
  { slug: "custom", label: "Custom Cakes", image: customImg, focus: "50% 70%" },
];

/**
 * Every tag a cake can carry (cake.categories), with its short display label.
 * Add a new tag here before using it on a cake.
 */
export const categoryLabels = {
  birthday: "Birthday",
  wedding: "Wedding",
  "baby-shower": "Baby Shower",
  graduation: "Graduation",
  anniversary: "Anniversary",
  kids: "Kids",
  custom: "Custom",
  cupcakes: "Cupcakes",
  treats: "Cake Pops & Treats",
  bridal: "Bridal Shower",
  corporate: "Corporate",
  bento: "Bento",
};

/**
 * Filter chips shown above the catalogue and gallery, in display order. A chip
 * shows every cake carrying any of its `tags`. Chips with no cakes yet (for
 * example Wedding and Anniversary) stay hidden until a cake is tagged for them.
 */
export const cakeFilters = [
  { slug: "birthday", label: "Birthday", tags: ["birthday"] },
  { slug: "wedding", label: "Wedding", tags: ["wedding"] },
  { slug: "baby-shower", label: "Baby Shower", tags: ["baby-shower"] },
  { slug: "graduation", label: "Graduation", tags: ["graduation"] },
  { slug: "anniversary", label: "Anniversary", tags: ["anniversary"] },
  { slug: "kids", label: "Kids", tags: ["kids"] },
  { slug: "custom", label: "Custom", tags: ["custom"] },
  { slug: "cupcakes", label: "Cupcakes & Treats", tags: ["cupcakes", "treats"] },
];

export function getCategoryLabel(slug) {
  return categories.find((c) => c.slug === slug)?.label ?? categoryLabels[slug] ?? slug;
}
