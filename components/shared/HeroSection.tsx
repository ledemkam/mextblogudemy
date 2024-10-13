import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const HeroSection = () => {
  return (
    <section className="bg-orange-500 rounded-md flex justify-center py-16 max-h-screen mt-4">
      <div className="grid w-full max-w-lg items-center gap-1.5 bg-slate-400 p-4 rounded-md">
        <Label htmlFor="email" className="font-bold text-xl text-center">Become A Better<br/> React Developper</Label>
        <Input type="email" id="email" placeholder="Email" />
        <Button type="submit" className="font-bold">Subscribe to our Newletter</Button>
      </div>
      
    </section>
  )
}
export default HeroSection