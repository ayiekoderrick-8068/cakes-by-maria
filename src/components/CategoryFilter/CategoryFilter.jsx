import "./CategoryFilter.css";

export default function CategoryFilter({ categories, active, onChange, includeAll = true }) {
  const options = includeAll ? [{ slug: "all", label: "All" }, ...categories] : categories;

  return (
    <div className="category-filter" role="tablist" aria-label="Filter by category">
      {options.map((category) => (
        <button
          key={category.slug}
          role="tab"
          aria-selected={active === category.slug}
          className={`category-filter__chip ${active === category.slug ? "is-active" : ""}`}
          onClick={() => onChange(category.slug)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
