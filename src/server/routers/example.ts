import { privateProcedure, publicProcedure, router } from "../init"

export default router({
    public: publicProcedure.query(() => {
        return "Hello from server!"
    }),
    private: privateProcedure.query(({ ctx }) => {
        return `Hello ${ctx.user?.name}`
    }),
})
