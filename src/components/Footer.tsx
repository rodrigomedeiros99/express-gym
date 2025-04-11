"use client";
import Link from "next/link";
import { Dumbbell, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 sm:pt-20 pb-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">Cyber Express</span>
            </div>
            <p className="text-gray-400">
              Transforming lives through fitness and technology since 2023.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-cyan-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 24/7</li>
              <li>Saturday: 24/7</li>
              <li>Sunday: 24/7</li>
              <li className="text-sm mt-2">Staff Hours: 6:00 AM - 10:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li>(555) 123-4567</li>
              <li>info@cyberexpress.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 flex items-center justify-center">
          <div className=" pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cyber Express. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
