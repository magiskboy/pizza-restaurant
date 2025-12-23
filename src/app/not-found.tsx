"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen py-16 px-4 md:py-24 md:px-8 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        <h1 className="mb-6 text-5xl font-bold text-[#C41C00] md:text-6xl">404</h1>
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Page Not Found</h2>
        <p className="mb-8 text-xl">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link 
          href="/" 
          className="rounded-full bg-[#C41C00] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#A81A00]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}