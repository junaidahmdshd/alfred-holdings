import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const paragraphVariants = cva('leading-7', {
  variants: {
    size: {
      default: 'text-base',
      sm: 'text-sm leading-6',
      lg: 'text-lg leading-8',
    },
    weight: {
      default: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
    },
    variant: {
      default: 'text-alfred-primary',
      muted: 'text-alfred-secondary',
      disabled: 'text-alfred-disabled',
      light: 'text-alfred-light',
      white: 'text-white',
    },
    letterSpacing: {
      default: 'tracking-normal',
      tight: 'tracking-tight',
      tighter: 'tracking-tighter',
    }
  },
  defaultVariants: {
    size: 'default',
    weight: 'default',
    variant: 'default',
    letterSpacing: 'default',
  },
})

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export function Paragraph({
  children,
  className,
  size,
  weight,
  variant,
  letterSpacing,
  ...props
}: ParagraphProps) {
  return (
    <p
      className={cn(paragraphVariants({ size, weight, variant, letterSpacing, className }))}
      {...props}
    >
      {children}
    </p>
  )
} 