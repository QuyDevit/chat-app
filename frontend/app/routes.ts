import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("search", "routes/search.tsx"),
  route("profile", "routes/profile.tsx"),
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),
  route("chat", "routes/chat.tsx")
] satisfies RouteConfig;
