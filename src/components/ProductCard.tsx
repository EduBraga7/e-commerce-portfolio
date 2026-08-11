"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useCartStore, Product } from "@/store/useCartStore";
import { motion } from "framer-motion";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
    >
      <Link href={`/product/${product.id}`} className="block h-64 overflow-hidden bg-white p-6 relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          {product.category}
        </div>
        <Link href={`/product/${product.id}`}>
          <h3 className="line-clamp-2 text-lg font-semibold hover:underline">
            {product.title}
          </h3>
        </Link>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Add to cart"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
