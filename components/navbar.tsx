import React from 'react';
import Link from 'next/link';

import { Container } from '@/components/ui/container';
import { MainNav } from '@/components/main-nav';
import { getCategories } from '@/actions/get-categories';
import { NavbarActions } from '@/components/navbar-actions';

export const revalidate = 0;

export const Navbar = async () => {
  const categories = await getCategories();
  return (
    <Container>
      <div className="border-b">
        <div className="flex items-center relative px-4 sm:px-6 lg:px-8 h-16">
          <Link className="flex gap-x-2 ml-4 lg:ml-0" href="/">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </div>
    </Container>
  );
};
