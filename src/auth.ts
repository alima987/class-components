import { AuthOptions, getServerSession } from "next-auth"
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";

const authOptions: AuthOptions = {
    session: {
      strategy: "jwt",
    },
    pages: {
        signIn: '/login',
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
             const responce = await sql `
             SELECT * FROM users WHERE email=${credentials?.email}`

             const user = responce.rows[0]
             if (!user) throw new Error("User not found");
             const passwordCorrect = await compare(
                credentials?.password || '',
                user.password
            )
            if (!passwordCorrect) throw new Error("Invalid password");
            if (passwordCorrect) {
                return {
                    id: user.id,
                    email: user.email
                }
            }
            
             return null
            }
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET_ID as string,
          }),
    ],
}
const getSession = () => getServerSession(authOptions)
export { authOptions, getSession }

