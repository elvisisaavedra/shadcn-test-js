import { cn } from '@/lib/utils'

export const SheetHeader = ({ className, ...props }) => (
  <div
    className={cn(
      'flex flex-col space-y-2 text-center sm:text-left',
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'
