import * as React from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content can be wider than contained */
  fluid?: boolean
  /** Adds padding to the top and bottom */
  py?: boolean
}

/**
 * Container component for consistent layout wrapping
 */
export function Container({
  children,
  className,
  fluid = false,
  py = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        fluid ? 'max-w-full' : 'mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8',
        py && 'py-12 sm:py-16',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
