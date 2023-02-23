import { appRouter } from "@/server";
import type { HTTPHeaders } from "@trpc/client";
import { resolveHTTPResponse } from "@trpc/server/http";
import type { APIContext } from "astro";

async function httpHandler({ request, params }: APIContext): Promise<Response> {
  const query = new URL(request.url).searchParams;

  const requestBody = request.method === "GET" ? {} : await request.json();

  const { status, headers, ...response } = await resolveHTTPResponse({
    createContext: async () => {
      return {};
    },
    router: appRouter,
    path: params.trpc as string,
    req: {
      query,
      method: request.method,
      headers: request.headers as unknown as HTTPHeaders,
      body: requestBody,
    },
  });

  return new Response(response.body, {
    headers: headers as HeadersInit,
    status,
  });
}

export const post = httpHandler;

export const get = httpHandler;
