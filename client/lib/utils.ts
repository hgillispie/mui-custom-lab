import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Enhanced cn function that ensures Figtree font is applied to components
export function cnWithFont(...inputs: ClassValue[]) {
  return twMerge(clsx("font-sans", inputs));
}
