import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Gym Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Body at{" "}
            <span className="text-rose-600">Express Gym</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Join the future of fitness. State-of-the-art equipment, expert
            trainers, and a motivating atmosphere to help you achieve your
            fitness goals.
          </p>
          <Link
            href="/appointment"
            className="bg-rose-600 text-black px-8 py-3 rounded-md text-lg font-semibold flex items-center hover:bg-gray-400 transition-colors w-fit"
          >
            Start Your Journey
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
