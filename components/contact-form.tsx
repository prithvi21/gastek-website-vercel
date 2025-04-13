"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { submitContactForm } from "@/app/actions/contact-form"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const result = await submitContactForm(data)
      setFormStatus(result)

      if (result.success) {
        // Reset form on success
        ;(event.target as HTMLFormElement).reset()
      }
    } catch (error) {
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
