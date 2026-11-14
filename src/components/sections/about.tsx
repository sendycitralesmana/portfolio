import { Section } from "@/components/section"
import { profile } from "@/data/profile"

export function About() {
  return (
    <Section id="about" title="Tentang">
      <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>
    </Section>
  )
}