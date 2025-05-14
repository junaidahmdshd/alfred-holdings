'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { cn } from '@/lib/utils'

export interface ImageProps extends Omit<NextImageProps, 'alt'> {
  className?: string
  alt: string
  imgClassName?: string
}

export function Image({ className, alt, imgClassName, ...props }: ImageProps) {
  return (
    <div className={cn('relative', className)}>
      <NextImage alt={alt} className={cn('object-cover', imgClassName)} quality={90} {...props} />
    </div>
  )
}

// Use this component for consistent image rendering with better defaults
export function AlfredImage({ src, alt, width, height, className, ...props }: ImageProps) {
  return (
    <Image src={src} alt={alt} width={width} height={height} className={className} {...props} />
  )
}
