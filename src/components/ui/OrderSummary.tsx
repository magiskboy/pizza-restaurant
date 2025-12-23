"use client";

import { useOrder } from "@/context/OrderContext";

export default function OrderSummary() {
  const { orderItems, orderTotal } = useOrder();
  
  if (orderItems.length === 0) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white py-3 shadow-lg border-t border-gray-200 md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <div>
          <p className="font-bold">{orderItems.length} item(s) in order</p>
          <p className="text-sm text-gray-600">Total: ${orderTotal.toFixed(2)}</p>
        </div>
        <button className="rounded-full bg-[#C41C00] px-6 py-2 font-bold text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}