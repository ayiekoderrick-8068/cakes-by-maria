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

export const galleryCategories = [
  { slug: "birthdays", label: "Birthdays" },
  { slug: "kids", label: "Kids" },
  { slug: "graduation", label: "Graduation" },
  { slug: "bridal", label: "Bridal" },
  { slug: "baby-shower", label: "Baby Shower" },
  { slug: "corporate", label: "Corporate" },
  { slug: "bento", label: "Bento" },
  { slug: "treats", label: "Cake Pops & Treats" },
];

export function getCategoryLabel(slug) {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}
