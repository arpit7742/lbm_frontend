import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Header = ({ username, signOut, setIsMenuOpen, isMenuOpen }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);

  Header.propTypes = {
    username: PropTypes.string.isRequired,
    signOut: PropTypes.func.isRequired,
    setIsMenuOpen: PropTypes.func.isRequired,
    isMenuOpen: PropTypes.bool.isRequired,
  };

  return (
    <header className="w-full h-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-md flex justify-between lg:justify-end items-center text-white">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="py-2 px-2 h-16 text-white md:hidden"
      >
        {isMenuOpen ? (
          "Close"
        ) : (
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="24px"
            width="24px"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M96 256h320M96 176h320M96 336h320"
            />
          </svg>
        )}
      </button>

      {/* User Dropdown */}
      <div className="relative px-4">
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-200"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-indigo-500"
            height="24px"
            width="24px"
          >
            <path d="M12 2A10.13 10.13 0 002 12a10 10 0 004 7.92V20h.1a9.7 9.7 0 0011.8 0h.1v-.08A10 10 0 0022 12 10.13 10.13 0 0012 2zM8.07 18.93A3 3 0 0111 16.57h2a3 3 0 012.93 2.36 7.75 7.75 0 01-7.86 0zm9.54-1.29A5 5 0 0013 14.57h-2a5 5 0 00-4.61 3.07A8 8 0 014 12a8.1 8.1 0 018-8 8.1 8.1 0 018 8 8 8 0 01-2.39 5.64z" />
            <path d="M12 6a3.91 3.91 0 00-4 4 3.91 3.91 0 004 4 3.91 3.91 0 004-4 3.91 3.91 0 00-4-4zm0 6a1.91 1.91 0 01-2-2 1.91 1.91 0 012-2 1.91 1.91 0 012 2 1.91 1.91 0 01-2 2z" />
          </svg>
          <span className="font-semibold">{username}</span>
          <svg
            className="text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            height="20px"
            width="20px"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {openDropdown && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-md"
            onClick={() => setOpenDropdown(false)}
          >
            <button
              onClick={() => navigate("/dashboard/account")}
              className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
            >
              Account Settings
            </button>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <button
                type="submit"
                className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
              >
                Sign Out
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
