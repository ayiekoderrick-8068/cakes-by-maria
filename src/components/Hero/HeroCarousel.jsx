import { useEffect, useRef, useState } from "react";

const FADE_MS = 800; // keep in sync with the opacity transition in Hero.css
const VISIBLE_MS = 10000; // how long a photo stays fully visible once its fade-in has finished
const INTERVAL_MS = VISIBLE_MS + FADE_MS;
const SWIPE_THRESHOLD_PX = 40;

/**
 * Crossfading photo slideshow that fills the hero's arched frame (it reuses the
 * `.cake-image` box, so size, shape and shadow are unchanged). Autoplays, holding each
 * photo for 10s after an 800ms fade (see Hero.css), preloads the next photo, pauses on hover/focus, supports swipe and dot navigation, skips photos
 * that fail to load, and does not autoplay when reduced motion is requested.
 *
 * `slides`: [{ id, src, alt, label, focus? }] — the first slide is the initial one.
 */
export default function HeroCarousel({ slides }) {
  const [failedIds, setFailedIds] = useState([]);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false); // set by the pause/play button
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  const visible = slides.filter((slide) => !failedIds.includes(slide.id));
  const current = Math.min(active, Math.max(visible.length - 1, 0));
  const canAutoplay = visible.length > 1 && !paused && !userPaused && !reducedMotion;

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event) => setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Load (and decode) the next photo ahead of time so the fade never starts on an unloaded image.
  const nextSrc = visible.length > 1 ? visible[(current + 1) % visible.length].src : null;
  useEffect(() => {
    if (!nextSrc) return;
    const preload = new Image();
    preload.src = nextSrc;
    preload.decode?.().catch(() => {});
  }, [nextSrc]);

  // One timer per slide; it is restarted whenever the slide changes (including manually) and cleared on unmount.
  useEffect(() => {
    if (!canAutoplay) return undefined;
    const timer = setTimeout(() => setActive((current + 1) % visible.length), INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [canAutoplay, current, visible.length]);

  const go = (index) => setActive((index + visible.length) % visible.length);

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) >= SWIPE_THRESHOLD_PX) go(current + (delta < 0 ? 1 : -1));
  };

  return (
    <div
      className="hero__carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Cakes by Maria cake photos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={(event) => {
        // The pause/play button has its own state; focusing it must not keep the slideshow paused
        if (!event.target.closest(".hero__toggle")) setPaused(true);
      }}
      onBlur={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <div className="cake-image hero__slides" style={{ aspectRatio: "4 / 5" }}>
        {visible.map((slide, index) => (
          <img
            key={slide.id}
            className={`hero__slide ${index === current ? "is-active" : ""}`}
            src={slide.src}
            alt={slide.alt}
            style={slide.focus ? { objectPosition: slide.focus } : undefined}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : undefined}
            aria-hidden={index === current ? undefined : "true"}
            draggable={false}
            onError={() => setFailedIds((ids) => [...ids, slide.id])}
          />
        ))}
      </div>

      {visible.length > 1 && (
        <div className="hero__dots" role="group" aria-label="Choose a photo">
          {!reducedMotion && (
            <button
              type="button"
              className="hero__toggle"
              aria-label={userPaused ? "Play photo slideshow" : "Pause photo slideshow"}
              onClick={() => setUserPaused((value) => !value)}
            >
              <svg viewBox="0 0 10 10" width="10" height="10" fill="currentColor" aria-hidden="true">
                {userPaused ? <path d="M2 1l7 4-7 4z" /> : <path d="M2 1h2v8H2zM6 1h2v8H6z" />}
              </svg>
            </button>
          )}
          {visible.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero__dot ${index === current ? "is-active" : ""}`}
              aria-label={`Show photo ${index + 1} of ${visible.length}: ${slide.label}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => go(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
