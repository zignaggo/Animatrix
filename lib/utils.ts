import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSearchParams<T extends Object>(url: string, params: T) {
  let baseUrl = url + '?';
  for (const key in params) {
      const value = params[key]
      if (value !== undefined && value !== '') {
          baseUrl += `${key}=${value}&`
      }
  }
  return baseUrl.slice(0, -1)
}