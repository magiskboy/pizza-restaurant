"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

interface OrderContextType {
  orderItems: OrderItem[];
  addToOrder: (item: Omit<OrderItem, 'quantity'>) => void;
  removeFromOrder: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearOrder: () => void;
  orderTotal: number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  
  const addToOrder = (item: Omit<OrderItem, 'quantity'>) => {
    setOrderItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  
  const removeFromOrder = (id: number) => {
    setOrderItems(prev => prev.filter(item => item.id !== id));
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromOrder(id);
      return;
    }
    
    setOrderItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  
  const clearOrder = () => {
    setOrderItems([]);
  };
  
  const orderTotal = orderItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);
  
  return (
    <OrderContext.Provider value={{
      orderItems,
      addToOrder,
      removeFromOrder,
      updateQuantity,
      clearOrder,
      orderTotal
    }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}