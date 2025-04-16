"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { validateCsrfToken } from "@/lib/csrf"
import { createLogger } from "@/lib/logger"

// Initialize logger
const logger = createLogger("career-form")

// Form validation schema with stricter validation and input limits
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .refine((val) => /^[a-zA-Z0-9\s\-'.]+$/.test(val), {
      message: "Name contains invalid characters",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .max(100, { message: "Email must be less than 100 characters" })
    .refine((val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val), {
      message: "Invalid email format",
    }),
  phone: z
    .string()
    .min(5, { message: "Phone number must be at least 5 characters" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .refine((val) => /^[0-9+\-\s()]+$/.test(val), {
      message: "Phone number contains invalid characters",
    }),
  position: z
    .string()
    .min(2, { message: "Position must be at least 2 characters" })
    .max(100, { message: "Position must be less than 100 characters" }),
  message: z
    .string()
    .min(10, { message: "Cover letter must be at least 10 characters" })
    .max(2000, { message: "Cover letter must be less than 2000 characters" }),
  csrfToken: z.string(),
  cvFile: z.any().optional(),
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

export async function submitCareerForm(formData: FormData) {
  try {
    // Validate CSRF token first
    if (!validateCsrfToken(formData.csrfToken)) {
      logger.warn("CSRF token validation failed", {
        action: "submitCareerForm",
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
        action: "submitCareerForm",
        error: "Email configuration missing",
      })
      return {
        success: false,
        message: "Email service is not configured. Please contact us directly at the phone number listed.",
      }
    }

    // Sanitize all inputs for email content
    const sanitizedName = sanitizeForEmail(validatedData.name)
    const sanitizedEmail = sanitizeForEmail(validatedData.email)
    const sanitizedPhone = sanitizeForEmail(validatedData.phone)
    const sanitizedPosition = sanitizeForEmail(validatedData.position)
    const sanitizedMessage = sanitizeForEmail(validatedData.message)

    // Create a transporter with security options
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Add security options
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
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
        name: "Gastek Careers Form",
        address: process.env.EMAIL_USER,
      },
      to: "osmproject21@gmail.com",
      subject: `Career Application: ${sanitizedPosition} - ${sanitizedName}`,
      text: `
New career application details:

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}
Position: ${sanitizedPosition}
Cover Letter:
${sanitizedMessage}

Submitted On: ${submissionDate}
      `,
    }

    // Email to candidate (thank you) - with sanitized content
    const candidateMailOptions = {
      from: {
        name: "Gastek Engineering Careers",
        address: process.env.EMAIL_USER,
      },
      to: sanitizedEmail,
      subject: "Thank you for your application to Gastek Engineering",
      text: `
Dear ${sanitizedName},

Thank you for submitting your application to Gastek Engineering. We have received your information and will review your qualifications for the ${sanitizedPosition} position.

If your qualifications match our requirements, our HR team will contact you for the next steps in the selection process.

Best regards,
The Gastek Engineering HR Team
      `,
    }

    // Send emails with proper error handling
    try {
      await transporter.sendMail(adminMailOptions)
      await transporter.sendMail(candidateMailOptions)

      logger.info("Career form submitted successfully", {
        action: "submitCareerForm",
        position: sanitizedPosition,
        recipient: sanitizedEmail.substring(0, 3) + "***", // Log only partial email for privacy
      })
    } catch (emailError) {
      logger.error("Error sending email", {
        action: "submitCareerForm",
        errorType: emailError instanceof Error ? emailError.name : "Unknown",
        errorMessage: emailError instanceof Error ? emailError.message : String(emailError),
        // Don't log user data
      })

      return {
        success: false,
        message: "Failed to send email. Please try again later or contact us directly.",
      }
    }

    return { success: true, message: "Your application has been submitted successfully!" }
  } catch (error) {
    if (error instanceof z.ZodError) {
      logger.warn("Form validation failed", {
        action: "submitCareerForm",
        validationErrors: error.errors.map((e) => ({ path: e.path.join("."), message: e.message })),
      })

      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: error.errors,
      }
    }

    logger.error("Unexpected error in career form submission", {
      action: "submitCareerForm",
      errorType: error instanceof Error ? error.name : "Unknown",
      errorMessage: error instanceof Error ? error.message : String(error),
    })

    return { success: false, message: "Failed to submit application. Please try again later." }
  }
}
