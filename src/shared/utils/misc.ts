import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

export const randomUUID = () => uuidv4();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
