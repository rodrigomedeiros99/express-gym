import AppointmentForm from "@/components/AppointmentForm";

export default function AppointmentPage() {
  return (
    <main className="pt-16 overflow-x-hidden bg-gray-900 overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Start Your Fitness Journey
          </h1>
          <p className="text-xl text-gray-400">
            Choose your membership plan and schedule a tour of our facility
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <AppointmentForm />
        </div>
      </div>
    </main>
  );
}
