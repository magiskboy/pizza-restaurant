"use client";

import Image from "next/image";
import { useOrder } from "@/context/OrderContext";

const featuredItems = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic simplicity – fresh mozzarella, sweet basil, and our signature San Marzano sauce.",
    price: "$14.99",
    // Unsplash image for Margherita pizza
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Spicy, smoky pepperoni on a crisp, caramelized crust – a crowd-pleaser every time.",
    price: "$16.99",
    // Unsplash image for Pepperoni pizza
    image: "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  },
  {
    id: 3,
    name: "Quattro Formaggi",
    description: "Four artisan cheeses melt together for a velty, indulgent bite.",
    price: "$18.99",
    // Unsplash image for Four cheese pizza
    image: "https://images.unsplash.com/photo-1595378833483-c995dbe4d74f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
  },
  {
    id: 4,
    name: "Veggie Delight",
    description: "A garden of roasted vegetables, garlic-infused olive oil, and herb-kissed mozzarella.",
    price: "$17.99",
    // Unsplash image for Veggie pizza
    image: "https://images.unsplash.com/photo-1730929851365-015a0b62ae5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
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
              {/* Pizza image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  priority
                />
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