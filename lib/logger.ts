// Simple logger utility with privacy protection

type LogLevel = "info" | "warn" | "error" | "debug"

interface LogEntry {
  timestamp: string
  level: LogLevel
  module: string
  message: string
  details?: Record<string, any>
}

export function createLogger(module: string) {
  return {
    info(message: string, details?: Record<string, any>) {
      logMessage("info", module, message, details)
    },
    warn(message: string, details?: Record<string, any>) {
      logMessage("warn", module, message, details)
    },
    error(message: string, details?: Record<string, any>) {
      logMessage("error", module, message, details)
    },
    debug(message: string, details?: Record<string, any>) {
      if (process.env.NODE_ENV !== "production") {
        logMessage("debug", module, message, details)
      }
    },
  }
}

function logMessage(level: LogLevel, module: string, message: string, details?: Record<string, any>) {
  const entry: LogEntry = {
    timestamp: new Date().toISOString(),
    level,
    module,
    message,
    details: sanitizeLogDetails(details),
  }

  // In production, you would send this to a logging service
  // For now, just console log with appropriate level
  switch (level) {
    case "info":
      console.info(formatLogEntry(entry))
      break
    case "warn":
      console.warn(formatLogEntry(entry))
      break
    case "error":
      console.error(formatLogEntry(entry))
      break
    case "debug":
      console.debug(formatLogEntry(entry))
      break
  }
}

// Format log entry for console output
function formatLogEntry(entry: LogEntry): string {
  return `[${entry.timestamp}] [${entry.level.toUpperCase()}] [${entry.module}] ${entry.message} ${
    entry.details ? JSON.stringify(entry.details) : ""
  }`
}

// Remove sensitive data from log details
function sanitizeLogDetails(details?: Record<string, any>): Record<string, any> | undefined {
  if (!details) return undefined

  const sanitized = { ...details }

  // List of keys that might contain sensitive data
  const sensitiveKeys = [
    "password",
    "token",
    "secret",
    "key",
    "auth",
    "credential",
    "credit",
    "card",
    "ssn",
    "social",
    "passport",
    "license",
    "address",
    "phone",
    "email",
    "dob",
    "birth",
    "name",
    "user",
    "username",
    "account",
  ]

  // Recursively sanitize objects
  function sanitizeObject(obj: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {}

    for (const [key, value] of Object.entries(obj)) {
      // Check if this key might contain sensitive data
      const isSensitive = sensitiveKeys.some((k) => key.toLowerCase().includes(k))

      if (isSensitive && typeof value === "string") {
        // Redact sensitive string values
        result[key] = value.length > 0 ? "[REDACTED]" : value
      } else if (typeof value === "object" && value !== null) {
        // Recursively sanitize nested objects
        result[key] = Array.isArray(value)
          ? value.map((item) => (typeof item === "object" && item !== null ? sanitizeObject(item) : item))
          : sanitizeObject(value)
      } else {
        // Keep non-sensitive values as is
        result[key] = value
      }
    }

    return result
  }

  return sanitizeObject(sanitized)
}
