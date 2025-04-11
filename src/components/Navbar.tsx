"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dumbbell, Menu, X } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 rounded-xl  ",
        isMobileMenuOpen
          ? "bg-gray-900"
          : isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Dumbbell className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-xl font-bold text-white">
              Express Gym
            </span>
          </Link>

          {pathname === "/" && (
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer font-semibold"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-rose-600 transition-colors cursor-pointer font-semibold"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-300 hover:text-rose-600 transition-colors cursor-pointer font-semibold"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-rose-600 transition-colors cursor-pointer font-semibold"
              >
                Contact
              </button>
            </div>
          )}

          <Link
            href="/appointment"
            className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-gray-600  transition-all transform  duration-300   ease-in-out hover:scale-110"
          >
            Join Now
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-rose-600 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-xl md:hidden transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <span className="text-lg font-semibold text-white">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex py-8 px-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="flex items-center text-lg text-gray-300 hover:text-cyan-500 transition-colors"
              >
                <span className="border-b-2 border-transparent hover:border-cyan-500 pb-1">
                  Home
                </span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="flex items-center text-lg text-gray-300 hover:text-cyan-500 transition-colors"
              >
                <span className="border-b-2 border-transparent hover:border-cyan-500 pb-1">
                  About
                </span>
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="flex items-center text-lg text-gray-300 hover:text-cyan-500 transition-colors"
              >
                <span className="border-b-2 border-transparent hover:border-cyan-500 pb-1">
                  Gallery
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center text-lg text-gray-300 hover:text-cyan-500 transition-colors"
              >
                <span className="border-b-2 border-transparent hover:border-cyan-500 pb-1">
                  Contact
                </span>
              </button>
            </div>
          </div>

          {/* Menu Footer */}
          <div className="p-4 border-t border-gray-800">
            <Link
              href="/appointment"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-rose-600 text-white text-center px-6 py-2 rounded-md hover:bg-cyan-600 transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
