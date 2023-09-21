import { Category } from '@/types';

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(url, { cache: 'no-store' });

  return response.json();
};
