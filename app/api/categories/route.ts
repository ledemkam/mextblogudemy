import { db } from "@/lib/db";
import { NextResponse } from "next/server";



export const GET = async () => {
  try {
    const categories = await db.category.findMany()
    return NextResponse.json(categories,{status:200});
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message:"could not fetch category" }, { status: 500 })
  }
}