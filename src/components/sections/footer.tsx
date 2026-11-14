import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} {profile.name}. Dibuat dengan React, Tailwind, dan shadcn/ui.
    </footer>
  )
}