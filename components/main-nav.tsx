'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/util';
import { Category } from '@/types';

interface MainNavProps {
  data: Category[];
}

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <div className="flex items-center mx-6 space-x-6 lg:space-x-8">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};
