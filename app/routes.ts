import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  layout("routes/showcase.tsx", [
    route("showcase/:component", "routes/showcase.$component.tsx"),
  ]),
] satisfies RouteConfig;
