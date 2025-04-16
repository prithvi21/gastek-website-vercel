"use client"

import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"

// Generate a CSRF token
export function generateCsrfToken(): string {
  return uuidv4()
}

// Store the token in sessionStorage
export function storeCsrfToken(token: string): void {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("csrfToken", token)
  }
}

// Retrieve the token from sessionStorage
export function retrieveCsrfToken(): string | null {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("csrfToken")
  }
  return null
}

// Validate the token
export function validateCsrfToken(token: string): boolean {
  const storedToken = retrieveCsrfToken()
  return storedToken === token
}

// React hook for CSRF token
export function useCsrfToken(): string {
  const [token, setToken] = useState<string>("")

  useEffect(() => {
    // Check if we already have a token
    let csrfToken = retrieveCsrfToken()

    // If not, generate a new one
    if (!csrfToken) {
      csrfToken = generateCsrfToken()
      storeCsrfToken(csrfToken)
    }

    setToken(csrfToken)
  }, [])

  return token
}
