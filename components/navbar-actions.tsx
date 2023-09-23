'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

export const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);
  const cart = useCart();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button
        onClick={() => router.push('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-sm color-white ml-2 font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
