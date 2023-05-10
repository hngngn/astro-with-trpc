import { TRPCError, initTRPC } from "@trpc/server"
import type { Context } from "./context"

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure

const checkAuth = t.middleware(async (opts) => {
    if (opts.ctx.session === null || opts.ctx.session === undefined) throw new TRPCError({ code: "UNAUTHORIZED" })

    const data = await opts.ctx.prisma.user.findUnique({
        where: {
            email: opts.ctx.session.user?.email!,
        },
    })

    return opts.next({
        ctx: {
            user: data,
        },
    })
})

export const privateProcedure = publicProcedure.use(checkAuth)
