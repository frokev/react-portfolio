declare module "*.scss" {
  import { NavLink } from "./global.d";
  const content: any;
  export default content;
}
declare module "*.jpg";

declare module "react-scrolllock";

// Avoid type errors for defect type definitions of NavLink in @types/react-router-dom
declare module "react-router-dom/NavLink" {
  const NavLink: any;
  export default NavLink;
}
