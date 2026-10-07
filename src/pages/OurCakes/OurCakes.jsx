import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import CakeCard from "../../components/CakeCard/CakeCard";
import CakeImage from "../../components/CakeImage/CakeImage";
import WhatsAppButton from "../../components/WhatsAppButton/WhatsAppButton";
import { categories, getCategoryLabel } from "../../data/categories";
import { allCakes, formatPrice } from "../../data/cakes";
import { cakeOrderMessage } from "../../utils/whatsapp";
import "./OurCakes.css";

const CATALOGUE_CATEGORIES = categories.filter((c) => c.slug !== "custom");

export default function OurCakes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const paramCategory = searchParams.get("category");
    if (paramCategory) setActiveCategory(paramCategory);
  }, [searchParams]);

  const handleCategoryChange = (slug) => {
    setActiveCategory(slug);
    setSearchParams(slug === "all" ? {} : { category: slug });
  };

  const filteredCakes = useMemo(() => {
    let results = activeCategory === "all" ? allCakes : allCakes.filter((c) => c.categories.includes(activeCategory));
    if (search.trim()) {
      const query = search.trim().toLowerCase();
      results = results.filter(
        (c) => c.name.toLowerCase().includes(query) || c.flavour.toLowerCase().includes(query)
      );
    }
    return results;
  }, [activeCategory, search]);

  const selectedCakeId = searchParams.get("cake");
  const selectedCake = selectedCakeId ? allCakes.find((c) => c.id === selectedCakeId) : null;

  const closeDetails = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("cake");
    setSearchParams(next);
  };

  return (
    <>
      <SEO
        title="Our Cakes"
        description="Browse the full Cakes by Maria catalogue — birthday, baby shower, bridal, graduation, corporate, bento cakes and cupcakes with prices."
      />

      <div className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Cakes</span>
          <h1>Find the perfect cake</h1>
          <p>Filter by occasion or search by name and flavour. Prices shown are a starting guide.</p>
          <Link to="/flavours-pricing" className="our-cakes__pricing-link">
            See full flavours & pricing list →
          </Link>
        </div>
      </div>

      <section className="section our-cakes">
        <div className="container">
          <div className="our-cakes__controls">
            <label className="our-cakes__search" htmlFor="cake-search">
              <span className="visually-hidden">Search cakes</span>
              <input
                id="cake-search"
                type="search"
                placeholder="Search by name or flavour…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <CategoryFilter categories={CATALOGUE_CATEGORIES} active={activeCategory} onChange={handleCategoryChange} />
          </div>

          {filteredCakes.length === 0 ? (
            <p className="our-cakes__empty">
              No cakes match that search just yet — try another term, or send us a custom request.
            </p>
          ) : (
            <div className="cake-grid our-cakes__grid">
              {filteredCakes.map((cake) => (
                <CakeCard key={cake.id} cake={cake} />
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedCake && (
        <div className="cake-detail__overlay" role="dialog" aria-modal="true" aria-label={selectedCake.name} onClick={closeDetails}>
          <div className="cake-detail" onClick={(e) => e.stopPropagation()}>
            <button className="cake-detail__close" aria-label="Close details" onClick={closeDetails}>
              ×
            </button>
            <CakeImage src={selectedCake.image} name={selectedCake.name} alt={`${selectedCake.name} cake`} ratio="1 / 1" className="cake-detail__image" />
            <div className="cake-detail__body">
              <span className="cake-detail__category">{getCategoryLabel(selectedCake.categories[0])}</span>
              <h2>{selectedCake.name}</h2>
              <p className="cake-detail__meta">
                {selectedCake.flavour !== selectedCake.name && <span>{selectedCake.flavour} • </span>}
                {selectedCake.size}
              </p>
              <p className="cake-detail__price">{formatPrice(selectedCake.price)}</p>
              <WhatsAppButton className="btn-block" label="Order on WhatsApp" message={cakeOrderMessage(selectedCake)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
