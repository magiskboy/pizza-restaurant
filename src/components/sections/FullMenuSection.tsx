"use client";

import { useState } from "react";
import { useOrder } from "@/context/OrderContext";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: "Pizza",
    items: [
      { id: 1, name: "Margherita", description: "Fresh mozzarella, basil, and our signature sauce", price: "$14.99" },
      { id: 2, name: "Pepperoni", description: "Spicy pepperoni with mozzarella cheese", price: "$16.99" },
      { id: 3, name: "Quattro Formaggi", description: "Four artisan cheeses blend perfectly", price: "$18.99" },
      { id: 4, name: "Veggie Delight", description: "Roasted vegetables with herb-kissed mozzarella", price: "$17.99" },
      { id: 5, name: "Meat Lovers", description: "Pepperoni, sausage, ham, and bacon", price: "$19.99" },
    ],
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      { id: 6, name: "Spaghetti Carbonara", description: "Pancetta, eggs, and parmesan cheese", price: "$15.99" },
      { id: 7, name: "Fettuccine Alfredo", description: "Creamy parmesan sauce with butter", price: "$14.99" },
      { id: 8, name: "Penne Arrabbiata", description: "Spicy tomato sauce with garlic", price: "$13.99" },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      { id: 9, name: "Caesar Salad", description: "Romaine lettuce, croutons, and parmesan", price: "$10.99" },
      { id: 10, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: "$12.99" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { id: 11, name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: "$7.99" },
      { id: 12, name: "Panna Cotta", description: "Vanilla cream with berry compote", price: "$6.99" },
    ],
  },
];

export default function FullMenuSection() {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const { addToOrder } = useOrder();
  
  const activeCategoryData = menuCategories.find(category => category.id === activeCategory);
  
  const handleAddToOrder = (item: MenuItem) => {
    addToOrder(item);
    alert(`${item.name} added to your order!`);
  };
  
  return (
    <section id="full-menu" className="py-16 px-4 md:py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Full Menu</h2>
          <p className="mx-auto max-w-2xl text-lg">
            Explore all our delicious offerings, from wood-fired pizzas to fresh pastas
          </p>
        </div>
        
        <div className="mb-8 flex flex-wrap justify-center gap-4 border-b border-gray-200">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 font-medium capitalize ${activeCategory === category.id ? 'text-[#C41C00] border-b-2 border-[#C41C00]' : 'hover:text-[#C41C00]'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="space-y-6">
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold">{activeCategoryData?.name}</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {activeCategoryData?.items.map((item) => (
                <div key={item.id} className="flex justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-[#C41C00]">{item.price}</span>
                    <button 
                      onClick={() => handleAddToOrder(item)}
                      className="rounded-full border border-[#C41C00] px-4 py-1 text-[#C41C00] hover:bg-[#C41C00] hover:text-white"
                    >
                      Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}