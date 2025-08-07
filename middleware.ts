import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';

export default clerkMiddleware((auth, req: NextRequest) => {
  // List your public routes here
  const publicRoutes = ['/', '/about', '/api/public'];

  // Check if the request path is public
  if (publicRoutes.includes(req.nextUrl.pathname)) {
    return; // ✅ Allow through without auth
  }

  // Else, Clerk will enforce authentication automatically
});

export const config = {
  matcher: [
    // Protect pages (skip static files and Next.js internals)
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
  ],
};
