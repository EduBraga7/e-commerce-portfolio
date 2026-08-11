"use client";

import Link from "next/link";
import { ShoppingCart, LayoutTemplate } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/useCartStore";
import { CartDrawer } from "./CartDrawer";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Subscribe to items array to trigger re-renders
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <LayoutTemplate className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">TechStore</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium hover:bg-muted/80 transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>{mounted ? itemCount : 0}</span>
            </button>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
