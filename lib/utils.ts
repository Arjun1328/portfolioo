import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return '';
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path;
  }
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
}
