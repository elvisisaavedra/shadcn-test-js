import { cn } from '@/lib/utils'
import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'

export const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName
