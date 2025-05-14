import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-button text-button font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alfred-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-alfred-primary text-alfred-light hover:bg-alfred-secondary',
        secondary: 'border-2 border-alfred-border text-alfred-primary hover:bg-alfred-background',
        ghost: 'hover:bg-alfred-background hover:text-alfred-primary',
        link: 'text-alfred-primary underline-offset-4 hover:underline',
        destructive: 'bg-red-500 text-white hover:bg-red-600',
      },
      size: {
        default: 'h-12 px-7 py-3',
        sm: 'h-9 px-5 py-2 text-sm',
        lg: 'h-14 px-8 py-4',
        icon: 'h-10 w-10',
      },
      withIcon: {
        true: 'gap-2',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      withIcon: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, withIcon, children, ...props }, ref) => {
    withIcon = !!(leftIcon || rightIcon)

    return (
      <button
        className={cn(buttonVariants({ variant, size, withIcon, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
