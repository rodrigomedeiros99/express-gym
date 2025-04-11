import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400">
            Visit our facility or reach out to learn more
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.5135398711695!2d-83.4501311233817!3d39.8851331878216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838af31859970b7%3A0x68babad55db9cda6!2sXpress%20Fitness!5e0!3m2!1spt-BR!2sus!4v1744376614356!5m2!1spt-BR!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div data-aos="fade-left" className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-400">
                  123 Fitness Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-400">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-400">info@cyberexpress.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Hours</h3>
                <p className="text-gray-400">
                  Open 24/7 for Members
                  <br />
                  Staff Hours: 6:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
