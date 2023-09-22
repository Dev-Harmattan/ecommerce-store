'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { Color, Size } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/util';

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

export const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchPrams = useSearchParams();
  const router = useRouter();

  const selectValue = searchPrams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchPrams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
