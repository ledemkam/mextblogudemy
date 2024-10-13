import { Categories } from "@/lib/contants"
import { ICategories } from "@/lib/types"
import Link from "next/link"
import PageContainer from "./PageContainer"
import { Button } from "../ui/button"

const Footer = () => {
  return (
    <footer className="border-t p-4">
      <PageContainer>
      <div className="flex flex-col justify-between  items-start md:flex-row md:items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
            DevBlog
        </h1>
        <div className="flex flex-col gap-2 md:flex-row">
          {Categories.map((category : ICategories) =>(
              <div key={category.id}>
                <Link href={`/category/${category.id}`}>
                <Button variant="ghost">
                {category.name}
                </Button>
                </Link>
              </div>
            ))}
        <Button variant="ghost">
          <Link href="/write">Write a post</Link>
        </Button>
        </div>
      </div>
    </PageContainer>
    </footer>
  )
}
export default Footer