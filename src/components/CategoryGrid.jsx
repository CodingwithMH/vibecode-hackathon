export default function CategoryGrid() {
  const categories = [
    {
      name: "Pushchairs",
      image: "/images/parent-with-baby-stroller-pushchair-urban-street.jpg",
    },
    {
      name: "Nursery",
      image: "/images/sleeping-baby-in-modern-nursery-crib.jpg",
    },
    {
      name: "Car Seats",
      image: "/images/toddler-in-orange-car-seat-smiling.jpg",
    },
    {
      name: "Feeding",
      image: "/images/baby-in-high-chair-being-fed.jpg",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 w-[90%]">
      <h2 className="text-2xl font-semibold text-center mb-8 text-gray-500">Shop by categories</h2>

      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <a key={category.name} href="#" className="relative group overflow-hidden rounded-lg h-96 block">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-5xl font-bold">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
