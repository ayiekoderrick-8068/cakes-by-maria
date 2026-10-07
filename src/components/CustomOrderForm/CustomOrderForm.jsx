import "./CustomOrderForm.css";
import { allFlavours } from "../../data/flavours";
import { categories } from "../../data/categories";

const OCCASION_OPTIONS = [...categories.filter((c) => c.slug !== "custom").map((c) => c.label), "Other"];
const SIZE_OPTIONS = ["Bento", "1 kg", "1.5 kg", "2 kg", "2.5 kg", "3 kg", "Not sure yet"];

export default function CustomOrderForm({ form, onChange }) {
  const handleChange = (field) => (event) => {
    const { value, type, checked, files } = event.target;
    if (type === "checkbox") {
      onChange(field, checked);
    } else if (type === "file") {
      onChange(field, files?.[0] ?? null);
      onChange("hasInspirationImage", Boolean(files?.[0]));
    } else {
      onChange(field, value);
    }
  };

  return (
    <form className="custom-order-form" onSubmit={(e) => e.preventDefault()}>
      <div className="custom-order-form__row">
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={form.occasion} onChange={handleChange("occasion")}>
          <option value="">Select an occasion</option>
          {OCCASION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="custom-order-form__row">
        <label htmlFor="flavour">Cake flavour</label>
        <select id="flavour" value={form.flavour} onChange={handleChange("flavour")}>
          <option value="">Select a flavour</option>
          {allFlavours.map((flavour) => (
            <option key={flavour} value={flavour}>
              {flavour}
            </option>
          ))}
        </select>
      </div>

      <div className="custom-order-form__row">
        <label htmlFor="size">Cake size / weight</label>
        <select id="size" value={form.size} onChange={handleChange("size")}>
          <option value="">Select a size</option>
          {SIZE_OPTIONS.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div className="custom-order-form__row">
        <label htmlFor="theme">Theme / colours</label>
        <input
          id="theme"
          type="text"
          placeholder="e.g. Pink & gold, florals"
          value={form.theme}
          onChange={handleChange("theme")}
        />
      </div>

      <div className="custom-order-form__row">
        <label htmlFor="date">Date needed</label>
        <input id="date" type="date" value={form.date} onChange={handleChange("date")} />
      </div>

      <div className="custom-order-form__row">
        <label htmlFor="message">Message on cake</label>
        <input
          id="message"
          type="text"
          placeholder="e.g. Happy Birthday Sharon"
          value={form.message}
          onChange={handleChange("message")}
        />
      </div>

      <div className="custom-order-form__row custom-order-form__row--full">
        <label htmlFor="designNotes">Design notes</label>
        <textarea
          id="designNotes"
          rows={4}
          placeholder="Tell us about the design, shape, toppers or anything else in mind"
          value={form.designNotes}
          onChange={handleChange("designNotes")}
        />
      </div>

      <div className="custom-order-form__row custom-order-form__row--full">
        <label htmlFor="inspiration">Upload inspiration image (optional)</label>
        <input id="inspiration" type="file" accept="image/*" onChange={handleChange("inspirationImage")} />
        {form.hasInspirationImage && (
          <p className="custom-order-form__hint">
            Great — please attach this photo again when we reply to you on WhatsApp.
          </p>
        )}
      </div>

      <fieldset className="custom-order-form__row custom-order-form__row--full custom-order-form__fieldset">
        <legend>Delivery or collection</legend>
        <div className="custom-order-form__radio-group">
          <label>
            <input
              type="radio"
              name="delivery"
              value="Delivery"
              checked={form.delivery === "Delivery"}
              onChange={handleChange("delivery")}
            />
            Delivery
          </label>
          <label>
            <input
              type="radio"
              name="delivery"
              value="Collection"
              checked={form.delivery === "Collection"}
              onChange={handleChange("delivery")}
            />
            Collection
          </label>
        </div>
      </fieldset>
    </form>
  );
}
