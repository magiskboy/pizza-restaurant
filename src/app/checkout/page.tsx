"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useOrder } from "@/context/OrderContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { orderItems, orderTotal, clearOrder } = useOrder();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    console.log('Checkout submitted:', { ...formData, orderItems, orderTotal });
    clearOrder();
    router.push('/checkout/success');
  };
  
  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4 md:py-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Checkout</h1>
          <p className="mb-8 text-xl">Your cart is empty</p>
          <Link 
            href="/" 
            className="rounded-full bg-[#C41C00] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#A81A00]"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-16 px-4 md:py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Checkout</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Order Summary */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
            
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b border-gray-100 py-3">
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            
            <div className="mt-4 flex justify-between border-t border-gray-300 pt-4 text-xl font-bold">
              <span>Total:</span>
              <span>${orderTotal.toFixed(2)}</span>
            </div>
          </div>
          
          {/* Checkout Form */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-bold">Delivery Information</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="mb-1 block font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="mb-1 block font-medium">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="mb-1 block font-medium">Address</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="mb-1 block font-medium">City</label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="mb-1 block font-medium">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#C41C00] focus:outline-none focus:ring-1 focus:ring-[#C41C00]"
                    required
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C41C00] px-6 py-3 font-bold text-white transition hover:bg-[#A81A00]"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}