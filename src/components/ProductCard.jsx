import { Heart } from "lucide-react";
const ProductCard = ({ product }) => {
  return (
    <>
      <div className="rounded-lg hover:shadow-lg transition-shadow">
        <div className="relative mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover rounded"
          />
          <span
            className={`absolute bottom-2 left-2 ${product.badgeColor} text-white text-xs px-2 py-1 rounded`}
          >
            {product.badge}
          </span>
          <button className="absolute bottom-2 right-2 bg-white/80 hover:bg-white">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <h3 className="mb-2 line-clamp-2">{product.name}</h3>
        <p className="font-bold text-lg text-gray-500">{product.price}</p>
      </div>
    </>
  );
};

export default ProductCard;
