import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaUserShield,
  FaProjectDiagram,
  FaCode,
  FaMicrochip,
  FaChevronDown,
  FaBook,
} from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [showPYQDropdown, setShowPYQDropdown] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo/logo2.png"
            alt="BCA Hub"
            className="h-20 w-auto object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold text-blue-700">
              BCA Hub
            </h1>
            <p className="text-xs text-gray-500">
              Learn • Practice • Grow
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/notes"
              className="hover:text-blue-600 transition duration-300"
            >
              Notes
            </Link>
          </li>

          {/* PYQ Dropdown */}
          <li className="relative">
            <button
              onClick={() => setShowPYQDropdown(!showPYQDropdown)}
              className="flex items-center gap-1 hover:text-blue-600 transition duration-300"
            >
              <FaBook />
              PYQ
              <FaChevronDown className={`text-xs transition-transform duration-300 ${
                showPYQDropdown ? "rotate-180" : ""
              }`} />
            </button>

            {showPYQDropdown && (
              <div className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border overflow-hidden z-50">
                <Link
                  to="/pyq/semester1"
                  onClick={() => setShowPYQDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition"
                >
                  <span>Semester 1</span>
                </Link>

                <Link
                  to="/pyq/semester2"
                  onClick={() => setShowPYQDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition border-t"
                >
                  <span>Semester 2</span>
                </Link>

                <Link
                  to="/pyq/semester3"
                  onClick={() => setShowPYQDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition border-t"
                >
                  <span>Semester 3</span>
                </Link>

                <Link
                  to="/pyq/semester4"
                  onClick={() => setShowPYQDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition border-t"
                >
                  <span>Semester 4</span>
                </Link>

                <Link
                  to="/pyq/semester5"
                  onClick={() => setShowPYQDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition border-t"
                >
                  <span>Semester 5</span>
                </Link>

                <Link
                  to="/pyq/semester6"
                  onClick={() => setShowPYQDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition border-t"
                >
                  <span>Semester 6</span>
                </Link>
              </div>
            )}
          </li>

          {/* Projects Dropdown */}
          <li>
  <Link
    to="/projects"
    className="flex items-center gap-2 hover:text-blue-600 transition duration-300"
  >
    <FaProjectDiagram />
    Projects
  </Link>
</li>

          <li>
            <Link
              to="/internship"
              className="hover:text-blue-600 transition duration-300"
            >
              Internship
            </Link>
          </li>

          <li>
            <Link
              to="/interview"
              className="hover:text-blue-600 transition duration-300"
            >
              Interview
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      
        <div className="flex items-center gap-5 relative">
          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              <FaUserCircle className="text-blue-700 text-2xl" />
              <span className="font-medium text-gray-700">Account</span>
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl border overflow-hidden z-50">
                <Link
                  to="/login"
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition"
                >
                  <FaSignInAlt className="text-blue-600" />
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setShowDropdown(false)}
                  className="flex items-center gap-3 px-5 py-3 hover:bg-green-50 transition"
                >
                  <FaUserPlus className="text-green-600" />
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Admin Button */}
          <Link
            to="/admin/login"
            className="hidden md:flex items-center gap-3 px-7 py-3 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <FaUserShield />
            Admin
          </Link>

          {/* Mobile Menu */}
          <button className="lg:hidden text-2xl text-blue-700">
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;