"use client";
import { Button } from "../ui/button"
import Link from "next/link"
import { useGetAllCategories } from "@/lib/query";

const CategoriesSection = () => {
  const {data:categories}= useGetAllCategories()
  
  return (
    <section className="md:flex md:justify-around  md:p-10 hidden">
      {categories?.map((category) => (
        <div key={category.id}>
          <Button variant="ghost" className="rounded-md border">
            <Link  href={`/categories/${category.slug}`}>
            {category.title}
            </Link>
          </Button>
        </div>
      ))}
    </section>
  )
}
export default CategoriesSection