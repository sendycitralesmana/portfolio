import { Section } from "@/components/section"
import { experience } from "@/data/profile"

export function Experience() {
  return (
    <Section id="experience" title="Pengalaman">
      <ol className="relative ml-2 border-l pl-6">
        {experience.map((e) => (
          <li key={e.company} className="relative">
            <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground">{e.period}</p>
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <p className="mb-4 text-muted-foreground">{e.company}</p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}