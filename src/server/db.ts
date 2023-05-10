import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: import.meta.env.MODE === "development" ? ["query", "error", "warn"] : ["error"],
    })

if (import.meta.env.MODE !== "production") globalForPrisma.prisma = prisma
