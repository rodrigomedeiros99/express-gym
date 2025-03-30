export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      title: "Main Training Area",
    },
    {
      url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f",
      title: "Cardio Zone",
    },
    {
      url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
      title: "Weight Training",
    },
    {
      url: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc",
      title: "CrossFit Area",
    },
    {
      url: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      title: "Yoga Studio",
    },
    {
      url: "https://images.unsplash.com/photo-1623874514711-0f321325f318",
      title: "Recovery Zone",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Our Facility</h2>
          <p className="text-xl text-gray-400">
            Take a tour of our state-of-the-art gym equipment and spaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={`${image.url}?auto=format&fit=crop&w=800&q=80`}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <h3 className="text-lg font-semibold p-4">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
