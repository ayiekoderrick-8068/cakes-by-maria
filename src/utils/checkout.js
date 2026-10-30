import { buildWhatsAppUrl } from "./whatsapp";
import { formatPrice } from "../data/cakes";
import { categoryLabels } from "../data/categories";

export const PRICE_NOTICE = "Final price is confirmed by Maria on WhatsApp.";
export const DELIVERY_NOTICE = "Delivery cost is confirmed by Maria — it is not included in any price shown.";

export const STANDARD_SIZES = ["1 kg", "1.5 kg", "2 kg", "2.5 kg", "3 kg"];
export const MAX_QUANTITY = 20;

/** "0712 345 678", "+254712345678", "254 712345678" → "+254712345678"; null if it isn't a Kenyan mobile number. */
export function normalizeKenyanPhone(input = "") {
  const digits = input.replace(/[\s\-().]/g, "");
  const match = digits.match(/^(?:\+?254|0)([17]\d{8})$/);
  return match ? `+254${match[1]}` : null;
}

export function formatPhone(normalized) {
  return `${normalized.slice(0, 4)} ${normalized.slice(4, 7)} ${normalized.slice(7, 10)} ${normalized.slice(10)}`;
}

/** Today as yyyy-mm-dd in the visitor's own time zone (what <input type="date"> expects). */
export function todayISO() {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

/** "2026-10-20" → "20 October 2026" */
export function formatDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "14:00" → "2:00 PM" */
export function formatTime(value) {
  const [hours, minutes] = value.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  return `${hours % 12 || 12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

/** Sizes offered for a cake: its own listed size, plus the standard weights where weight applies. */
export function sizeOptionsFor(cake) {
  const weighted = /kg/i.test(cake.size) || cake.size === "Custom size";
  if (!weighted) return [cake.size];
  const own = cake.size === "Custom size" ? [] : [cake.size];
  return [...new Set([...own, ...STANDARD_SIZES])].sort((a, b) => parseFloat(a) - parseFloat(b));
}

export function isQuotedCake(cake) {
  return typeof cake.price !== "number" || cake.categories.includes("custom");
}

/** What the customer sees (and Maria receives) as the price. Never invents a figure. */
export function priceSummary(cake, order) {
  if (typeof cake.price !== "number") return "Price on request — to be confirmed by Maria";
  if (cake.categories.includes("custom")) return `${formatPrice(cake.price)} (custom design — to be confirmed by Maria)`;
  if (cake.size === "Custom size") return `${formatPrice(cake.price)} (starting price — to be confirmed by Maria)`;
  const listed =`${formatPrice(cake.price)} (listed for ${cake.size})`;
  return order.size && order.size !== cake.size ? `${listed} — price for ${order.size} to be confirmed` : listed;
}

export function checkoutOrderMessage(cake, order) {
  const sizeLabel = /kg/i.test(order.size) ? "Weight" : "Size";
  const lines = [
    "CAKES BY MARIA — NEW ORDER REQUEST",
    "",
    `Customer: ${order.name.trim()}`,
    `Phone: ${formatPhone(normalizeKenyanPhone(order.phone))}`,
    "",
    `Cake: ${cake.name}`,
    `Category: ${categoryLabels[cake.categories[0]] ?? cake.categories[0]}`,
    ...(order.flavour ? [`Flavour: ${order.flavour}`] : []),
    ...(order.size ? [`${sizeLabel}: ${order.size}`] : []),
    `Quantity: ${order.quantity}`,
    `Displayed Price: ${priceSummary(cake, order)}`,
    "",
    ...(order.inscription.trim() ? [`Cake Inscription: ${order.inscription.trim()}`] : []),
    `Preferred Date: ${formatDate(order.date)}`,
    ...(order.time ? [`Preferred Time: ${formatTime(order.time)}`] : []),
    "",
    `Order Type: ${order.fulfilment === "delivery" ? "Delivery" : "Pickup"}`,
    ...(order.fulfilment === "delivery" ? [`Location: ${order.location.trim()}`] : []),
    ...(order.instructions.trim() ? ["", "Special Instructions:", order.instructions.trim()] : []),
    "",
    "Please confirm availability, final pricing, delivery costs, and payment details.",
  ];
  return lines.join("\n");
}

export function buildCheckoutUrl(cake, order) {
  return buildWhatsAppUrl(checkoutOrderMessage(cake, order));
}

/** Returns { field: message } for the fields on `step` that are invalid (empty object = valid). */
export function validateStep(step, order) {
  const errors = {};
  if (step === 1) {
    if (order.name.trim().length < 2) errors.name = "Please enter your full name.";
    if (!normalizeKenyanPhone(order.phone)) errors.phone = "Enter a Kenyan mobile number, e.g. 0712 345 678.";
    if (!order.date) errors.date = "Please choose the date you need the cake.";
    else if (order.date < todayISO()) errors.date = "That date has already passed.";
    if (order.fulfilment === "delivery" && order.location.trim().length < 3) {
      errors.location = "Tell us your estate, area or landmark in Kisumu.";
    }
  }
  if (step === 2) {
    const quantity = Number(order.quantity);
    if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) {
      errors.quantity = `Quantity must be between 1 and ${MAX_QUANTITY}.`;
    }
  }
  return errors;
}
