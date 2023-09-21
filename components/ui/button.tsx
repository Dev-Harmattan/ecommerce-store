import { cn } from '@/lib/util';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, type = 'button' }, ref) => {
    return (
      <button
        className={cn(
          'w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition',
          className
        )}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
