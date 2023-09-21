import React from 'react';

import { Billboard } from '@/components/billboard';
import { Container } from '@/components/ui/container';
import { getBillboard } from '@/actions/get-billboard';
import { getProducts } from '@/actions/getProducts';
import { ProductList } from '@/components/product-list';

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('1bccf90b-2c9f-496a-a10d-a657b98d1c88');
  console.log(billboard);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Feature Products" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
