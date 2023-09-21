import { cn } from '@/lib/util';
import React, { MouseEventHandler } from 'react';

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn(
        'rounded-full flex items-center justify-center bg-white shadow-md p-2 hover:scale-110 transition',
        className
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};
