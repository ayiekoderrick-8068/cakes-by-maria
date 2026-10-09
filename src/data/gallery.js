import peonyLineArt from "../assets/gallery/peony-line-art.jpg";
import wineBlack from "../assets/gallery/wine-black.jpg";
import coconutBerryDrip from "../assets/gallery/coconut-berry-drip.jpg";
import oreoDrip from "../assets/gallery/oreo-drip.jpg";
import brushstrokeFloral from "../assets/gallery/brushstroke-floral.jpg";
import blackGoldSilhouette from "../assets/gallery/black-gold-silhouette.jpg";
import greenCrown from "../assets/gallery/green-crown.jpg";
import butterflyPink from "../assets/gallery/butterfly-pink.jpg";
import yellowFlowers from "../assets/gallery/yellow-flowers.jpg";
import rosetteOmbre from "../assets/gallery/rosette-ombre-first-birthday.jpg";
import safari from "../assets/gallery/safari.jpg";
import pawPatrol from "../assets/gallery/paw-patrol.jpg";
import minnieMouse from "../assets/gallery/minnie-mouse.jpg";
import graduation from "../assets/gallery/graduation.jpg";
import teddyBear from "../assets/gallery/teddy-bear.jpg";
import cakePops from "../assets/gallery/cake-pops.jpg";
import cakesicles from "../assets/gallery/cakesicles.jpg";

/** Real photos supplied by the business, grouped by gallery category slug. */
export const galleryItems = [
  { category: "birthdays", title: "Peony & line-art birthday cake", image: peonyLineArt },
  { category: "birthdays", title: "Black wine-bottle cake with roses", image: wineBlack },
  { category: "birthdays", title: "Coconut & berry drip cake", image: coconutBerryDrip },
  { category: "birthdays", title: "Oreo chocolate drip cake", image: oreoDrip },
  { category: "birthdays", title: "Brushstroke birthday cake with florals", image: brushstrokeFloral },
  { category: "birthdays", title: "Black & gold birthday cake", image: blackGoldSilhouette },
  { category: "birthdays", title: "Emerald green crown cake", image: greenCrown },
  { category: "birthdays", title: "Pink ombre butterfly cake", image: butterflyPink },
  { category: "birthdays", title: "Yellow chrysanthemum cake", image: yellowFlowers },
  { category: "kids", title: "Ombre rosette first birthday cake", image: rosetteOmbre },
  { category: "kids", title: "Safari baby cake", image: safari },
  { category: "kids", title: "Paw Patrol cake", image: pawPatrol },
  { category: "kids", title: "Minnie Mouse cake", image: minnieMouse },
  { category: "graduation", title: "Graduation cake", image: graduation },
  { category: "baby-shower", title: "Teddy bear cake", image: teddyBear },
  { category: "treats", title: "Cake pops", image: cakePops },
  { category: "treats", title: "Cake popsicles", image: cakesicles },
].map((item, index) => ({ ...item, id: `${item.category}-${index + 1}`, ratio: "3 / 4" }));
