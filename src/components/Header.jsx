import { Search, User, MapPin, ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import Infobar from "./Infobar"
import BreadCrumbs from "./BreadCrumbs";

export default function Header() {
  const location=useLocation();
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
          <ul className="flex items-center justify-between text-sm text-gray-700">
            <li>
              <Link to="/category/pushchairs" className="hover:text-orange-400">
                Pushchairs
              </Link>
            </li>
            <li>
              <Link to="/category/car_seats" className="hover:text-orange-400">
                Car Seats
              </Link>
            </li>
            <li>
              <Link to="/category/feeding" className="hover:text-orange-400">
                Feeding
              </Link>
            </li>
            <li>
              <Link to="/category/sitting" className="hover:text-orange-400">
                Sitting
              </Link>
            </li>
            <li>
              <Link to="/category/boutique" className="hover:text-orange-400">
                Boutique
              </Link>
            </li>
            <li>
              <Link to="/category/nursery" className="hover:text-orange-400">
                Nursery
              </Link>
            </li>
            <li>
              <Link to="/category/hygiene" className="hover:text-orange-400">
                Hygiene
              </Link>
            </li>
            <li>
              <Link to="/category/travel" className="hover:text-orange-400">
                Travel
              </Link>
            </li>
            <li>
              <Link to="/category/gifts" className="hover:text-orange-400">
                Gifts
              </Link>
            </li>
            <li>
              <Link to="/category/brand" className="hover:text-orange-400">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-orange-400">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Info Bar */}
      {location.pathname==="" || location.pathname==="/" ? <Infobar/> : <BreadCrumbs/>}
    </header>
  )
}
