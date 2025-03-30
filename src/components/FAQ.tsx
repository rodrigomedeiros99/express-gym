"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your operating hours?",
      answer:
        "We're open 24/7! Members can access the facility at any time using their secure key card.",
    },
    {
      question: "Do you offer personal training?",
      answer:
        "Yes! Our certified personal trainers are available for one-on-one sessions, customized workout plans, and nutritional guidance.",
    },
    {
      question: "What's included in the membership?",
      answer:
        "Our membership includes 24/7 access, use of all equipment, group classes, locker room facilities, and a free initial fitness assessment.",
    },
    {
      question: "Is there a contract or commitment period?",
      answer:
        "We offer both month-to-month and annual membership options. Annual memberships come with additional benefits and discounted rates.",
    },
    {
      question: "Do you offer group classes?",
      answer:
        "Yes! We offer a variety of group classes including HIIT, yoga, spinning, and strength training. Class schedules are updated monthly.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about joining Cyber Express
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-red-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-red-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
