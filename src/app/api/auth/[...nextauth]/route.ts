import NextAuth, { User } from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
      profile(profile: any, tokens: any): User {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    })
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("SignIn callback:", { account, profile });
      if (account?.provider === "google") {
        return (profile as any).email_verified
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  debug: true, // Adiciona logs detalhados
})

export { handler as GET, handler as POST }