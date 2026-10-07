export const SIMPLE_FLAVOUR_RATE = 2000;
export const PREMIUM_FLAVOUR_RATE = 2500;
export const FRUIT_CAKE_RATE = 2800;

export const simpleFlavours = [
  "Vanilla",
  "Strawberry",
  "Sponge Cake",
  "Coconut",
  "Lemon",
  "Piña Colada",
  "Chocolate",
  "Mint",
  "Passion",
  "Marble",
  "Bubblegum",
];

export const premiumFlavours = [
  "Red Velvet",
  "White Forest",
  "Black Forest",
  "Salted Caramel",
  "Coffee",
  "Carrot Cake",
  "Chocolate Fudge",
  "Blueberry",
];

export const allFlavours = [...simpleFlavours, ...premiumFlavours, "Fruit Cake"];

export function flavourRate(flavourName) {
  if (flavourName === "Fruit Cake") return FRUIT_CAKE_RATE;
  if (premiumFlavours.includes(flavourName)) return PREMIUM_FLAVOUR_RATE;
  return SIMPLE_FLAVOUR_RATE;
}
