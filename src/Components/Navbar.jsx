import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-[#363636] text-white">
      <div className="w-11/12 max-w-[1440px] mx-auto flex justify-between items-center py-4 px-2 md:px-4">
        {/* Logo */}
        <Link to="/" className="text-green-500 text-3xl md:text-4xl font-bold">
          Citavile
        </Link>

        {/* Central navigation (Courses + Register + Hamburger) */}
        <div className="relative bg-white rounded-xl flex items-center gap-4 px-4 py-2">
          <Link to="/courses">
            <h1 className="text-gray-800 text-base md:text-xl font-semibold cursor-pointer">
              Courses
            </h1>
          </Link>

          <button className="bg-gradient-to-br from-green-900 to-green-600 hover:from-green-700 hover:to-green-400 px-3 py-2 text-white rounded-sm font-semibold transition-colors duration-500">
            Register now
          </button>

          <div className="cursor-pointer text-gray-800">
            {isMenuOpen ? (
              <RiCloseLargeFill size={32} onClick={toggleMenu} />
            ) : (
              <GiHamburgerMenu size={32} onClick={toggleMenu} />
            )}
          </div>

          {/* Dropdown Navigation */}
          {isMenuOpen && (
            <ul className="bg-white absolute top-20 right-0 w-48 rounded-lg shadow-lg p-4 space-y-2 z-40">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-green-600 transition-colors duration-300 block"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
