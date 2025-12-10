import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token')
  const { pathname } = req.nextUrl

  // ❌ یوزر لاگین نیست، ولی رفته صفحه اصلی
  if (!token && pathname === '/') {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // ✅ یوزر لاگینه، ولی رفته صفحات guest
  if (token && (pathname === '/login' || pathname === '/register')) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/login', '/register']
}