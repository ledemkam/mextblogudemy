import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Eye,MessageCircle} from "lucide-react"

import Link from "next/link";
import { Post } from "@prisma/client";

type CardListProps = {
 post: Post
}


const CardList = ({post}:CardListProps) => {
  return (
    <Card className="flex flex-col justify-between rounded-lg border-2">
      <CardHeader>
         <div className="aspect-square relative">
                    <Image
                      alt={post.title}
                      src={"/img/sql.jpg"}
                      className="h-full w-full object-cover object-center aspect-square transition-all duration-300 hover:scale-110"
                      fill
                    />
         </div>
             
        </CardHeader>
      
      <CardTitle className="px-6 font-thin text-lg">
        <Link href={`/posts/${post.title}`}>
        {post.title}
        </Link>
      </CardTitle>
      <CardFooter className="flex justify-between mt-7">
        <Badge variant="outline">
            category
            </Badge>
        <div className="flex gap-2">
        <MessageCircle /> {post.nbComments}
        <Eye/> {post.view}
        </div>
      </CardFooter>
    </Card>
  )
}
export default CardList