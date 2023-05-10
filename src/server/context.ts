import type { Session } from "@auth/core/types"
import type { inferAsyncReturnType } from "@trpc/server"
import type { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { getSession } from "auth-astro/server"
import { prisma } from "./db"

interface CreateInnerContextOptions extends Partial<FetchCreateContextFnOptions> {
    session: Session | null
}

export async function createContextInner(opts?: CreateInnerContextOptions) {
    return {
        prisma,
        session: opts?.session,
    }
}

export async function createContext(opts: FetchCreateContextFnOptions) {
    const session = await getSession(opts.req)

    const contextInner = await createContextInner({ session })

    return {
        ...contextInner,
    }
}

export type Context = inferAsyncReturnType<typeof createContextInner>
