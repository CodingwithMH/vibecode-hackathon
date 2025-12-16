import categories from "../data/categories.json";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 w-[90%]">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-500">
        Shop by categories
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </section>
  );
}
