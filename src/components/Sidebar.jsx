import { X, Minus,Plus } from "lucide-react"
import { useState } from "react"
import SidebarItem from "./SidebarItem"
// import { useSelector } from "react-redux"

const Sidebar = ({isOpen, onClose}) => {
    const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Mamas & Papas Mini Rattle - Lenny Lion",
      price: 8.0,
      image: "/lion-rattle-toy.jpg",
      quantity: 1,
    },
  ])
//   const {products}=useSelector((state)=>state.cart);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="bg-[#4a5568] text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">My cart</h2>
          <button
            onClick={onClose}
            className="hover:bg-white/10 rounded-sm p-1 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col h-[calc(100%-72px)] overflow-y-auto">
          <div className="flex-1 px-6 py-6">
            {cartItems.length === 0 ? (
              <p className="text-muted-foreground text-center py-12">Your cart is empty</p>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <SidebarItem key={item.name} item={item}/>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t px-6 py-6 bg-white">
              {/* Subtotal */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold">Cart subtotal:</span>
                <span className="text-xl font-bold">£{subtotal.toFixed(2)}</span>
              </div>

              {/* View Cart Link */}
              <div className="text-center mb-4">
                <a href="/cart" className="text-sm underline hover:no-underline">
                  View and Edit Cart
                </a>
              </div>

              {/* Checkout Button */}
              <button
                className="w-full bg-[#fdb515] hover:bg-[#e5a313] text-white text-lg font-semibold h-12 mb-4"
              >
                Go to Checkout
              </button>

              {/* OR Divider */}
              <div className="text-center text-sm text-muted-foreground mb-4">OR</div>

              {/* PayPal Button */}
              <button className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white rounded-md h-12 flex items-center justify-center mb-3 transition-colors">
                <svg className="w-24 h-6" viewBox="0 0 100 32" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M12 4.917L4.2 24.467h4.8l1.6-4.267h5.467L17.667 24.467h4.8L14.667 4.917H12zm-1.2 11.2l2-5.334 2 5.334h-4zM27.333 24.467h4.534V4.917h-4.534v19.55zm21.067-7.734c0-4.4-3.2-7.866-7.467-7.866-4.266 0-7.466 3.466-7.466 7.866 0 4.4 3.2 7.867 7.466 7.867 4.267 0 7.467-3.467 7.467-7.867zm-10.4 0c0-2 1.467-3.6 3.467-3.6s3.466 1.6 3.466 3.6c0 2-1.466 3.6-3.466 3.6s-3.467-1.6-3.467-3.6z"
                  />
                </svg>
              </button>

              {/* Amazon Pay Button */}
              <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-gray-800 rounded-md h-12 flex items-center justify-center gap-2 font-semibold transition-colors mb-2">
                <span>Pay with</span>
                <svg className="w-16 h-5" viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M62.5 14.667c0 3.6-2.933 6.133-6.4 6.133-1.867 0-3.333-.667-4.4-1.867l.933-1.333c.8.933 1.867 1.467 3.333 1.467 2.267 0 4-1.6 4-4.4V14.4c-.933 1.2-2.4 2-4.133 2-2.933 0-5.2-2.267-5.2-5.2s2.267-5.2 5.2-5.2c1.733 0 3.2.8 4.133 2V6.4h2.534v8.267zM53.867 11.2c0 1.733 1.333 3.067 3.067 3.067 1.733 0 3.066-1.334 3.066-3.067 0-1.733-1.333-3.067-3.066-3.067-1.734 0-3.067 1.334-3.067 3.067zM73.867 6.4v10.133h-2.534V15.2c-.933 1.2-2.4 2-4.133 2-2.933 0-5.2-2.267-5.2-5.2s2.267-5.2 5.2-5.2c1.733 0 3.2.8 4.133 2V6.4h2.534zm-9.334 4.8c0 1.733 1.334 3.067 3.067 3.067s3.067-1.334 3.067-3.067c0-1.733-1.334-3.067-3.067-3.067s-3.067 1.334-3.067 3.067zM20.133 6.4l-5.6 10.133h-2.8L6.133 6.4h2.934l4 7.333 4-7.333h2.933zM85.733 6.4v10.133h-2.4c0-1.067-.8-1.867-1.866-1.867-1.067 0-1.867.8-1.867 1.867h-2.4c0-2.4 1.867-4.267 4.267-4.267 1.2 0 2.266.534 2.933 1.334V6.4h1.333z"
                  />
                </svg>
                <span>→</span>
              </button>

              <p className="text-xs text-center text-muted-foreground">Guaranteed delivery else refund</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar
