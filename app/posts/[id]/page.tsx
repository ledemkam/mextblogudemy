import PageContainer from "@/components/layout/PageContainer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Post } from "@/lib/types";
import { Eye, MessageCircle } from "lucide-react";

type ParamsProgs = {
  params : {
    id: string;
  },
  post ?: Post
}

export default function page({params,post}: ParamsProgs) {
  const { id } = params;
  return (
    <PageContainer>
      <section className="bg-orange-500 rounded-md text-center py-16 max-h-screen mt-4">
          <h1 className="font-bold text-xl text-center  bg-slate-400">
            {id.replace("%","")}
          </h1>
      </section>
      <section className="flex justify-between py-4 border-b-2">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={post?.image} alt={post?.title} />
              </Avatar>           
              <div>
                <h4>{post?.author}</h4>
                <p>Posted on </p>
              </div>
           </div>
            <div>
              <div className="flex gap-2">
                <MessageCircle /> {post?.nbComments}
                <Eye/> {post?.nbViews}
              </div>
            </div>
      </section>
      <section className="p-6 border-b-2">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque explicabo fugit corporis ea sed velit quos veniam consequatur ab.
           Eligendi sit, vel officia porro suscipit excepturi 
          assumenda recusandae culpa optio?
          Vitae nisi, odio hic voluptas esse eos. Iusto aliquid culpa iure quisquam ea quam saepe atque sed explicabo deserunt odio blanditiis, 
          totam dolores. Et non odio, eos distinctio blanditiis aut!
          Nisi aliquam vel blanditiis et nihil dolor, minus, impedit repellendus nulla praesentium assumenda sit, error consectetur obcaecati 
          doloremque. Modi animi eligendi consequatur a quas earum nesciunt similique facere id repellat!
          Ipsam deserunt delectus beatae, fugit, aperiam saepe corporis nemo blanditiis nobis laborum temporibus, amet esse fugiat libero
           nesciunt aut odit impedit eos? Natus a ullam eveniet, nesciunt reiciendis aliquid beatae.
          Necessitatibus quisquam quam cumque, alias quasi dolore culpa, natus reiciendis voluptates magni eveniet saepe, hic voluptatum
           quos doloremque quas temporibus nam est sint rem exercitationem libero ipsa? Quibusdam, officiis consequuntur!
          Dolorum sequi quae numquam recusandae? Quisquam ipsam sint nisi, vel fuga in nam, harum cumque maiores libero deleniti minus 
          corrupti illum expedita enim sequi beatae eius rerum voluptates temporibus similique!
          Cumque reiciendis sed quae iure dicta maxime magnam. Dicta rerum aspernatur molestiae adipisci veritatis incidunt doloremque
          , nisi beatae numquam reprehenderit, velit aliquam ratione enim fuga minima consectetur. Beatae, veniam aperiam.
          Nulla inventore accusamus sit dicta sequi ut nisi nostrum dolor deleniti pariatur dolores soluta hic quod possimus maxime neque 
          vero corporis iste, odit quia voluptatibus odio? Cumque aperiam facere modi!
          Ratione ipsa accusamus dolores cum commodi eligendi corrupti, dolorem officiis dignissimos doloremque, sequi distinctio omni
          s fuga eius quibusdam. Ipsa, obcaecati tempora sit enim earum voluptatibus praesentium temporibus amet ratione reiciendis?
          Aut autem ducimus et voluptatibus! Commodi provident ipsam iure sint harum quis! At rem, tempora ut veniam nesciunt accusantium
           laborum vitae? Officia exercitationem ratione enim amet aperiam temporibus, ea cupiditate.
        </p>
      </section> 
      <section className="p-6">
        <h4 className="font-semibold text-2xl">Comments</h4>
        <p>Login to write a comment</p>
      </section>  
    </PageContainer>
  )
}