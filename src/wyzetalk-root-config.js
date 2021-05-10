import { registerApplication, start } from "single-spa";
import { showWhenAnyOf } from "./utils/helpers";
registerApplication(
  "react",
  () => import("wyzetalk-assessment-frontend"),
  showWhenAnyOf(["/home"])
);

start({
  urlRerouteOnly: true,
});
