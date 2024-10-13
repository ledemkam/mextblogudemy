import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Eye,MessageCircle} from "lucide-react"
import { Post } from "@/lib/types";

type CardListProps = {
 items: Post[]
}


const CardList = ({items}:CardListProps) => {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <Image
                    alt={items[0].title}
                    src={items[0].image}
                    className="h-full w-full object-cover object-center"
                    width={100}
                    height={200}
                  />
        </div>
      </CardContent>
      <CardTitle className="px-6 font-thin">{items[0].title}</CardTitle>
      <CardFooter className="flex justify-between mt-7">
        <Badge>{items[0].category}</Badge>
        <div className="flex gap-2">
        <MessageCircle /> {items[0].nbComments}
        <Eye/> {items[0].nbViews}
        </div>
      </CardFooter>
    </Card>
  )
}
export default CardList