"use client";

import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen py-16 px-4 md:py-24 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">Order Placed Successfully!</h1>
        <p className="mb-8 text-xl">
          Thank you for your order. We've received your payment and will prepare your delicious pizza shortly.
        </p>
        
        <div className="mb-12 rounded-lg bg-white p-6 shadow-md text-left max-w-2xl mx-auto">
          <h2 className="mb-4 text-2xl font-bold">Order Details</h2>
          <p className="mb-2"><span className="font-bold">Order Number:</span> #12345</p>
          <p className="mb-2"><span className="font-bold">Estimated Delivery:</span> 20-30 minutes</p>
          <p className="mb-4"><span className="font-bold">Delivery Address:</span> 123 Main St, Downtown, City</p>
          <p className="text-gray-600">A confirmation email has been sent to your email address.</p>
        </div>
        
        <div className="flex flex-col gap-4 md:flex-row justify-center">
          <Link 
            href="/" 
            className="rounded-full bg-[#C41C00] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#A81A00]"
          >
            Back to Home
          </Link>
          <Link 
            href="/menu" 
            className="rounded-full border-2 border-[#C41C00] px-8 py-4 text-lg font-bold text-[#C41C00] transition hover:bg-[#C41C00] hover:text-white"
          >
            Order Again
          </Link>
        </div>
      </div>
    </div>
  );
}