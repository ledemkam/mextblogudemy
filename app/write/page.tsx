"use client"
import PageContainer from "@/components/layout/PageContainer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Pagewrite() {
 const {data:session} = useSession()

 const router = useRouter()
 
 
  if (!session) {
    router.push("/login");
  }




  return (
    <PageContainer>page on Write</PageContainer>
  )
}