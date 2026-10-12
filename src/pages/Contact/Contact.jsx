import { useState } from "react";
import SEO from "../../components/SEO/SEO";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL, enquiryMessage } from "../../utils/whatsapp";
import { LocationIcon } from "../../components/LocationBadge/LocationBadge";
import { BUSINESS_LOCATION } from "../../data/business";
import "./Contact.css";

const INITIAL_FORM = { name: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Cakes by Maria on WhatsApp or Instagram, or send a quick enquiry."
      />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>We'd love to hear from you</h1>
          <p>The fastest way to reach us is WhatsApp — or send a quick enquiry below.</p>
        </div>
      </div>

      <section className="section contact">
        <div className="container contact__grid">
          <div className="contact__details">
            <h3>Reach us directly</h3>
            <ul className="contact__list">
              <li>
                <span className="contact__label">Based in</span>
                <span className="contact__place">
                  <LocationIcon size={18} />
                  {BUSINESS_LOCATION}
                </span>
                <span className="contact__note">
                  Every cake is made to order. We agree delivery or pickup details with you on WhatsApp.
                </span>
              </li>
              <li>
                <span className="contact__label">WhatsApp</span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <span className="contact__label">Instagram</span>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
            <WhatsAppButton />
          </div>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <h3>Send a quick enquiry</h3>
            <div className="contact__row">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" type="text" value={form.name} onChange={handleChange("name")} required />
            </div>
            <div className="contact__row">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Tell us a little about what you need…"
                value={form.message}
                onChange={handleChange("message")}
                required
              />
            </div>
            <WhatsAppButton
              className="btn-block"
              label="Send via WhatsApp"
              message={enquiryMessage(form)}
            />
          </form>
        </div>
      </section>
    </>
  );
}
