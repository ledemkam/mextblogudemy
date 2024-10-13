import { Post } from "@/lib/types"
import CardList from "./CardList"


type PostListProps = {
  items: Post[]
}



const PostsList = ({items}: PostListProps) => {

  
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:grid md:grid-cols-4 md:gap-4 mt-6">
      {items.map((post: Post) => (
        <CardList key={post.id} post={post}/>
      ))}
      </div>
    </section>
  )
}
export default PostsList