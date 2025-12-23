"use client";

import Image from "next/image";
import { useOrder } from "@/context/OrderContext";

const featuredItems = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic simplicity – fresh mozzarella, sweet basil, and our signature San Marzano sauce.",
    price: "$14.99",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Spicy, smoky pepperoni on a crisp, caramelized crust – a crowd-pleaser every time.",
    price: "$16.99",
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Four artisan cheeses melt together for a velty, indulgent bite.",
    price: "$18.99",
  },
  {
    id: 4,
    name: "Veggie Delight",
    description: "A garden of roasted vegetables, garlic-infused olive oil, and herb-kissed mozzarella.",
    price: "$17.99",
  },
];

export default function MenuHighlightsSection() {
  const { addToOrder } = useOrder();
  
  const handleViewFullMenu = () => {
    // Scroll to the full menu section
    const element = document.getElementById('full-menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleAddToOrder = (item: typeof featuredItems[0]) => {
    addToOrder(item);
    alert(`${item.name} added to your order!`);
  };
  
  return (
    <section className="py-16 px-4 bg-white md:py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Pizzas</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Our most popular creations, crafted with passion and the finest ingredients
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition hover:shadow-xl">
              <div className="h-48 bg-gray-300">
                {/* Placeholder for pizza image */}
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Pizza Image</span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-lg font-bold text-[#C41C00]">{item.price}</span>
                </div>
                <p className="mb-4 text-gray-600">{item.description}</p>
                <button 
                  onClick={() => handleAddToOrder(item)}
                  className="w-full rounded-full border-2 border-[#C41C00] bg-transparent px-4 py-2 text-[#C41C00] transition hover:bg-[#C41C00] hover:text-white"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={handleViewFullMenu}
            className="rounded-full bg-[#C41C00] px-8 py-4 text-lg font-bold uppercase tracking-wider text-white transition hover:bg-[#A81A00]"
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}