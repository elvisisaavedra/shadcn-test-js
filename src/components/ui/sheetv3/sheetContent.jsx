import * as React from 'react'
import { Portal, Overlay, Content, Close, Title } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { sheetVariants } from '.'

export const SheetContent = React.forwardRef(
  ({ side = 'right', className, children, title, ...props }, ref) => (
    <Portal>
      <Overlay className="fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        aria-describedby={null}
        {...props}
      >
        <Title className="text-lg font-semibold text-foreground">{title}</Title>
        <div className="px-2">{children}</div>
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </Portal>
  )
)
SheetContent.displayName = Content.displayName
