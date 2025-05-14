'use client';

import { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';

const linkVariants = cva('transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-alfred-primary', {
  variants: {
    variant: {
      default: 'text-alfred-primary hover:text-alfred-secondary',
      muted: 'text-alfred-secondary hover:text-alfred-primary',
      white: 'text-white hover:text-gray-200',
      light: 'text-alfred-light hover:text-white',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
    },
    underline: {
      default: 'no-underline',
      hover: 'no-underline hover:underline hover:underline-offset-4',
      always: 'underline underline-offset-4',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    underline: 'default',
  },
});

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'as' | 'passHref' | 'children'>,
    VariantProps<typeof linkVariants> {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ 
    className, 
    variant, 
    size, 
    underline, 
    children, 
    href,
    external,
    prefetch,
    ...props 
  }, ref) => {
    // Handle external links
    if (external || typeof href === 'string' && (href.startsWith('http') || href.startsWith('mailto:'))) {
      return (
        <a
          ref={ref}
          href={href.toString()}
          className={cn(linkVariants({ variant, size, underline }), className)}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        ref={ref}
        href={href}
        prefetch={prefetch}
        className={cn(linkVariants({ variant, size, underline }), className)}
        {...props}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link'; 