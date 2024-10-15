import { db } from "@/lib/db";
import { NextResponse } from "next/server";
//import {getAuthSession} from "@/lib/AuthOptions"

export const GET = async (req: Request) => {
  try {
    //  const session = await getAuthSession()
    // if(!session || !session.user){
    //   return  NextResponse.json(
    //     {message: "Not Authenticated"},
    //     { status:403}
    //   )
    // }
       
    // /api/posts?cat="slug"
    const { searchParams } = new URL(req.url);
    const catSlug = searchParams.get("cat");

    const post = await db.post.findMany({
      where: {
        ...(catSlug && catSlug !== "null" && catSlug !== "" && { catSlug: {equals: catSlug}})
      },
      include: {  
        category: true
      },
   
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "could not fetch post" }, { status: 500 });
  }
};