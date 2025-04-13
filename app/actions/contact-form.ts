"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(1, { message: "Company is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(formData: FormData) {
  try {
    // Validate form data
    const validatedData = formSchema.parse(formData)

    // Check if environment variables are available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn("Email environment variables are not set. Email functionality will not work.")
      return {
        success: false,
        message: "Email service is not configured. Please contact us directly at the phone number listed.",
      }
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
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

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "osmproject21@gmail.com",
      subject: `Form Submission: ${validatedData.name} - ${validatedData.company}`,
      text: `
New form submission details:

Name: ${validatedData.name}
Company: ${validatedData.company}
Email: ${validatedData.email}
Requirements:
${validatedData.message}

Submitted On: ${submissionDate}
      `,
    }

    // Email to user (thank you)
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: validatedData.email,
      subject: "Thank you for contacting Gastek Engineering",
      text: `
Dear ${validatedData.name},

Thank you for submitting your inquiry to Gastek Engineering. We have received your message and will get back to you as soon as possible.

Here's a copy of the information you provided:
- Name: ${validatedData.name}
- Company: ${validatedData.company}
- Email: ${validatedData.email}
- Requirements: ${validatedData.message}

If you have any additional questions or information to provide, please feel free to reply to this email.

Best regards,
The Gastek Engineering Team
      `,
    }

    // Send emails
    await transporter.sendMail(adminMailOptions)
    await transporter.sendMail(userMailOptions)

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error submitting form:", error)
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed. Please check your inputs.",
        errors: error.errors,
      }
    }
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}
