import { Post } from "@/lib/types";
import { NextResponse } from "next/server";

const POST : Post ={
  "id": 1,
  "category": "React",
  "title": "React State Management: Choosing the Right Solution",
  "image": "/react-state-management.jpg",
  "caption": "Explore different state management solutions in React and choose the one that fits your needs.",
  "date": "2023-01-15",
  "minutesToRead": 10,
  "author": "John ReactDev",
  "nbViews": 25,
  "nbComments": 8,
  "slug": "react-state-management-choosing-right-solution"
}

export const GET = async (req: Request, {params}:{params:  {id:string}}) => {
  const {id} = params;
  return NextResponse.json(POST,{status:200});
}