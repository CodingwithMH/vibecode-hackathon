import { Search, User, MapPin, ShoppingCart } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import Infobar from "./Infobar"
import BreadCrumbs from "./BreadCrumbs";
import navbar_categories from "../data/navbar_categories.json"
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [category,setCategory] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location=useLocation();
  return (
    <>
    <header>
      {/* Top bar */}
      <div className="bg-white py-8 px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to={'/'} className="flex items-center gap-2">
            <img src="https://www.bellababy.co.uk/static/version1764159769/frontend/Bellababy/hyva-base/en_GB/images/logo.svg" alt="Logo" />
          </Link>

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
            <Link to={"/locations"} size="icon">
              <MapPin className="w-7 h-7" />
            </Link>
            <button className="hover:cursor-pointer">
              <ShoppingCart className="w-7 h-7" onClick={()=>setIsCartOpen(true)}/>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white px-18 py-2 pb-4 mx-auto relative">
        <div className="max-w-7xl mx-auto">
          <ul className="flex items-center justify-between text-sm text-gray-700">
            {navbar_categories.map((category)=>{
              return <li key={category.name} onMouseEnter={()=>setCategory(category.name)}>
              <Link to={`/category/${category.name.toLowerCase().replaceAll(' ','_')}`} className="hover:text-orange-400 pb-4 hover:border-b-2 hover:border-b-gray-800">
                {category.name}
              </Link>
            </li>
              })
            }
          </ul>
        </div>
        {category !== "" &&
          <div onMouseLeave={()=>setCategory("")} className="w-full absolute left-0 top-[102%] flex gap-8 h-60 bg-white z-3 px-18">
        {
          navbar_categories.find(cat=>cat.name===category)?.submenu.map((item)=>{
            return <div>
              <h1 className="text-xl font-semibold text-gray-900 pb-4 mt-8">{item.sub_category}</h1>
              <Link to={"/"} className="test-sm text-gray-500 space-y-2">
                {
                  item.sub_names?.map((subn)=>{
                    
                    return <div>{subn}</div>
                  })
                }
              </Link>
            </div>
          })
        }
      </div>
    }
      </nav>
    <div className="w-[90%] border-b border-gray-400 mx-auto"></div>

      {/* Info Bar */}
      {location.pathname==="" || location.pathname==="/" ? <Infobar/> : <BreadCrumbs/>}
    </header>
    <Sidebar isOpen={isCartOpen} onClose={()=>setIsCartOpen(false)}/>
    </>
  )
}
