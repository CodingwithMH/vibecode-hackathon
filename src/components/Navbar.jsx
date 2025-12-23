import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, Home, Upload, BookOpen } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Upload", path: "/upload", icon: Upload },
  { name: "My Quizzes", path: "/quizzes", icon: BookOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Flash<span className="text-blue-500">Quiz+</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.name} to={item.path}>
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                      ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down">
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
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors
                        ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-700 hover:bg-gray-100"}`}
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
