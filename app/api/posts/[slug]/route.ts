import { db } from "@/lib/db";
//import { Post } from "@/lib/types";
import { NextResponse } from "next/server";

// const POST : Post ={
//   "id": 1,
//   "category": "React",
//   "title": "React State Management: Choosing the Right Solution",
//   "image": "/react-state-management.jpg",
//   "caption": "Explore different state management solutions in React and choose the one that fits your needs.",
//   "date": "2023-01-15",
//   "minutesToRead": 10,
//   "author": "John ReactDev",
//   "nbViews": 25,
//   "nbComments": 8,
//   "slug": "react-state-management-choosing-right-solution",
//   "content": "In this article,  for y React and be able to choose the right solution for your project."
// }

export const GET = async (req: Request, {params}:{params:  {slug:string}}) => {
  try {
    const {slug} = params;
    
    const post = await db.post.update({
      where: { slug },
      data: { view: { increment: 1 } },
    }); 
    return NextResponse.json(post,{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message:"could not fetch post" }, { status: 500 })
  }
}