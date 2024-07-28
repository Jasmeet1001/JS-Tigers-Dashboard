import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getHeader(path: string) {
  path = path.replace(/^\/+|\/+$/g, '');

  return path.charAt(0).toUpperCase() + path.slice(1);
}
