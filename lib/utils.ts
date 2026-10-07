import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message?: string): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919606135280";
  const text = message 
    ? encodeURIComponent(message) 
    : encodeURIComponent("Hi PL Creations, I would like to inquire about your web development, sales, and technology services.");
  return `https://wa.me/${phone}?text=${text}`;
}

export function buildCallUrl(): string {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919606135280";
  return `tel:+${phone}`;
}
