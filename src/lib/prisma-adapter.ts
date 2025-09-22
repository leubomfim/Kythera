import { Adapter } from "next-auth/adapters"
import { prisma } from "./prisma"

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user: any) {
      return await prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
        },
      })
    },

    async getUser(id) {
      return await prisma.user.findUnique({
        where: { id },
      })
    },

    async getUserByEmail(email) {
      return await prisma.user.findUnique({
        where: { email },
      })
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
        include: { user: true },
      })
      return account?.user ?? null
    },

    async updateUser(user) {
      return await prisma.user.update({
        where: { id: user.id },
        data: {
          name: user.name,
          email: user.email,
          emailVerified: user.emailVerified,
          image: user.image,
        },
      })
    },

    async deleteUser(userId) {
      return await prisma.user.delete({
        where: { id: userId },
      })
    },

    async linkAccount(account: any) {
      return await prisma.account.create({
        data: {
          userId: account.userId,
          type: account.type,
          provider: account.provider,
          providerAccountId: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async unlinkAccount({ providerAccountId, provider }: any) {
      await prisma.account.delete({
        where: {
          provider_providerAccountId: {
            provider,
            providerAccountId,
          },
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      return await prisma.session.create({
        data: {
          sessionToken,
          userId,
          expires,
        },
      })
    },

    async getSessionAndUser(sessionToken) {
      const userAndSession = await prisma.session.findUnique({
        where: { sessionToken },
        include: { user: true },
      })
      if (!userAndSession) return null
      const { user, ...session } = userAndSession
      return { user, session }
    },

    async updateSession({ sessionToken, ...session }) {
      return await prisma.session.update({
        where: { sessionToken },
        data: session,
      })
    },

    async deleteSession(sessionToken) {
      return await prisma.session.delete({
        where: { sessionToken },
      })
    },

    async createVerificationToken({ identifier, expires, token }) {
      return await prisma.verificationToken.create({
        data: {
          identifier,
          token,
          expires,
        },
      })
    },

    async useVerificationToken({ identifier, token }) {
      try {
        return await prisma.verificationToken.delete({
          where: {
            identifier_token: {
              identifier,
              token,
            },
          },
        })
      } catch (error) {
        if ((error as any)?.code === "P2025") return null
        throw error
      }
    },
  }
}