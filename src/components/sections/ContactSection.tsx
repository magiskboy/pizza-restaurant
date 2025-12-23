"use client";

import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Best pizza you'll find outside Italy – the crust is perfection!",
    author: "Emily R., TripAdvisor",
  },
  {
    id: 2,
    text: "Family friendly, fast delivery, and the garlic knots are addictive.",
    author: "Mark T., Google",
  },
  {
    id: 3,
    text: "The wood-fired oven gives the pizzas an authentic taste that's hard to find elsewhere.",
    author: "Sarah K., Yelp",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-16 px-4 md:py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get in Touch</h2>
            <p className="mb-8 text-lg">
              Got a question? Let's chat.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-2 block font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="mb-2 block font-medium">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="rounded-full bg-[#C41C00] px-8 py-4 text-lg font-bold uppercase tracking-wider text-white transition hover:bg-[#A81A00]"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Testimonials and Social */}
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
            
            <div className="mb-12 space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-md">
                  <p className="mb-4 text-gray-700 italic">"{testimonial.text}"</p>
                  <p className="font-bold">— {testimonial.author}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="mb-4 text-2xl font-bold">Follow Us</h3>
              <p className="mb-6 text-lg">
                Follow us for daily specials & behind-the-scenes pizza love.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8C9A58] text-white transition hover:bg-[#758245]">
                  <span className="text-xl">f</span>
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8C9A58] text-white transition hover:bg-[#758245]">
                  <span className="text-xl">i</span>
                </a>
                <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8C9A58] text-white transition hover:bg-[#758245]">
                  <span className="text-xl">t</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}