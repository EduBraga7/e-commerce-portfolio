"use client";

import { ShoppingCart, Minus, Plus } from "lucide-react";
import { Product, useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import { useState } from "react";

export function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const items = useCartStore((state) => state.items);
  
  const [localQuantity, setLocalQuantity] = useState(1);

  const handleAddToCart = () => {
    // We add the item N times, or if it already exists, Zustand just increments by 1 in our current logic
    // Wait, our addItem only increments by 1. Let's fix our logic:
    // If we use addItem, it adds 1. If we want to add `localQuantity`, we need to call addItem multiple times, or we can just update our store.
    // Since we don't want to change the store right now, let's just loop for simplicity, or ideally update the store to accept quantity.
    // For simplicity without modifying the store:
    for (let i = 0; i < localQuantity; i++) {
      addItem(product);
    }
    toast.success(`${localQuantity}x ${product.title} added to cart!`);
    setLocalQuantity(1); // reset after adding
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
      <div className="flex items-center justify-between border rounded-lg h-14 bg-background w-full sm:w-1/3">
        <button
          onClick={() => setLocalQuantity(Math.max(1, localQuantity - 1))}
          className="h-full px-4 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-l-lg"
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-12 text-center text-lg font-medium">
          {localQuantity}
        </span>
        <button
          onClick={() => setLocalQuantity(localQuantity + 1)}
          className="h-full px-4 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors rounded-r-lg"
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="flex flex-1 w-full items-center justify-center gap-3 rounded-lg bg-primary h-14 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </button>
    </div>
  );
}
