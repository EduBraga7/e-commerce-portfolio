"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCartStore } from "@/store/useCartStore";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Zod Schema for Validation
const checkoutSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  address: z.string().min(10, "Address is too short"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(5, "Zip code must be at least 5 characters"),
  cardNumber: z.string().min(16, "Card number must be 16 digits").max(16),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Use MM/YY format"),
  cvv: z.string().min(3, "CVV must be 3 digits").max(4),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Payment processed successfully!");
    setIsSuccess(true);
    clearCart();
  };

  const total = getTotal();

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <CheckCircle2 className="h-24 w-24 text-green-500 mb-6 mx-auto" />
        </motion.div>
        <h1 className="text-4xl font-extrabold mb-4">Order Confirmed!</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Thank you for your purchase. We have received your order and will begin processing it right away.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link href="/" className="text-primary hover:underline">
          Go back to store
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-8 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Store
      </Link>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Form Section */}
        <div className="lg:col-span-7 xl:col-span-8">
          <h1 className="text-3xl font-extrabold tracking-tight mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b pb-2">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    {...register("fullName")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    {...register("email")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b pb-2">Shipping Address</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Street Address</label>
                <input
                  {...register("address")}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="123 Main St"
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    {...register("city")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="New York"
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Zip Code</label>
                  <input
                    {...register("zipCode")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="10001"
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode.message}</p>}
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold border-b pb-2">Payment Details</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Card Number (Mock)</label>
                <input
                  {...register("cardNumber")}
                  maxLength={16}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="1234567890123456"
                />
                {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber.message}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry (MM/YY)</label>
                  <input
                    {...register("expiry")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="12/25"
                  />
                  {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <input
                    {...register("cvv")}
                    maxLength={4}
                    type="password"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="123"
                  />
                  {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv.message}</p>}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary py-4 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : `Pay $${total.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 overflow-hidden mr-4">
                    <span className="font-medium text-muted-foreground">{item.quantity}x</span>
                    <span className="truncate">{item.title}</span>
                  </div>
                  <span className="font-medium whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t mt-2">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
