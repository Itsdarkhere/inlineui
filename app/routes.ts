import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  route("/", "routes/showcase.tsx", [
    index("routes/showcase._index.tsx"),
    route(":component", "routes/showcase.$component.tsx"),
  ]),
] satisfies RouteConfig;
