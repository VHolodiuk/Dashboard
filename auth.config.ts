import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (nextUrl.origin != 'http://localhost:3000') {
          return Response.redirect('https://vholodiukdashboard.vercel.app/dashboard');
        }
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (nextUrl.origin != 'http://localhost:3000') {
          return Response.redirect('https://vholodiukdashboard.vercel.app/dashboard');
        } else {
          return Response.redirect(new URL('/dashboard', nextUrl));          
        }
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;