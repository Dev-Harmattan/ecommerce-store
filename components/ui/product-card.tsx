'use client';

import { Product } from '@/types';
import Image from 'next/image';
import React from 'react';
import { Expand, ShoppingCart } from 'lucide-react';

import { IconButton } from '@/components/ui/icon-button';
import { Currency } from '@/components/ui/currency';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
    >
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-green-600" />}
              onClick={() => {}}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-green-600" />}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div className="">
        <p className="font-semibold text-lg">{data?.name}</p>
        <p className="text-lg text-gray-500">{data?.category.name}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-center">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};
