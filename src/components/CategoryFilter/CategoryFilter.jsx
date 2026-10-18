import "./CategoryFilter.css";

/**
 * Chip row for filtering. Each category may carry a `count`, shown as a small
 * badge; `allCount` adds one to the "All" chip. On narrow screens the row
 * scrolls sideways instead of wrapping.
 */
export default function CategoryFilter({
  categories,
  active,
  onChange,
  includeAll = true,
  allLabel = "All",
  allCount,
}) {
  const options = includeAll ? [{ slug: "all", label: allLabel, count: allCount }, ...categories] : categories;

  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      {options.map((category) => (
        <button
          key={category.slug}
          type="button"
          aria-pressed={active === category.slug}
          className={`category-filter__chip ${active === category.slug ? "is-active" : ""}`}
          onClick={() => onChange(category.slug)}
        >
          {category.label}
          {typeof category.count === "number" && <span className="category-filter__count">{category.count}</span>}
        </button>
      ))}
    </div>
  );
}
