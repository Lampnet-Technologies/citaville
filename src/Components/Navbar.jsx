import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = ({ onRegisterClick }) => {
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
    <header className="bg-gray-800 ">
      <div className=" w-10/12 mx-auto flex justify-between items-center p-4 ">
        <Link to="/">
          <div>
            <h1 className="text-green-600 text-5xl font-bold">Citavile</h1>
          </div>
        </Link>
        <div className="relative bg-white rounded-xl flex flex-row gap-6 items-center justify-center p-2 px-6">
          <Link to="/courses">
            <h1 className="text-gray-800 text-2xl font-bold cursor-pointer">
              Courses
            </h1>
          </Link>

          <button
          onClick={onRegisterClick}
          className="bg-gradient-to-br from-green-900 to-green-600 hover:from-green-700 hover:to-green-400 px-3 py-2 text-white rounded-sm font-semibold transition-colors duration-700 cursor-pointer">
            Register now
          </button>

          <div className="cursor-pointer text-green-700 rounded-full p-1 hover:bg-green-400 transition-colors duration-300">
            {isMenuOpen ? (
              <RiCloseLargeFill size={30} onClick={toggleMenu} />
            ) : (
              <GiHamburgerMenu size={30} onClick={toggleMenu} />
            )}
          </div>
          {isMenuOpen && (
            <ul className="bg-red-400 absolute top-20 right-0 w-48  rounded-lg shadow-lg p-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-green-600 transition-colors duration-300"
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
