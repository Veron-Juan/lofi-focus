import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("nextjs-con-de-tuti", "Buenas-buenas-mi-gente");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  

  if (request.nextUrl.pathname.startsWith("/information")) {
    const user = {
      
      authenticated: process.env.NEXTAUTH_SECRET,
    };
    if (user.authenticated !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/information/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};












// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getToken } from 'next-auth/jwt';
 
// export async function middleware(req: NextRequest) {
  
//   const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
 
//   if (!session) {

    

//     const requestedPage = req.nextUrl.pathname;
//     const url = req.nextUrl.clone();
//     url.pathname = `/login`;
//     // url.search = `p=${requestedPage}`;
//     return NextResponse.rewrite(url);
//   }
 
//   return NextResponse.next();
// }


// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ['/community']
// };