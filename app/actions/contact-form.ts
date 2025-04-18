"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { validateCsrfToken } from "@/lib/csrf"
import { createLogger } from "@/lib/logger"

// Initialize logger
const logger = createLogger("contact-form")

// Form validation schema with stricter validation and input limits
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .refine((val) => /^[a-zA-Z0-9\s\-'.]+$/.test(val), {
      message: "Name contains invalid characters",
    }),
  company: z
    .string()
    .min(1, { message: "Company is required" })
    .max(100, { message: "Company must be less than 100 characters" })
    .refine((val) => /^[a-zA-Z0-9\s\-'.&()]+$/.test(val), {
      message: "Company contains invalid characters",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must be less than 100 characters" })
    .refine((val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val), {
      message: "Invalid email format",
    }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
  csrfToken: z.string(),
})

type FormData = z.infer<typeof formSchema>

// Helper function to sanitize text for email content
function sanitizeForEmail(text: string): string {
  return text
    .replace(/\r/g, "")
    .replace(/\n/g, " ")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim()
}

export async function submitContactForm(formData: FormData) {
  try {
    // Validate CSRF token first
    if (!validateCsrfToken(formData.csrfToken)) {
      logger.warn("CSRF token validation failed", {
        action: "submitContactForm",
        error: "Invalid CSRF token",
      })
      return {
        success: false,
        message: "Security validation failed. Please refresh the page and try again.",
      }
    }

    // Validate form data with strict schema
    const validatedData = formSchema.parse(formData)

    // Check if environment variables are available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      logger.error("Missing email environment variables", {
        action: "submitContactForm",
        error: "Email configuration missing",
      })
      return {
        success: false,
        message: "Email service is not configured. Please contact us directly at the phone number listed.",
      }
    }

    // Sanitize all inputs for email content
    const sanitizedName = sanitizeForEmail(validatedData.name)
    const sanitizedCompany = sanitizeForEmail(validatedData.company)
    const sanitizedEmail = sanitizeForEmail(validatedData.email)
    const sanitizedMessage = sanitizeForEmail(validatedData.message)

    // Create a transporter with enhanced security options
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Enhanced security options
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2", // Enforce minimum TLS version
      },
      // DKIM signing removed - can be added later when you have the keys
    })

    // Format current date and time
    const submissionDate = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })

    // Email to admin - with sanitized content
    const adminMailOptions = {
      from: {
        name: "Gastek Website Form",
        address: process.env.EMAIL_USER,
      },
      to: "osmproject21@gmail.com",
      subject: `Form Submission: ${sanitizedName} - ${sanitizedCompany}`,
      text: `
New form submission details:

Name: ${sanitizedName}
Company: ${sanitizedCompany}
Email: ${sanitizedEmail}
Requirements:
${sanitizedMessage}

Submitted On: ${submissionDate}
      `,
    }

    // Email to user (thank you) - with sanitized content
    const userMailOptions = {
      from: {
        name: "Gastek Engineering",
        address: process.env.EMAIL_USER,
      },
      to: sanitizedEmail,
      subject: "Thank you for contacting Gastek Engineering",
      text: `
Dear ${sanitizedName},

Thank you for submitting your inquiry to Gastek Engineering. We have received your message and will get back to you as soon as possible.

Here's a copy of the information you provided:
- Name: ${sanitizedName}
- Company: ${sanitizedCompany}
- Email: ${sanitizedEmail}
- Requirements: ${sanitizedMessage}

If you have any additional questions or information to provide, please feel free to reply to this email.

Best regards,
The Gastek Engineering HR Team
      `,
    }

    // Send emails with proper error handling
    try {
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(userMailOptions)

      logger.info("Contact form submitted successfully", {
        action: "submitContactForm",
        recipient: sanitizedEmail.substring(0, 3) + "***", // Log only partial email for privacy
      })
    } catch (emailError) {
      logger.error("Error sending email", {
        action: "submitContactForm",
        errorType: emailError instanceof Error ? emailError.name : "Unknown",
        errorMessage: emailError instanceof Error ? emailError.message : String(emailError),
        // Don't log user data
      })

      return {
        success: false,
        message: "Failed to send email. Please try again later or contact us directly.",
      }
    }

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn("Form validation failed", {
        action: "submitContactForm",
        validationErrors: error.errors.map((e) => ({ path: e.path.join("."), message: e.message })),
      })

      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: error.errors,
      }
    }

    logger.error("Unexpected error in contact form submission", {
      action: "submitContactForm",
      errorType: error instanceof Error ? error.name : "Unknown",
      errorMessage: error instanceof Error ? error.message : String(error),
    })

    return { success: false, message: "Failed to send message. Please try again later." }
  }
}
