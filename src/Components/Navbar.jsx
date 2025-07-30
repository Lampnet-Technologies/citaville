import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState, useRef, useEffect } from "react";

const Navbar = ({ onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-800 w-full z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 relative">
        <Link to="/">
          <h1 className="text-green-600 text-3xl md:text-5xl font-bold">
            Citavile
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 bg-white rounded-xl p-2 px-4">
            <Link to="/courses">
              <h1 className="text-gray-800 text-lg font-bold cursor-pointer">
                Courses
              </h1>
            </Link>

            <button
              onClick={onRegisterClick}
              className="bg-gradient-to-br from-green-900 to-green-600 hover:from-green-700 hover:to-green-400 px-3 py-2 text-white rounded-sm font-semibold transition-colors duration-700 cursor-pointer"
            >
              Register now
            </button>
          </div>

          {/* Toggle Button for Desktop */}
          <div className="text-green-600 cursor-pointer">
            {isMenuOpen ? (
              <RiCloseLargeFill size={30} onClick={toggleMenu} />
            ) : (
              <GiHamburgerMenu size={30} onClick={toggleMenu} />
            )}
          </div>
        </div>

        {/* Dropdown (mobile = full width, desktop = small and aligned right) */}
        {isMenuOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full right-4 mt-2 bg-white shadow-lg rounded-lg px-6 py-6 space-y-4 w-50% md:w-56"
          >
            {/* Desktop: Show only Blog, About, Contact */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-800 font-semibold hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile: Show additional links */}
            <div className="md:hidden space-y-4">
              <Link
                to="/courses"
                className="block text-gray-800 font-semibold hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>

              <button
                onClick={() => {
                  onRegisterClick();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-br from-green-900 to-green-600 hover:from-green-700 hover:to-green-400 px-3 py-2 text-white rounded-sm font-semibold transition-colors duration-700"
              >
                Register now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
