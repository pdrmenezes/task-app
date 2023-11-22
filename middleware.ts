import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req) {
    // if the user is authenticated and is on a public route, we'll redirect them to the select org page
    if (auth.userId && auth.isPublicRoute) {
      let path = "/select-org";

      // if the user is authenticated and already has an organization created, rediredct to the organization's page
      if (auth.orgId) {
        path = `/organization/${auth.orgId}`;
      }

      // create the url to redirect the user based on the previous conditions
      const orgSelectionUrl = new URL(path, req.url);
      return NextResponse.redirect(orgSelectionUrl);
    }
    // if the user is not authenticated and is not on a public route, redirect to the login page with the callback url to where they came from
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // if the user is logged in but has not seleced an organization AND is not on the select organization page, redirect them to the select-org page
    if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
      const orgSelectionUrl = new URL("/select-org", req.url);
      return NextResponse.redirect(orgSelectionUrl);
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
