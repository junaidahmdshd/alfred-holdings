import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const headingVariants = cva('font-semibold tracking-tight', {
  variants: {
    level: {
      h1: 'text-4xl lg:text-5xl leading-tight',
      h2: 'text-3xl lg:text-4xl leading-tight',
      h3: 'text-2xl lg:text-3xl leading-tight',
      h4: 'text-xl lg:text-2xl leading-tight',
      h5: 'text-lg lg:text-xl leading-snug',
      h6: 'text-base lg:text-lg leading-snug',
    },
    variant: {
      default: 'text-alfred-primary',
      muted: 'text-alfred-secondary',
      disabled: 'text-alfred-disabled',
      light: 'text-alfred-light',
      white: 'text-white',
    },
    letterSpacing: {
      default: 'tracking-tight',
      tight: 'tracking-tighter',
      normal: 'tracking-normal',
    },
  },
  defaultVariants: {
    level: 'h2',
    variant: 'default',
    letterSpacing: 'default',
  },
})

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof headingVariants>, 'level'> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Heading({
  children,
  className,
  level,
  variant,
  letterSpacing,
  as,
  ...props
}: HeadingProps) {
  const Component = as || level || 'h2'

  return (
    <Component
      className={cn(
        headingVariants({ level: level || as || 'h2', variant, letterSpacing, className })
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
