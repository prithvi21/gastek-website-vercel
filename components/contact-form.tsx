"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/app/actions/contact-form"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { useCsrfToken } from "@/lib/csrf"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  // Get CSRF token
  const csrfToken = useCsrfToken()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const formData = new FormData(event.currentTarget)

    // Add CSRF token to form data
    formData.append("csrfToken", csrfToken)

    // Basic client-side validation before sending
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    // Simple validation
    if (!name || name.length < 2 || name.length > 100) {
      setFormStatus({
        success: false,
        message: "Please enter a valid name (2-100 characters).",
      })
      setIsSubmitting(false)
      return
    }

    if (!company || company.length < 1 || company.length > 100) {
      setFormStatus({
        success: false,
        message: "Please enter a valid company name (1-100 characters).",
      })
      setIsSubmitting(false)
      return
    }

    if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setFormStatus({
        success: false,
        message: "Please enter a valid email address.",
      })
      setIsSubmitting(false)
      return
    }

    if (!message || message.length < 10 || message.length > 1000) {
      setFormStatus({
        success: false,
        message: "Please enter a message between 10 and 1000 characters.",
      })
      setIsSubmitting(false)
      return
    }

    const data = { name, company, email, message, csrfToken }

    try {
      const result = await submitContactForm(data)
      setFormStatus(result)

      if (result.success) {
        // Reset form on success
        ;(event.target as HTMLFormElement).reset()
      }
    } catch (error) {
      console.error("Form submission error:", {
        errorType: error instanceof Error ? error.name : "Unknown",
        errorMessage: error instanceof Error ? error.message : String(error),
        formAction: "contactForm",
        // Don't log user inputs
      })

      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      {/* Hidden CSRF token field */}
      <input type="hidden" name="csrfToken" value={csrfToken} />

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your company" required />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" placeholder="Your email address" type="email" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Requirements</Label>
        <Textarea
          className="min-h-[150px]"
          id="message"
          name="message"
          placeholder="Tell us about your requirements"
          required
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {formStatus && (
        <div
          className={`p-3 rounded-md flex items-center ${
            formStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {formStatus.success ? (
            <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          )}
          <p>{formStatus.message}</p>
        </div>
      )}
    </form>
  )
}
