import "./LocationBadge.css";
import { BUSINESS_LOCATION } from "../../data/business";

export function LocationIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

/** Small "pin + place name" line, e.g. "Baking in Kisumu, Kenya". */
export default function LocationBadge({ prefix = "", className = "" }) {
  return (
    <p className={`location-badge ${className}`}>
      <LocationIcon />
      <span>
        {prefix}
        {BUSINESS_LOCATION}
      </span>
    </p>
  );
}
