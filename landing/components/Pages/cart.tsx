"use client";

import Image from "next/image";
import { useState } from "react";
import { Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Coupon ni Enan",
    description: "100% discount coupon for your first purchase.",
    price: 45,
    image: "/images/product1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Coupon ni Klent",
    description: "FREE",
    price: 10,
    image: "/images/product2.jpg",
    quantity: 2,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <p className="text-orange-500 font-semibold mt-1">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition duration-200"
                >
                  -
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition duration-200"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
                title="Remove item"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          <button
            onClick={() => window.location.href = "/shop"}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gray-100 dark:bg-gray-700 px-6 py-3 font-medium text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Continue Shopping
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold text-lg text-gray-800 dark:text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => alert("Proceeding to checkout...")}
            className="mt-6 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-orange-500 px-6 py-3 font-medium text-white hover:opacity-90 transition-transform duration-200 hover:scale-105"
          >
            Proceed to Checkout
            <Image
              width={20}
              height={20}
              src="/images/icon/icon-arrow-dark.svg"
              alt="Arrow"
              className="dark:hidden"
            />
            <Image
              width={20}
              height={20}
              src="/images/icon/icon-arrow-dark.svg"
              alt="Arrow"
              className="hidden dark:block"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
