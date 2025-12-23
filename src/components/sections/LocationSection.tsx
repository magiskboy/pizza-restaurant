"use client";

export default function LocationSection() {
  const handleGetDirections = () => {
    // Open Google Maps with the restaurant location
    window.open('https://maps.google.com/?q=123+Main+St.,+Downtown,+City', '_blank');
  };
  
  return (
    <section className="py-16 px-4 bg-white md:py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Visit Us</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Find us at our cozy location in the heart of downtown
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Map placeholder */}
          <div className="h-96 w-full bg-gray-300">
            <div className="flex h-full w-full items-center justify-center bg-gray-200">
              <span className="text-gray-500">Google Maps Embed</span>
            </div>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold">Our Location</h3>
              <p className="mb-2 text-lg">123 Main St., Downtown, City</p>
              <p className="text-lg">Parking available on-street and in the adjacent garage</p>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-4 text-2xl font-bold">Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 pb-2">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-4 text-2xl font-bold">Contact</h3>
              <p className="mb-2 text-lg">Phone: (555) 123-4567</p>
              <button 
                onClick={handleGetDirections}
                className="mt-4 rounded-full bg-[#C41C00] px-6 py-3 text-white transition hover:bg-[#A81A00]"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}