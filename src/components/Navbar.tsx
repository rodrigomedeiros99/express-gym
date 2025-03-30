"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
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
                className="text-gray-300 hover:text-rose-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-rose-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-300 hover:text-rose-600 transition-colors"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-rose-600 transition-colors"
              >
                Contact
              </button>
            </div>
          )}

          <Link
            href="/appointment"
            className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
