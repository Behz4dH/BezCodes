import { type ClassValue, clsx } from "clsx";

// Simple class merge utility (no tailwind-merge needed for our use case)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
