"use client"
import PageContainer from "@/components/layout/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useGetOnePost } from "@/lib/query";
import { Eye, MessageCircle } from "lucide-react";



export default function SinglePost({params}: {params: {slug: string}}) {
  const {slug} = params;
  const {data:post,isPending:postLoading} = useGetOnePost(slug)
  if(postLoading) return <div>Loading...</div>

  return (
    <PageContainer>
      <section style={{backgroundImage: "url(/img/sql.jpg)"}} className="rounded-lg aspect-square md:aspect-[2.4/1] text-center py-16 max-h-screen mt-4">
          <h1 className="font-bold text-xl text-center  bg-slate-400">
            {post?.title}
          </h1>
      </section>
      <section className="flex justify-between py-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"  />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>           
              <div>
                <h4>muster</h4>
                {post?.createdAt && <p>{new Date(post.createdAt).toLocaleDateString()}</p>}
              </div>
           </div>
            <div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                 <MessageCircle />
                  <p>
                  {post?.nbComments}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                    <Eye/>
                  <p>
                   {post?.view}
                  </p>
                </div>

              </div>
            </div>
      </section>
      <Separator/>
      <section className="p-6"
         dangerouslySetInnerHTML={{__html: post?.content as string}}
      />
        
    </PageContainer>
  )
}