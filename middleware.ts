import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Simple in-memory store for rate limiting
// In production, use Redis or similar for distributed systems
const ipRequests = new Map<string, { count: number; timestamp: number }>()

export function middleware(request: NextRequest) {
  const ip = request.ip || "unknown"
  const now = Date.now()
  const windowMs = 60 * 1000 // 1 minute window
  const maxRequests = 5 // max requests per window

  // Only apply to form submission endpoints
  if (request.nextUrl.pathname.includes("/api/") || request.nextUrl.pathname.includes("/actions/")) {
    const record = ipRequests.get(ip)

    if (!record) {
      ipRequests.set(ip, { count: 1, timestamp: now })
    } else {
      // Reset if outside window
      if (now - record.timestamp > windowMs) {
        ipRequests.set(ip, { count: 1, timestamp: now })
      } else if (record.count >= maxRequests) {
        return new NextResponse(
          JSON.stringify({ success: false, message: "Too many requests, please try again later" }),
          { status: 429, headers: { "Content-Type": "application/json" } },
        )
      } else {
        record.count++
        ipRequests.set(ip, record)
      }
    }

    // Clean up old entries every 100 requests to prevent memory leaks
    if (Math.random() < 0.01) {
      const cutoff = now - windowMs
      for (const [key, value] of ipRequests.entries()) {
        if (value.timestamp < cutoff) {
          ipRequests.delete(key)
        }
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*", "/actions/:path*"],
}
