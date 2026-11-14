import { useState, type FormEvent } from "react"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Status = "idle" | "sending" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <Section id="contact" title="Kontak">
      <form name="contact" method="POST" onSubmit={onSubmit} className="max-w-xl space-y-4">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Jangan diisi: <input name="bot-field" /></label>
        </p>

        <div className="space-y-2">
          <Label htmlFor="name">Nama</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Pesan</Label>
          <Textarea id="message" name="message" rows={5} required />
        </div>

        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Mengirim..." : "Kirim pesan"}
        </Button>

        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && "Terima kasih, pesan terkirim."}
          {status === "error" && "Gagal mengirim. Coba lagi atau hubungi lewat LinkedIn."}
        </p>
      </form>
    </Section>
  )
}