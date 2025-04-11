import { Dumbbell, Users, Clock, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Why Choose Express Gym?</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of technology and fitness in our
            state-of-the-art facility designed for optimal results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: Dumbbell,
              title: "Modern Equipment",
              description:
                "Latest fitness technology and premium exercise machines",
            },
            {
              icon: Users,
              title: "Expert Trainers",
              description:
                "Certified professionals to guide your fitness journey",
            },
            {
              icon: Clock,
              title: "24/7 Access",
              description: "Train anytime with our secure facility access",
            },
            {
              icon: Trophy,
              title: "Proven Results",
              description: "Thousands of success stories and transformations",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-700 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-rose-600" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
