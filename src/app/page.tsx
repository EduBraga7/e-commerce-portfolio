import { ProductGrid } from "@/components/ProductGrid";
import { Product } from "@/store/useCartStore";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Welcome to TechStore
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover the latest gadgets and accessories with unbeatable prices and premium quality.
        </p>
      </div>

      <ProductGrid initialProducts={products} />
    </div>
  );
}
