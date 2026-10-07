import { useState } from "react";
import "./CakeImage.css";

const SWATCHES = [
  "linear-gradient(135deg, #5a176b 0%, #8c4a9f 100%)",
  "linear-gradient(135deg, #8c4a9f 0%, #c48fd6 100%)",
  "linear-gradient(135deg, #431253 0%, #8c4a9f 100%)",
];

function swatchFor(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) % SWATCHES.length;
  }
  return SWATCHES[hash];
}

/**
 * Renders a real photo when `src` is supplied (drop files into src/assets/cakes
 * and pass them in) and falls back to an on-brand placeholder otherwise, so the
 * catalogue never shows a broken image or a generic stock photo.
 */
export default function CakeImage({ src, alt, name, ratio = "4 / 3", className = "" }) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  return (
    <div className={`cake-image ${className}`} style={{ aspectRatio: ratio }}>
      {showPlaceholder ? (
        <div className="cake-image__placeholder" style={{ background: swatchFor(name || alt || "cake") }}>
          <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="cake-image__icon">
            <path
              d="M14 46v-11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v11"
              stroke="#F1DDF4"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <rect x="12" y="46" width="40" height="8" rx="3.5" fill="#F1DDF4" />
            <path d="M22 30v-6m10 6v-9m10 9v-6" stroke="#F1DDF4" strokeWidth="2.2" strokeLinecap="round" />
            <circle cx="22" cy="21" r="2.2" fill="#F1DDF4" />
            <circle cx="32" cy="18" r="2.2" fill="#F1DDF4" />
            <circle cx="42" cy="21" r="2.2" fill="#F1DDF4" />
          </svg>
          {name && <span className="cake-image__label">{name}</span>}
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
