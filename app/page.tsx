import PageContainer from "@/components/layout/PageContainer";
import CategoriesList from "@/components/shared/CategoriesList";
import CategoriesSection from "@/components/shared/CategoriesSection";
import HeroSection from "@/components/shared/HeroSection";


export default function Home() {
  return (
    <PageContainer>
      <HeroSection/>
      <CategoriesSection/>
      <CategoriesList/>
    </PageContainer>
  )
}