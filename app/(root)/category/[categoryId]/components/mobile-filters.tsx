'use client';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/ui/icon-button';
import { Color, Size } from '@/types';
import { Dialog } from '@headlessui/react';
import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import { Filter } from './filter';

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}

export const MobileFilters: React.FC<MobileFilterProps> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        onClick={onOpen}
        onClose={onClose}
        as="div"
        className="relative z-20 lg:hidden"
      >
        {/* background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        {/* Dialog position */}
        <div className="flex inset-0 z-40 fixed">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-white overflow-y-auto pb-6 shadow-xl">
            {/* close button */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} />
            </div>

            {/* Render the filter */}
            <div className="p-4">
              <Filter valueKey="sizeId" data={sizes} name="Sizes" />
              <Filter valueKey="colorId" data={colors} name="Colors" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};
