import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";
import { OrderProvider } from "@/context/OrderContext";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pizza Restaurant | Authentic Wood-Fired Pizza",
  description: "Hand-tossed dough, premium toppings, and a crackling wood-fired oven - delivered to your door or served in our cozy dining room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${openSans.variable} antialiased`}
      >
        <OrderProvider>
          {children}
        </OrderProvider>
      </body>
    </html>
  );
}
