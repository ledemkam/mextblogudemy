import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const post = await db.post.findMany()
    return NextResponse.json(post,{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message:"could not fetch post" }, { status: 500 })
  }
}