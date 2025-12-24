import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Home, BookOpen } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50
      bg-black/60 backdrop-blur-xl border-b border-white/10
      animate-navbar max-w-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl
              bg-linear-to-br from-cyan-400 to-purple-600
              flex items-center justify-center
              shadow-[0_0_25px_rgba(139,92,246,0.6)]
              group-hover:scale-110 transition-transform duration-300"
            >
              <Zap className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-extrabold tracking-wide text-white">
              Flash
              <span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Quiz+
              </span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.name} to={item.path}>
                  <div
                    className={`nav-item group
                      ${isActive ? "nav-active" : "nav-inactive"}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg
            text-white hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10
            animate-slide-down-neon">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <div
                      className={`nav-item
                        ${isActive ? "nav-active" : "nav-inactive"}`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
