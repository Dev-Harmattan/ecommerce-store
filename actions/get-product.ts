import { Product } from "@/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProduct = async (id: string): Promise<Product> => {

  const response = await fetch(`${url}/${id}`, { cache: 'no-store' });

  return response.json();
};
