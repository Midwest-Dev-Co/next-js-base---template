import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// * Capitalize the first letter of every word in a string
export default function capitalize(str: string): string {
  return str
    .split('-')
    .join(' ')
    .split('_')
    .join(' ')
    .toLowerCase()
    .replace(/\b(\w)/g, (match) => match.toUpperCase());
}

// * Get the base URL for the current environment
function getBaseUrl() {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  } else {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
}

// Export the base URL
export const baseUrl = getBaseUrl();
