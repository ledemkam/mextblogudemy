import { Categories } from "@/lib/contants"
import { NextResponse } from "next/server";


export const GET = async () => {
  return NextResponse.json(Categories,{status:200});
}