import { Link } from "react-router-dom";
import "./Footer.css";
import { WHATSAPP_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, buildWhatsAppUrl } from "../../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <span className="site-footer__logo">
            Cakes by <em>Maria</em>
          </span>
          <p>Bite into a world of flavour & delight.</p>
        </div>

        <nav aria-label="Footer">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/our-cakes">Our Cakes</Link></li>
            <li><Link to="/flavours-pricing">Flavours & Pricing</Link></li>
            <li><Link to="/custom-order">Custom Orders</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <div className="site-footer__contact">
          <h4>Get in touch</h4>
          <ul>
            <li>
              <a href={buildWhatsAppUrl("Hello Cakes by Maria, I'd like to place an order.")} target="_blank" rel="noopener noreferrer">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram: {INSTAGRAM_HANDLE}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Cakes by Maria. All rights reserved.</p>
        <p>Freshly baked • Made to order</p>
      </div>
    </footer>
  );
}
