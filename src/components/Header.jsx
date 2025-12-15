import { Search, User, MapPin, ShoppingCart } from "lucide-react"

export default function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-white py-8 px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="https://www.bellababy.co.uk/static/version1764159769/frontend/Bellababy/hyva-base/en_GB/images/logo.svg" alt="Logo" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-3">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full text-lg px-4 py-2 pr-10 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <button variant="ghost" size="icon">
              <User className="w-7 h-7" />
            </button>
            <button variant="ghost" size="icon">
              <MapPin className="w-7 h-7" />
            </button>
            <button variant="ghost" size="icon">
              <ShoppingCart className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white px-2 py-2 pb-4 border-b-gray-400 border-b w-[90%] mx-auto">
        <div className="max-w-7xl mx-auto">
          <ul className="flex items-center justify-between text-sm">
            <li>
              <a href="#" className="hover:text-orange-400">
                Pushchairs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Car Seats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Feeding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Sitting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Boutique
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Nursery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Hygiene
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Travel
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Gifts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Brands
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Info Bar */}
      <div className="w-[90%] text-sm px-4 py-4 mx-auto flex items-center justify-around">
            <span className="flex items-center gap-2">
              <span>📦</span> Free click & collect
            </span>
            <span className="flex items-center gap-2">
              <span>🚚</span> Free delivery over £49*
            </span>
            <span className="flex items-center gap-2">
              <span>↩️</span> 30 Day returns
            </span>
          <div className="flex items-center gap-2">
            <img src="https://www.bellababy.co.uk/media/wysiwyg/feefo-score-icon.png" alt="" />
          </div>
      </div>
    </header>
  )
}
