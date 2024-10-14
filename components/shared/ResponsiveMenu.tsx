"use client"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

import { useGetAllCategories } from "@/lib/query"

const ResponsiveMenu = () => {
  const {data:categories}= useGetAllCategories()
  return (
    <Sheet>
    <SheetTrigger >
      <Menu className="h-6 w-6 md:hidden" />
    </SheetTrigger>
      <SheetContent side="left">
         <div className="flex flex-col gap-4">
           <Link href="/whrite">
            <Button variant="ghost">ein Post Schreiben</Button>
           </Link>

           <p>Categories</p>
           {categories?.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`} className="block px-2 py-2 text-lg">
                <Button variant="ghost">{category.slug}</Button>
              </Link>
           ))}
         </div>
      </SheetContent>
  </Sheet>
  )
}
export default ResponsiveMenu