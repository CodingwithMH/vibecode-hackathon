import { Minus,Plus } from "lucide-react"

const SidebarItem = ({item}) => {
  return (
    <>
     <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="w-20 h-20 bg-gray-100 rounded shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-sm text-[#b8621b] font-medium mb-2">{item.name}</h3>
                      <p className="text-lg font-semibold mb-3">£{item.price.toFixed(2)}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-gray-300 rounded-full">
                          <button
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 hover:bg-gray-100 rounded-l-full transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-1 min-w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-gray-100 rounded-r-full transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-sm underline hover:no-underline text-foreground"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div> 
    </>
  )
}

export default SidebarItem
