import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const cookies = request.cookies
    const token = cookies.get("token")?.value;
    const path = request.nextUrl.pathname
    
    if( path.includes('/auth/products') && (!cookies.has("token") || token !== process.env.ADMIN_TOKEN)) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}
 
export const config = {
  matcher: '/auth/:path*',
}