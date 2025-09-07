import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "./common/Image";

interface NavigationProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Determine active section from URL if not provided
  const currentSection = activeSection || location.pathname.slice(1) || "home";

  // Theo dõi scroll để thay đổi style navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Trang Chủ", path: "/" },
    { id: "search", label: "Tìm Người Chơi", path: "/search" },
    { id: "profile", label: "Hồ Sơ", path: "/profile" },
    { id: "chat", label: "Chat", path: "/chat" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900 ${
        isMobileMenuOpen
          ? "bg-slate-900 border-slate-700"
          : isScrolled
            ? "bg-slate-900 border-slate-700"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="medium" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 md:mr-12">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:cursor-pointer ${
                  currentSection === item.id ? "nav-active" : "text-white hover:text-green-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className={`px-2 py-1 text-sm sm:px:4 sm:py-2 rounded-lg font-medium transition-all duration-300 bg-green-600 hover:cursor-pointer hover:bg-green-700 text-white`}
            >
              Đăng Nhập
            </Link>

            {/* Mobile menu button */}
            <button
              className={`p-2 rounded-md md:hidden transition-colors text-white hover:text-green-400 hover:bg-white/20 hover:cursor-pointer
              `}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden border-t transition-all duration-300 ${
              isScrolled ? "border-slate-700" : "border-white/20"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentSection === item.id
                      ? "nav-active"
                      : isScrolled
                        ? "bg-slate-900/90 backdrop-blur-sm shadow-md shadow-black/50"
                        : "bg-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
