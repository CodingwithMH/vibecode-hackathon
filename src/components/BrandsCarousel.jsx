import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brands from "../data/brands.json";
export default function BrandsCarousel() {
  const visibleItems = 4;
  const [index, setIndex] = useState(0);

  const maxIndex = brands.length - visibleItems;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative overflow-hidden">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Carousel Track */}
        <div
          className="flex gap-12 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleItems)}%)`,
          }}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="min-w-[25%] flex justify-center grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                height={"50px"}
                width={"auto"}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
