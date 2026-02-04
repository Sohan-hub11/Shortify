import { createRootRoute } from "@tanstack/react-router"
import { homePageRoute } from "./homepage.route.js"
import { authRoute } from "./auth.route.js"
import { dasboardRoute } from "./dashboard.route.js"
import RootLayout from "../RootLayout.jsx"

export const rootRoute = createRootRoute({
  component: RootLayout
})

export const routeTree = rootRoute.addChildren([
  homePageRoute,
  authRoute,
  dasboardRoute
])