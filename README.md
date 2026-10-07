# Cakes by Maria

A frontend-only React + Vite website for Cakes by Maria, a Kenyan cake business. Customers browse
cakes, check prices, fill in a custom order form, and finish ordering on WhatsApp — there's no
login, cart or payment backend.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # eslint
```

## Project structure

```
src/
  components/   Reusable UI pieces (Header, CakeCard, CustomOrderForm, etc.)
  pages/        One folder per route (Home, OurCakes, CustomOrder, Gallery, ...)
  data/         Cakes, categories, flavours and pricing — edit these, not the components
  utils/        whatsapp.js builds the pre-filled wa.me links used across the site
```

## Adding real photography

No real Cakes by Maria photos were supplied when this site was built, so every cake/gallery image
currently renders as an on-brand placeholder (purple gradient + cake name) via the `CakeImage`
component. To use real photos:

1. Drop image files into `src/assets/`.
2. Import them where needed and pass as the `src` prop to `CakeImage` (e.g. in `CakeCard`,
   `OccasionCard`, `Hero`, `GalleryGrid`, or the `About` page).

If a `src` is missing or fails to load, `CakeImage` automatically falls back to the placeholder, so
the site never shows a broken image.

## Editing cakes, flavours and pricing

All catalogue content lives in `src/data/`:

- `cakes.js` — the signature cakes plus auto-generated catalogue items per occasion
- `flavours.js` — simple vs. premium flavour lists and their per-kg rates
- `pricing.js` — bento, cupcake, doughnut and other fixed-price items, plus the policy list
- `categories.js` — occasion categories used for filtering and navigation

## WhatsApp ordering

`src/utils/whatsapp.js` builds every `wa.me` link used on the site (catalogue "Order" buttons, the
custom order form's summary, and the contact enquiry form). Update `WHATSAPP_NUMBER` there if the
business number ever changes.
