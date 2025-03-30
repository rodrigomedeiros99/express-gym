import { Check } from "lucide-react";
import { clsx } from "clsx";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Monthly Plan",
      price: "$49",
      period: "per month",
      features: [
        "Full access to gym facilities",
        "Basic fitness assessment",
        "Access to group classes",
        "Locker room access",
        "Cancel anytime",
      ],
      isPopular: false,
    },
    {
      name: "6 Months Plan",
      price: "$39",
      period: "per month",
      features: [
        "All Monthly Plan features",
        "Personal training session",
        "Nutrition consultation",
        "Guest passes (2/month)",
        "Save 20% on monthly rate",
      ],
      isPopular: true,
    },
    {
      name: "Annual Plan",
      price: "$29",
      period: "per month",
      features: [
        "All 6 Months Plan features",
        "Unlimited guest passes",
        "Priority class booking",
        "Free protein shakes",
        "Save 40% on monthly rate",
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Membership Plans</h2>
          <p className="text-xl text-gray-400">
            Choose the perfect plan for your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                "relative bg-gray-900 rounded-xl overflow-hidden",
                plan.isPopular && "ring-2 ring-rose-600"
              )}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-rose-600 text-white px-4 py-1 rounded-bl-lg font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-bold text-rose-600">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <Check className="w-5 h-5 text-rose-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/appointment"
                  className={clsx(
                    "block w-full py-3 px-6 rounded-md text-center font-semibold transition-colors",
                    plan.isPopular
                      ? "bg-rose-600 text-white hover:bg-gray-600"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
