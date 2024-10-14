import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, {params}:{params:  {slug:string}}) => {
  try {
    const {slug} = params;
    
    const post = await db.category.findUnique({
      where: { slug },
    }); 
    return NextResponse.json(post,{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message:"could not fetch post" }, { status: 500 })
  }
}