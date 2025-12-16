import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
export default function Arrival() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">
        New Arrivals
      </h2>

      <div className="relative">
        <button
          variant="ghost"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>

        <button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
