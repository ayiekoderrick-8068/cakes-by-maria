import { simpleFlavours, premiumFlavours, SIMPLE_FLAVOUR_RATE, PREMIUM_FLAVOUR_RATE, FRUIT_CAKE_RATE } from "./flavours";

export const pricingSections = [
  {
    id: "simple",
    title: "Simple Cakes",
    priceLabel: `KSh ${SIMPLE_FLAVOUR_RATE.toLocaleString()} per kg`,
    items: simpleFlavours,
  },
  {
    id: "premium",
    title: "Premium Cakes",
    priceLabel: `KSh ${PREMIUM_FLAVOUR_RATE.toLocaleString()} per kg`,
    items: premiumFlavours,
  },
  {
    id: "bento",
    title: "Bento Cakes",
    items: [
      { label: "Bento Cake", price: 1000 },
      { label: "Bento Cake + 2 cupcakes", price: 1200 },
      { label: "Bento Cake + 5 cupcakes", price: 1500 },
    ],
  },
  {
    id: "cupcakes",
    title: "Cupcakes",
    items: [
      { label: "Plain cupcake" },
      { label: "Decorated cupcake" },
      { label: "6 decorated cupcakes with custom topper" },
    ],
  },
  {
    id: "doughnuts",
    title: "Doughnuts",
    items: [
      { label: "Plain doughnut" },
      { label: "Assorted frosted doughnut" },
    ],
  },
  {
    id: "others",
    title: "Others",
    items: [
      { label: "Fruit cake", price: FRUIT_CAKE_RATE, suffix: "per kg" },
      { label: "Cake popsicles", price: 150, suffix: "each, minimum 10" },
      { label: "Cake pops", price: 100, suffix: "each, minimum 10" },
      { label: "Cake rolls", price: 200, suffix: "each, minimum 5" },
    ],
  },
];

export const policies = [
  "50% deposit required on booking.",
  "Transport is charged separately.",
  "Fillings cost extra.",
  "Themed cakes may have additional charges.",
  "Custom cake toppers are priced separately.",
];
