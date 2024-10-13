import { Categories } from "@/lib/contants"
import { ICategories } from "@/lib/types"
import { Button } from "../ui/button"

const CategoriesSection = () => {
  return (
    <section className="md:flex md:justify-around  md:p-10 hidden">
      {Categories.map((category: ICategories) => (
        <div key={category.id}>
          <Button variant="ghost" className="rounded-md border">{category.name}</Button>
        </div>
      ))}
    </section>
  )
}
export default CategoriesSection