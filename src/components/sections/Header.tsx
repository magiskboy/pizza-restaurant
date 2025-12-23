"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "@/components/ui/Modal";
import OrderSummary from "@/components/ui/OrderSummary";
import { useOrder } from "@/context/OrderContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const { orderItems } = useOrder();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Menu", href: "#menu" },
    { name: "Order", href: "#order" },
    { name: "Reservations", href: "#reservations" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];
  
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    alert('Reservation request submitted!');
    setIsReservationModalOpen(false);
  };
  
  const handleOrderOnline = () => {
    // Scroll to menu or open order page
    const element = document.getElementById('full-menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-[#C41C00]">
              Pizza Restaurant
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="font-medium text-[#2D2D2D] transition hover:text-[#C41C00]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* CTA Buttons - Desktop */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <button 
                className="rounded-full border-2 border-[#C41C00] px-6 py-2 font-bold text-[#C41C00] transition hover:bg-[#C41C00] hover:text-white"
                onClick={() => setIsReservationModalOpen(true)}
              >
                Reserve a Table
              </button>
              <button 
                className="rounded-full bg-[#C41C00] px-6 py-2 font-bold text-white transition hover:bg-[#A81A00]"
                onClick={handleOrderOnline}
              >
                Order Online
              </button>
              {orderItems.length > 0 && (
                <Link 
                  href="/cart" 
                  className="flex items-center rounded-full bg-[#8C9A58] px-3 py-2 text-white hover:bg-[#758245]"
                >
                  <span className="mr-2">{orderItems.length}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </Link>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="space-y-1">
                <span className="block h-0.5 w-6 bg-[#2D2D2D]"></span>
                <span className="block h-0.5 w-6 bg-[#2D2D2D]"></span>
                <span className="block h-0.5 w-6 bg-[#2D2D2D]"></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <nav className="border-t border-gray-200 py-4">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="block py-2 font-medium text-[#2D2D2D] transition hover:text-[#C41C00]"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                  <li className="pt-4">
                    <button 
                      className="w-full rounded-full border-2 border-[#C41C00] px-6 py-2 font-bold text-[#C41C00] transition hover:bg-[#C41C00] hover:text-white"
                      onClick={() => setIsReservationModalOpen(true)}
                    >
                      Reserve a Table
                    </button>
                  </li>
                  <li className="pt-2">
                    <button 
                      className="w-full rounded-full bg-[#C41C00] px-6 py-2 font-bold text-white transition hover:bg-[#A81A00]"
                      onClick={handleOrderOnline}
                    >
                      Order Online
                    </button>
                  </li>
                  {orderItems.length > 0 && (
                    <li className="pt-2">
                      <Link 
                        href="/cart" 
                        className="flex items-center justify-center rounded-full bg-[#8C9A58] px-4 py-2 text-white hover:bg-[#758245]"
                      >
                        <span className="mr-2">{orderItems.length} items in order</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      {/* Sticky Order Bar */}
      {isScrolled && orderItems.length === 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#C41C00] py-3 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
            <div className="text-white">
              <p className="font-bold">Hot & Ready in 15 min →</p>
            </div>
            <button 
              className="rounded-full bg-white px-6 py-2 font-bold text-[#C41C00]"
              onClick={handleOrderOnline}
            >
              Order Now
            </button>
          </div>
        </div>
      )}
      
      {/* Order Summary */}
      <OrderSummary />
      
      {/* Reservation Modal */}
      <Modal 
        isOpen={isReservationModalOpen} 
        onClose={() => setIsReservationModalOpen(false)}
        title="Reserve a Table"
      >
        <form onSubmit={handleReservationSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
              placeholder="Your name"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="mb-1 block font-medium">Email</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="mb-1 block font-medium">Phone</label>
            <input
              type="tel"
              id="phone"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
              placeholder="(123) 456-7890"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="date" className="mb-1 block font-medium">Date</label>
              <input
                type="date"
                id="date"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="mb-1 block font-medium">Time</label>
              <input
                type="time"
                id="time"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="guests" className="mb-1 block font-medium">Number of Guests</label>
            <select
              id="guests"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
              required
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
              <option value="7+">7+ People</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="special-requests" className="mb-1 block font-medium">Special Requests</label>
            <textarea
              id="special-requests"
              rows={3}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
              placeholder="Any special requests or dietary restrictions"
            ></textarea>
          </div>
          
          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-full bg-[#C41C00] px-6 py-3 font-bold text-white transition hover:bg-[#A81A00]"
            >
              Reserve Table
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}