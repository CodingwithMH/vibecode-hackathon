import { Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function Arrival() {
  const products = [
    {
      name: "Mamas & Papas Anti-Allergy Quilted Cotbed Mattress Protector",
      price: "£25.00",
      image: "/images/white-quilted-mattress-protector.jpg",
      badge: "Sale",
      badgeColor: "bg-yellow-400",
    },
    {
      name: "Mamas & Papas Mini Rattle - Lenny Lion",
      price: "£8.00",
      image: "/images/cute-yellow-lion-baby-rattle-toy.jpg",
      badge: "New",
      badgeColor: "bg-yellow-400",
    },
    {
      name: "Mamas & Papas Safetyfirst Wildlife Activity Triangle Toy",
      price: "£32.00",
      image: "/images/colorful-baby-activity-triangle-toy-animals.jpg",
      badge: "Sale",
      badgeColor: "bg-yellow-400",
    },
    {
      name: "Mamas & Papas Welcome to the World Snuggle Nursing Pillow - Leaf",
      price: "£44.00",
      image: "/images/grey-nursing-pillow-cushion.jpg",
      badge: "New Arrival",
      badgeColor: "bg-gray-400",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-gray-600 text-center mb-8">New Arrivals</h2>

      <div className="relative">
        <button variant="ghost" size="icon" className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div key={idx} className="rounded-lg hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded"
                />
                <span className={`absolute bottom-2 left-2 ${product.badgeColor} text-white text-xs px-2 py-1 rounded`}>
                  {product.badge}
                </span>
                <button className="absolute bottom-2 right-2 bg-white/80 hover:bg-white">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <h3 className="mb-2 line-clamp-2">{product.name}</h3>
              <p className="font-bold text-lg text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>

        <button variant="ghost" size="icon" className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
