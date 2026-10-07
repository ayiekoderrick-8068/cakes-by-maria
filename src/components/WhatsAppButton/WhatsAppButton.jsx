import "./WhatsAppButton.css";
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from "../../utils/whatsapp";

const DEFAULT_MESSAGE = "Hello Cakes by Maria, I'd like to place an order.";

/**
 * Reusable WhatsApp CTA. Pass `message` for a pre-filled chat, or omit for
 * the generic ordering message. `floating` renders the mobile sticky button.
 */
export default function WhatsAppButton({
  message = DEFAULT_MESSAGE,
  label = "Order on WhatsApp",
  variant = "primary",
  className = "",
  floating = false,
}) {
  const href = buildWhatsAppUrl(message);

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label={`Chat with Cakes by Maria on WhatsApp, ${WHATSAPP_NUMBER}`}
      >
        <WhatsAppIcon />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp ${variant === "sm" ? "btn-sm" : ""} ${className}`}
    >
      <WhatsAppIcon small />
      {label}
    </a>
  );
}

function WhatsAppIcon({ small = false }) {
  const size = small ? 18 : 20;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      <path d="M12.04 2.1c-5.47 0-9.9 4.43-9.9 9.9 0 1.75.46 3.44 1.33 4.94L2 22l5.2-1.36a9.87 9.87 0 0 0 4.84 1.24h.01c5.47 0 9.9-4.43 9.9-9.9 0-2.64-1.03-5.13-2.9-6.99a9.82 9.82 0 0 0-6.99-2.9zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.09.81.82-3-.2-.31a8.23 8.23 0 1 1 6.97 3.84z" />
    </svg>
  );
}
