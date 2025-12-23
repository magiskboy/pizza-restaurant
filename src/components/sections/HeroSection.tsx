// Updated HeroSection to use a real hero image from Unsplash
"use client";

import Image from "next/image";

export default function HeroSection() {
  const handleReserveTable = () => {
    // We'll implement this with context or state management later
    alert('Reservation modal would open here');
  };
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image using next/image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
          alt="Delicious pizza background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-8">
        {/* Heading and subheading background */}
        <div className="px-4 py-6 rounded-md md:px-8 md:py-8">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
          Taste Italy in Every Slice.
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl lg:text-2xl">
          Hand-tossed dough, premium toppings, and a crackling wood-fired oven—delivered to your door or served in our cozy dining room.
        </p>
        </div>
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