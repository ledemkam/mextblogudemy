"use client"
import PageContainer from "@/components/layout/PageContainer";
import PostsList from "@/components/shared/PostsList";
import {useGetAllPosts } from "@/lib/query";

type ParamsProgs = {
  params : {
    slug: string;
  };
}


export default function Categoriespage({params}: ParamsProgs) {
  const { slug } = params;
  const {data:posts = []} = useGetAllPosts(slug)
  return (
    <PageContainer>
      <div className="py-4 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">{slug.replace("-","")}</h1>
        <PostsList items={posts}/>
      </div>
    </PageContainer>
  )
}