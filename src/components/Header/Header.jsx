import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Header.css";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/our-cakes", label: "Our Cakes" },
  { to: "/custom-order", label: "Custom Orders" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="site-header__logo" aria-label="Cakes by Maria home">
          <span className="site-header__logo-mark">CM</span>
          <span className="site-header__logo-text">
            Cakes by <em>Maria</em>
          </span>
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === "/"} className="site-header__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__cta">
          <WhatsAppButton variant="sm" label="Order on WhatsApp" />
        </div>

        <button
          className={`site-header__burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`site-header__mobile ${menuOpen ? "is-open" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className="site-header__mobile-link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <WhatsAppButton className="btn-block" label="Order on WhatsApp" />
      </div>
    </header>
  );
}
