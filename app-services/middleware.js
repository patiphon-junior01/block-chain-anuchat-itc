'use server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// import 'dotenv/config'
var baseUrl = process.env.BASEURL || '';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {

  const ck = cookies().get("LoginToken")
  console.log('start middleware')
  if (!ck) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ck.value}`
    },
  };

  const res = await fetch(`${baseUrl}/api/wallet/validate`, requestOptions)
  if (res.status != 200) {
    // request.cookies.delete("LoginToken");
    return NextResponse.redirect(new URL('/login', request.url))
  }

  NextResponse.next();
}

export const config = {
  matcher: '/dashboard/:path*',
}