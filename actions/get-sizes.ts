import { Size } from '@/types';

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(url, { cache: 'no-store' });

  return response.json();
};
