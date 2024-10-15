"use client"
import Link from "next/link"
import { Button } from "../ui/button"
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

const ButtonAuth = () => {
  const {data:session, status} = useSession();
  console.log(session)
  if(status === "loading") return <div>Loading...</div>
  if(!session) return (
    <div className="flex gap-2">
      <Link href="/login">
        <Button>Login</Button>
      </Link>
    </div>
  )

  const onLogout = ( ) => {
    signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>{session.user?.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
       <DropdownMenuItem onClick={onLogout}>
           logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default ButtonAuth