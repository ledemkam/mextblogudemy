import {getServerSession, NextAuthOptions} from "next-auth";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/db";

export const authOptions: NextAuthOptions = {

    // Configure one or more authentication providers
    debug: true,
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks:{
        session: async({session,user}) => {
        if(session.user){
            session.user.id = user.id
        }
        return session
    }}
}


export const getAuthSession = () => getServerSession(authOptions)