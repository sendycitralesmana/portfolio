import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/data/profile"

export function Skills() {
  return (
    <Section id="skills" title="Skill">
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="text-base">{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {items.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}