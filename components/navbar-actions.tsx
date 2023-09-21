'use client';

import React, { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const NavbarActions = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center ml-auto gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="text-sm color-white ml-2 font-medium">0</span>
      </Button>
    </div>
  );
};
