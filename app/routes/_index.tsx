import { redirect } from "react-router";
import type { Route } from "./+types/_index";

export function loader({}: Route.LoaderArgs) {
  return redirect("/showcase/button");
}

export default function Index() {
  // This component should never render due to the redirect in the loader
  return null;
}
