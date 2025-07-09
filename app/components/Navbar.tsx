"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { FiGlobe, FiMessageCircle, FiInfo, FiUser } from "react-icons/fi";

type Country = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

type NavbarProps = {
  countries: Country[];
  scrollToElement: (id: string) => void;
  handleCountryClick: (country: string) => void;
};

export default function Navbar({
  countries,
  scrollToElement,
  handleCountryClick,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800 bg-inherit backdrop-blur-md fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-full object-cover cursor-pointer shadow-md bg-inherit"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent focus:outline-none cursor-pointer"
          >
            MD Blog
          </motion.button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Countries Dropdown */}
          <div className="relative group">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 transition-colors py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-lg px-3"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <FiGlobe className="mr-1" />
              <span className="text-base">Ülkeler</span>
              <svg
                className="w-4 h-4 group-hover:text-orange-400 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-20 overflow-hidden"
                >
                  <div className="p-2 space-y-1">
                    {countries.map((country) => (
                      <motion.button
                        key={country.id}
                        whileHover={{ x: 5 }}
                        type="button"
                        onClick={() => handleCountryClick(country.name)}
                        className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-orange-400 hover:text-white rounded-lg transition-colors"
                      >
                        {country.name}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => scrollToElement("yorumlar")}
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 transition-colors py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <FiMessageCircle className="mr-1" />
            <span>Yorumlar</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => scrollToElement("hakkimda")}
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 transition-colors py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <FiInfo className="mr-1" />
            <span>Hakkımda</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => scrollToElement("iletisim")}
            className="flex items-center text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 transition-colors py-2 px-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <FiUser className="mr-1" />
            <span>İletişim</span>
          </motion.button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-gray-800 dark:text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <span
            className={`block w-6 h-0.5 bg-current mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col items-start px-6 py-4 space-y-3">
              {/* Countries Dropdown Mobile */}
              <div className="w-full">
                <button
                  className="flex items-center justify-between text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 w-full py-2"
                  onClick={() => setDropdownOpen((v) => !v)}
                >
                  <div className="flex items-center">
                    <FiGlobe className="mr-2" />
                    <span>Ülkeler</span>
                  </div>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 flex flex-col gap-2 mt-2"
                    >
                      {countries.map((country) => (
                        <motion.button
                          key={country.id}
                          whileHover={{ x: 5 }}
                          type="button"
                          onClick={() => {
                            handleCountryClick(country.name);
                            setMenuOpen(false);
                          }}
                          className="text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 py-1 w-full text-left flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></span>
                          {country.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                className="text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 py-2 flex items-center w-full"
                onClick={() => {
                  scrollToElement("hakkimda");
                  setMenuOpen(false);
                }}
              >
                <FiInfo className="mr-2" />
                Hakkımda
              </button>

              <button
                type="button"
                className="text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 py-2 flex items-center w-full"
                onClick={() => {
                  scrollToElement("yorumlar");
                  setMenuOpen(false);
                }}
              >
                <FiMessageCircle className="mr-2" />
                Yorumlar
              </button>

              <button
                type="button"
                className="text-gray-800 dark:text-gray-200 hover:text-orange-400 dark:hover:text-orange-400 py-2 flex items-center w-full"
                onClick={() => {
                  scrollToElement("iletisim");
                  setMenuOpen(false);
                }}
              >
                <FiUser className="mr-2" />
                İletişim
              </button>

              <div className="w-full flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Tema
                </span>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
