import { Color } from '@/types';

const url = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(url, { cache: 'no-store' });

  return response.json();
};
