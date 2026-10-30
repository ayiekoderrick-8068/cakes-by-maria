import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import CakeImage from "../../components/CakeImage/CakeImage";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import { allCakes, formatPrice } from "../../data/cakes";
import { allFlavours } from "../../data/flavours";
import { categoryLabels } from "../../data/categories";
import {
  DELIVERY_NOTICE,
  MAX_QUANTITY,
  PRICE_NOTICE,
  checkoutOrderMessage,
  formatDate,
  formatPhone,
  formatTime,
  isQuotedCake,
  normalizeKenyanPhone,
  priceSummary,
  sizeOptionsFor,
  todayISO,
  validateStep,
} from "../../utils/checkout";
import "./Checkout.css";

const STEPS = ["Your details", "Cake details", "Review & send"];
const NOT_SURE = "Not sure — please advise me";

function initialOrder(cake) {
  return {
    name: "",
    phone: "",
    date: "",
    time: "",
    fulfilment: "delivery",
    location: "",
    flavour: cake.flavour !== cake.name ? cake.flavour : "",
    size: cake.size === "Custom size" ? "" : cake.size,
    quantity: 1,
    inscription: "",
    instructions: "",
  };
}

function Field({ id, label, required, hint, error, children }) {
  return (
    <div className="checkout__field">
      <label htmlFor={id}>
        {label}
        {required ? <span className="checkout__required"> *</span> : <span className="checkout__optional"> (optional)</span>}
      </label>
      {children}
      {hint && !error && <p className="checkout__hint">{hint}</p>}
      {error && (
        <p className="checkout__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const cake = allCakes.find((c) => c.id === searchParams.get("cake"));

  if (!cake) {
    return (
      <>
        <SEO title="Checkout" description="Complete your Cakes by Maria order details." />
        <section className="section">
          <div className="container checkout__empty">
            <h1>Choose a cake first</h1>
            <p>Pick a cake from our catalogue and we'll bring its details here.</p>
            <Link to="/our-cakes" className="btn btn-primary">
              Browse Cakes
            </Link>
          </div>
        </section>
      </>
    );
  }

  return <CheckoutFlow key={cake.id} cake={cake} />;
}

function CheckoutFlow({ cake }) {
  const [step, setStep] = useState(1);
  const [order, setOrder] = useState(() => initialOrder(cake));
  const [errors, setErrors] = useState({});
  const [whatsappOpened, setWhatsappOpened] = useState(false);

  const categoryLabel = categoryLabels[cake.categories[0]] ?? cake.categories[0];
  const quoted = isQuotedCake(cake);
  const sizeOptions = sizeOptionsFor(cake);
  const flavourOptions = [
    ...(cake.flavour !== cake.name && !allFlavours.includes(cake.flavour) ? [cake.flavour] : []),
    ...allFlavours,
    NOT_SURE,
  ];

  const set = (field) => (event) => {
    setOrder((prev) => ({ ...prev, [field]: event.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const goTo = (target) => {
    setWhatsappOpened(false);
    setStep(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    const found = validateStep(step, order);
    setErrors(found);
    if (Object.keys(found).length === 0) goTo(step + 1);
  };

  const inputProps = (field) => ({
    id: `co-${field}`,
    value: order[field],
    onChange: set(field),
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `co-${field}-error` : undefined,
  });

  const quantity = Number(order.quantity) || 1;
  const showEstimate = typeof cake.price === "number" && !quoted && quantity > 1 && (!order.size || order.size === cake.size);

  return (
    <>
      <SEO title="Checkout" description="Complete your Cakes by Maria order details before sending them on WhatsApp." />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Checkout</span>
          <h1>Your order details</h1>
          <p>Fill in a few details and review them before sending to Maria on WhatsApp. Nothing is sent until you do.</p>
        </div>
      </div>

      <section className="section checkout">
        <div className="container checkout__layout">
          <aside className="checkout__summary" aria-label="Selected cake">
            <CakeImage src={cake.image} name={cake.name} alt={cake.alt ?? `${cake.name} cake`} ratio="4 / 3" className="checkout__image" />
            <div className="checkout__summary-body">
              <span className="checkout__category">{categoryLabel}</span>
              <h2>{cake.name}</h2>
              <p className="checkout__summary-meta">
                {cake.flavour !== cake.name && <span>{cake.flavour} • </span>}
                {cake.size}
              </p>
              <p className="checkout__price">{formatPrice(cake.price)}</p>
              {showEstimate && (
                <p className="checkout__estimate">
                  {quantity} × {formatPrice(cake.price)} = {formatPrice(cake.price * quantity)} (estimate)
                </p>
              )}
              <p className="checkout__notice">
                {quoted ? "This price is confirmed by Maria once she has your design details. " : ""}
                {PRICE_NOTICE}
              </p>
              <Link to="/our-cakes" className="checkout__change">
                ← Choose a different cake
              </Link>
            </div>
          </aside>

          <div className="checkout__main">
            <ol className="checkout__steps" aria-label="Checkout progress">
              {STEPS.map((label, index) => (
                <li
                  key={label}
                  className={`checkout__step ${step === index + 1 ? "is-current" : ""} ${step > index + 1 ? "is-done" : ""}`}
                  aria-current={step === index + 1 ? "step" : undefined}
                >
                  <span className="checkout__step-number">{index + 1}</span>
                  <span className="checkout__step-label">{label}</span>
                </li>
              ))}
            </ol>

            {step === 1 && (
              <form
                className="checkout__panel"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  next();
                }}
              >
                <h3>Your details</h3>
                <div className="checkout__grid">
                  <Field id="co-name" label="Full name" required error={errors.name}>
                    <input type="text" autoComplete="name" placeholder="e.g. Jane Achieng" {...inputProps("name")} />
                  </Field>
                  <Field id="co-phone" label="Phone number" required error={errors.phone}>
                    <input type="tel" autoComplete="tel" inputMode="tel" placeholder="0712 345 678" {...inputProps("phone")} />
                  </Field>
                  <Field id="co-date" label="Date you need the cake" required error={errors.date}>
                    <input type="date" min={todayISO()} {...inputProps("date")} />
                  </Field>
                  <Field id="co-time" label="Preferred time">
                    <input type="time" {...inputProps("time")} />
                  </Field>
                </div>

                <fieldset className="checkout__fieldset">
                  <legend>How would you like to receive it?</legend>
                  <div className="checkout__choices">
                    {[
                      ["delivery", "Delivery"],
                      ["pickup", "Pickup"],
                    ].map(([value, label]) => (
                      <label key={value} className={`checkout__choice ${order.fulfilment === value ? "is-selected" : ""}`}>
                        <input
                          type="radio"
                          name="fulfilment"
                          value={value}
                          checked={order.fulfilment === value}
                          onChange={set("fulfilment")}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                {order.fulfilment === "delivery" ? (
                  <Field
                    id="co-location"
                    label="Delivery location"
                    required
                    hint="Your estate, area or landmark in Kisumu."
                    error={errors.location}
                  >
                    <input type="text" autoComplete="street-address" placeholder="e.g. Milimani, near the golf club" {...inputProps("location")} />
                  </Field>
                ) : (
                  <p className="checkout__note">We'll arrange pickup details with you on WhatsApp once Maria confirms your order.</p>
                )}
                {order.fulfilment === "delivery" && <p className="checkout__note">{DELIVERY_NOTICE}</p>}

                <div className="checkout__actions">
                  <button type="submit" className="btn btn-primary">
                    Continue
                  </button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form
                className="checkout__panel"
                noValidate
                onSubmit={(event) => {
                  event.preventDefault();
                  next();
                }}
              >
                <h3>Cake details</h3>
                <div className="checkout__grid">
                  <Field id="co-flavour" label="Flavour">
                    <select {...inputProps("flavour")}>
                      <option value="">Choose a flavour</option>
                      {flavourOptions.map((flavour) => (
                        <option key={flavour} value={flavour}>
                          {flavour}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field id="co-size" label="Size / weight">
                    <select {...inputProps("size")}>
                      {cake.size === "Custom size" && <option value="">Choose a size</option>}
                      {sizeOptions.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                      {cake.size === "Custom size" && <option value={NOT_SURE}>{NOT_SURE}</option>}
                    </select>
                  </Field>
                  <Field id="co-quantity" label="Quantity" required error={errors.quantity}>
                    <input type="number" min="1" max={MAX_QUANTITY} step="1" inputMode="numeric" {...inputProps("quantity")} />
                  </Field>
                </div>
                {cake.size !== "Custom size" && sizeOptions.length > 1 && order.size !== cake.size && (
                  <p className="checkout__note">
                    The price shown is for {cake.size}. Maria will confirm the price for {order.size || "your chosen size"}.
                  </p>
                )}
                <Field id="co-inscription" label="Cake inscription" hint="The writing you'd like on the cake, e.g. “Congratulations Mary!”">
                  <input type="text" maxLength={80} {...inputProps("inscription")} />
                </Field>
                <Field id="co-instructions" label="Special design instructions">
                  <textarea rows={4} placeholder="Colours, theme, decorations, allergies…" {...inputProps("instructions")} />
                </Field>

                <div className="checkout__actions">
                  <button type="button" className="btn btn-secondary" onClick={() => goTo(1)}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Review order
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="checkout__panel">
                <h3>Review your order</h3>
                <p>Please check everything below. You can still change anything before sending.</p>

                <ReviewGroup title="Your details" onEdit={() => goTo(1)}>
                  <ReviewRow label="Name" value={order.name.trim()} />
                  <ReviewRow label="Phone" value={formatPhone(normalizeKenyanPhone(order.phone))} />
                  <ReviewRow label="Date needed" value={formatDate(order.date)} />
                  {order.time && <ReviewRow label="Preferred time" value={formatTime(order.time)} />}
                  <ReviewRow label="Order type" value={order.fulfilment === "delivery" ? "Delivery" : "Pickup"} />
                  {order.fulfilment === "delivery" && <ReviewRow label="Location" value={order.location.trim()} />}
                </ReviewGroup>

                <ReviewGroup title="Cake" onEdit={() => goTo(2)}>
                  <ReviewRow label="Cake" value={cake.name} />
                  <ReviewRow label="Category" value={categoryLabel} />
                  {order.flavour && <ReviewRow label="Flavour" value={order.flavour} />}
                  {order.size && <ReviewRow label={/kg/i.test(order.size) ? "Weight" : "Size"} value={order.size} />}
                  <ReviewRow label="Quantity" value={String(order.quantity)} />
                  <ReviewRow label="Displayed price" value={priceSummary(cake, order)} />
                  {order.inscription.trim() && <ReviewRow label="Inscription" value={order.inscription.trim()} />}
                  {order.instructions.trim() && <ReviewRow label="Instructions" value={order.instructions.trim()} />}
                </ReviewGroup>

                <p className="checkout__note">
                  {PRICE_NOTICE} {order.fulfilment === "delivery" ? DELIVERY_NOTICE : ""} Payment details are shared on WhatsApp — nothing
                  is paid on this website.
                </p>

                <div className="checkout__actions checkout__actions--stack">
                  <WhatsAppButton
                    className="btn-block"
                    label="Send Order via WhatsApp"
                    message={checkoutOrderMessage(cake, order)}
                    onClick={() => setWhatsappOpened(true)}
                  />
                  <button type="button" className="btn btn-secondary btn-block" onClick={() => goTo(2)}>
                    Back
                  </button>
                </div>

                {whatsappOpened && (
                  <p className="checkout__sent" role="status">
                    WhatsApp should have opened with your order ready to go. <strong>Your order has not been sent yet</strong> — press Send in
                    WhatsApp. Maria will reply there to confirm availability and pricing; an order is only accepted once she confirms it.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewGroup({ title, onEdit, children }) {
  return (
    <div className="checkout__review-group">
      <div className="checkout__review-head">
        <h4>{title}</h4>
        <button type="button" className="checkout__edit" onClick={onEdit}>
          Edit
        </button>
      </div>
      <dl>{children}</dl>
    </div>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="checkout__review-row">
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
