import { z } from "zod";
import { procedure, router } from "../init";

export default router({
  greeting: procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .query(({ input }) => {
      return `Hello ${input.name}`;
    }),
});
