import { Category } from '@/types';

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${url}/${id}`, { cache: 'no-cache' });
  return response.json();
};
