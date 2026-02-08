import { createRequestHandler } from "@react-router/cloudflare";
// @ts-expect-error Server build
import * as build from "../build/server/index.js";

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
      cf: Request["cf"];
    };
  }
}

const requestHandler = createRequestHandler({
  build,
  mode: "production",
  getLoadContext: ({ context }) => context,
});

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    return requestHandler({
      request,
      env,
      waitUntil: ctx.waitUntil.bind(ctx),
      passThroughOnException: ctx.passThroughOnException.bind(ctx),
    });
  },
} satisfies ExportedHandler<Env>;
