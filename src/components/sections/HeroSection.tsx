"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleReserveTable = () => {
    // We'll implement this with context or state management later
    alert('Reservation modal would open here');
  };
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-gray-300">
        {/* Placeholder for hero image */}
        <div className="flex h-full w-full items-center justify-center bg-gray-200">
          <span className="text-gray-500">Pizza Hero Image</span>
        </div>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-8">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          Taste Italy in Every Slice.
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl">
          Hand-tossed dough, premium toppings, and a crackling wood-fired oven—delivered to your door or served in our cozy dining room.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-[#C41C00] px-8 py-4 text-lg font-bold uppercase tracking-wider transition hover:bg-[#A81A00] md:px-10 md:py-5 md:text-xl">
            Order Online
          </button>
          <button 
            onClick={handleReserveTable}
            className="rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-bold uppercase tracking-wider text-white transition hover:bg-white hover:text-[#2D2D2D] md:px-10 md:py-5 md:text-xl"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </section>
  );
}