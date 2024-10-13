import { useState } from "react"
import CardList from "./CardList"
import { Post } from "@/lib/types"


const CategoriesList = () => {
  const[data,setData]=useState<Post[]>([])
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-4 mt-6">
       { data.map((item) =>(
          <CardList items={item} key={item.id} />
       ))}    
      </div>
    </section>
  )
}
export default CategoriesList