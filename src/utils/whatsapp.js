export const WHATSAPP_NUMBER = "254181854209";
export const WHATSAPP_DISPLAY = "+254 181 854 209";
export const INSTAGRAM_HANDLE = "@_cakes_bymaria";
export const INSTAGRAM_URL = "https://instagram.com/_cakes_bymaria";

/** Builds a wa.me URL with a URL-encoded, pre-filled message. */
export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Message for enquiring about a specific catalogue cake. */
export function cakeOrderMessage(cake) {
  if (typeof cake.price !== "number") {
    return `Hi Cakes by Maria, I'm interested in the ${cake.name} (as shown on your website). Could you share the price and availability?`;
  }
  return `Hi Cakes by Maria, I'm interested in the ${cake.name} cake, ${cake.size}, ${cake.priceLabel ?? `KSh ${cake.price.toLocaleString("en-KE")}`}. Is it available?`;
}

export function buildCakeOrderUrl(cake) {
  return buildWhatsAppUrl(cakeOrderMessage(cake));
}

/** Builds the full pre-filled message for a custom cake request form. */
export function customOrderMessage(form) {
  const lines = ["Hello Cakes by Maria, I would like to order a custom cake.", ""];

  if (form.occasion) lines.push(`Occasion: ${form.occasion}`);
  if (form.flavour) lines.push(`Flavour: ${form.flavour}`);
  if (form.size) lines.push(`Size: ${form.size}`);
  if (form.theme) lines.push(`Theme: ${form.theme}`);
  if (form.date) lines.push(`Date: ${form.date}`);
  if (form.message) lines.push(`Message on cake: ${form.message}`);
  if (form.designNotes) lines.push(`Design notes: ${form.designNotes}`);
  if (form.delivery) lines.push(`Delivery: ${form.delivery}`);
  if (form.hasInspirationImage) {
    lines.push("Note: I have an inspiration image to share with you here on WhatsApp.");
  }

  lines.push("", "Please let me know the final price and availability.");

  return lines.join("\n");
}

export function buildCustomOrderUrl(form) {
  return buildWhatsAppUrl(customOrderMessage(form));
}

/** Simple general enquiry message, e.g. from the contact page form. */
export function enquiryMessage({ name, message }) {
  const lines = [`Hello Cakes by Maria, my name is ${name || "a customer"}.`, "", message || ""];
  return lines.join("\n");
}

export function buildEnquiryUrl(form) {
  return buildWhatsAppUrl(enquiryMessage(form));
}
