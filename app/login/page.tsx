import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Mail ,Github} from 'lucide-react';

export default function LoginPage() {
  return (
    <PageContainer>
      <section className="bg-orange-500 rounded-md flex justify-center py-16 max-h-screen mt-4">
        <div className="grid w-full max-w-lg items-center gap-1.5 bg-slate-400 p-4 rounded-md font-semibold"> 
          <h1 className="text-3xl text-center pb-4">Login or Register</h1>
          <Button type="submit" className="font-bold">Sign in with Google <Mail className="m-2"/> </Button>
          <Button type="submit" className="font-bold">Sign in with Github <Github className="m-2"/></Button>
        </div>
      
     </section>
    </PageContainer>
  )
}