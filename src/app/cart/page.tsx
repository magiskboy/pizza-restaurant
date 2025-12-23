"use client";

import Link from "next/link";
import { useOrder } from "@/context/OrderContext";

export default function CartPage() {
  const { orderItems, removeFromOrder, updateQuantity, orderTotal } = useOrder();
  
  const handleUpdateQuantity = (id: number, change: number) => {
    const item = orderItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change);
    }
  };
  
  if (orderItems.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4 md:py-24 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">Your Cart</h1>
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
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Your Order</h1>
        
        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-gray-100 py-4">
              <div>
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-[#C41C00]">{item.price}</p>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => handleUpdateQuantity(item.id, -1)}
                  className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="mx-3">{item.quantity}</span>
                <button 
                  onClick={() => handleUpdateQuantity(item.id, 1)}
                  className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button 
                  onClick={() => removeFromOrder(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="mt-6 flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${orderTotal.toFixed(2)}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 md:flex-row">
          <Link 
            href="/" 
            className="flex-1 rounded-full border-2 border-[#C41C00] px-8 py-4 text-center font-bold text-[#C41C00] transition hover:bg-[#C41C00] hover:text-white"
          >
            Continue Shopping
          </Link>
          <Link 
            href="/checkout" 
            className="flex-1 rounded-full bg-[#C41C00] px-8 py-4 text-center font-bold text-white transition hover:bg-[#A81A00]"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}