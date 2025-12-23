"use client";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] py-12 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Pizza Restaurant</h3>
            <p className="mb-4 text-gray-300">
              Authentic wood-fired pizza made with fresh, local ingredients.
            </p>
            <p className="text-gray-300">123 Main St., Downtown, City</p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Mon-Thu: 11am-10pm</li>
              <li>Fri-Sat: 11am-11pm</li>
              <li>Sun: 12pm-9pm</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@pizzarestaurant.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pizza Restaurant. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}