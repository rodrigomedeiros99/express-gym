"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Clock, User, Mail, Phone } from "lucide-react";
import "react-day-picker/dist/style.css";
import { clsx } from "clsx";

const MEMBERSHIP_TYPES = [
  {
    id: 1,
    name: "Monthly",
    price: "$49/month",
    description: "No commitment, cancel anytime",
  },
  {
    id: 2,
    name: "Quarterly",
    price: "$129/3 months",
    description: "Save 12% on monthly rate",
  },
  {
    id: 3,
    name: "Annual",
    price: "$449/year",
    description: "Best value - Save 24% on monthly rate",
  },
];

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

export default function AppointmentForm() {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedMembership, setSelectedMembership] = useState<number>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the appointment submission
    console.log({
      ...formData,
      date: selectedDate,
      time: selectedTime,
      membership: MEMBERSHIP_TYPES.find((m) => m.id === selectedMembership)
        ?.name,
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <label className="block text-lg font-medium mb-4">
            Select Your Membership Plan
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MEMBERSHIP_TYPES.map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedMembership(plan.id)}
                className={clsx(
                  "p-4 border-2 rounded-lg text-left transition-colors",
                  selectedMembership === plan.id
                    ? "border-gray-500 bg-cyan-500/10"
                    : "border-gray-700 hover:border-gray-600"
                )}
              >
                <div className="font-bold text-lg">{plan.name}</div>
                <div className="text-rose-700 text-xl font-bold my-2">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-400">{plan.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-4">
              Schedule Facility Tour
            </label>
            <div className="border-2 border-gray-700 rounded-lg p-4">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                fromDate={new Date()}
                className="mx-auto"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg font-medium mb-4">
              Select Time
            </label>
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={clsx(
                    "p-2 border-2 rounded-md flex items-center justify-center transition-colors",
                    selectedTime === time
                      ? "border-gray-500 bg-cyan-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  )}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="pl-10 py-2 w-full bg-gray-700 border-gray-600 rounded-md text-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="pl-10 py-2 w-full bg-gray-700 border-gray-600 rounded-md text-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="pl-10 py-2 w-full bg-gray-700 border-gray-600 rounded-md text-white"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-700 text-white py-3 rounded-md hover:bg-gray-600 transition-colors font-semibold"
        >
          Schedule Tour & Join Now
        </button>
      </form>
    </div>
  );
}
