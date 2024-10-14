import PageContainer from "@/components/layout/PageContainer";
import PostsList from "@/components/shared/PostsList";
import { useGetAllPosts } from "@/lib/query";

type ParamsProgs = {
  params : {
    id: string;
  };
}


export default function Categoriespage({params}: ParamsProgs) {
  const {data:posts = []} = useGetAllPosts()
  const { id } = params;
  return (
    <PageContainer>
      <div className="py-4 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">{id.replace("-","")}</h1>
        <PostsList items={posts}/>
      </div>
    </PageContainer>
  )
}