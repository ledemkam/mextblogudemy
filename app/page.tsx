import PageContainer from "@/components/layout/PageContainer";
import CategoriesSection from "@/components/shared/CategoriesSection";
import HeroSection from "@/components/shared/HeroSection";
import PostsList from "@/components/shared/PostsList";
import { Posts } from "@/lib/posts";


export default function Home() {
  return (
    <PageContainer>
      <HeroSection/>
      <CategoriesSection/>
      <PostsList items={Posts}/>
    </PageContainer>
  )
}