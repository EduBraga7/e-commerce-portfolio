import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, ChevronRight, Truck, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Product } from "@/store/useCartStore";
import { AddToCartButton } from "./AddToCartButton";

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  
  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 overflow-x-auto whitespace-nowrap pb-2">
        <Link href="/" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
          <ArrowLeft className="h-4 w-4 mr-1" /> Store
        </Link>
        <ChevronRight className="h-4 w-4 flex-shrink-0" />
        <span className="capitalize">{product.category}</span>
        <ChevronRight className="h-4 w-4 flex-shrink-0" />
        <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-md">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Product Image Section */}
        <div className="group relative aspect-square lg:aspect-auto lg:h-[650px] rounded-3xl border bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-16 overflow-hidden shadow-sm flex items-center justify-center">
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              In Stock
            </span>
          </div>
          
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-12 transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
              {product.category}
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-foreground mb-4">
              {product.title}
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-4xl font-black">${product.price.toFixed(2)}</span>
            <div className="h-8 w-px bg-border hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-3 py-1.5 rounded-full text-sm font-bold">
              <Star className="h-4 w-4 fill-current" />
              <span>4.8</span>
              <span className="text-muted-foreground font-normal ml-1">(124 reviews)</span>
            </div>
          </div>

          <div className="prose prose-base dark:prose-invert mb-8 text-muted-foreground leading-relaxed">
            <p>{product.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 py-6 border-y">
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Free Shipping</p>
                <p className="text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="bg-primary/10 p-2 rounded-full text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">1 Year Warranty</p>
                <p className="text-muted-foreground">Guaranteed quality</p>
              </div>
            </div>
          </div>

          {/* Add to Cart Actions */}
          <div className="mt-auto sticky bottom-4 z-20 bg-background/95 backdrop-blur pt-4 pb-2 lg:relative lg:bottom-auto lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <AddToCartButton product={product} />
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3 w-3 text-green-500" />
              <span>14-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
