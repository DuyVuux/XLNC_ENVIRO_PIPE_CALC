"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex-1"></div>
          <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-base">language</span>
              <button className="hover:text-blue-600 transition-colors" type="button">
                EN
              </button>
              <span>/</span>
              <button className="hover:text-blue-600 transition-colors" type="button">
                VN
              </button>
            </div>
            <div className="relative">
              <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                search
              </span>
              <input
                className="pl-10 pr-4 py-1 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                placeholder="Search"
                type="search"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-6 flex justify-between items-center py-4">
        <Link href="/" className="text-3xl font-bold text-blue-900">
          XLNC
        </Link>
        <ul className="hidden lg:flex items-center space-x-10 font-medium text-gray-800 dark:text-gray-200">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#modules" className="hover:text-blue-600 transition-colors">
              Modules
            </Link>
          </li>
          <li>
            <a href="#resources" className="hover:text-blue-600 transition-colors">
              Engineering Tools
            </a>
          </li>
          <li>
            <a href="#resources" className="hover:text-blue-600 transition-colors">
              Documentation
            </a>
          </li>
          <li>
            <a href="#industries" className="hover:text-blue-600 transition-colors">
              Industries
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

