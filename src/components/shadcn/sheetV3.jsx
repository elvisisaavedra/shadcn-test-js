import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheetv3'
import { Button } from '@/components/ui/button'

export default function SheetV3() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open v3</Button>
      </SheetTrigger>
      <SheetContent side={'left'} title={<span>Título</span>}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="username" className="text-right">
              Username
            </label>
            <input id="username" className="col-span-3" />
          </div>
        </div>
        <SheetClose asChild>
          <Button variant={'secondary'}>Close</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  )
}
