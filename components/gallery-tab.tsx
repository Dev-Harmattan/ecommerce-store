import { Image as ImageType } from '@/types';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/util';
import Image from 'next/image';

interface GalleryTabProps {
  image: ImageType;
}

export const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0">
            <Image
              fill
              src={image?.url}
              alt=""
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};
