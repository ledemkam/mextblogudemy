"use client"
import PageContainer from "@/components/layout/PageContainer";
import CategoriesSection from "@/components/shared/CategoriesSection";
import HeroSection from "@/components/shared/HeroSection";
import PostsList from "@/components/shared/PostsList";
import { useGetAllPosts } from "@/lib/query";


export default function Home() {
  const {data:posts = [],isPending:postLoading} = useGetAllPosts()

  if(postLoading) return <p>all post-loading...</p>

  return (
    <PageContainer>
      <HeroSection/>
      <CategoriesSection/>
      {posts &&   
      <PostsList items={posts}/>
      }
    </PageContainer>
  )
}