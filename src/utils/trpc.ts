import { createTRPCProxyClient, httpBatchLink } from "@trpc/client"
import type { IAppRouter } from "../server"

export const trpc = createTRPCProxyClient<IAppRouter>({
    links: [
        httpBatchLink({
            url: "/api/trpc",
        }),
    ],
})
