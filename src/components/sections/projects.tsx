
import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { projects, type Project } from "../../data/projects"

export function Projects() {
  return (
    <Section id="projects" title="Project">
      <p className="mb-8 max-w-2xl text-muted-foreground">
        Sebagian besar proyek saya untuk instansi pemerintah dan bersifat
        rahasia, jadi ditampilkan sebagai studi kasus tanpa detail internal.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p: Project) => (
          <Dialog key={p.slug}>
            <Card className="flex flex-col transition-shadow hover:shadow-md">
              <CardHeader>
                <p className="text-xs text-muted-foreground">{p.type}</p>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.problem}</CardDescription>
              </CardHeader>

              <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((s: string) => (
                    <Badge key={s} variant="outline">
                      {s}
                    </Badge>
                  ))}
                </div>

                <DialogTrigger>
                  <Button size="sm" variant="secondary">
                    Lihat studi kasus
                  </Button>
                </DialogTrigger>
              </CardFooter>
            </Card>

            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-xl">
              <DialogHeader>
                <DialogTitle>{p.title}</DialogTitle>
                <DialogDescription>{p.type}</DialogDescription>
              </DialogHeader>

              <dl className="space-y-4 text-sm">
                {[
                  { label: "Masalah", value: p.problem },
                  { label: "Peran saya", value: p.role },
                  { label: "Solusi", value: p.solution },
                  { label: "Dampak", value: p.impact },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="font-semibold">{item.label}</dt>
                    <dd className="text-muted-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((s: string) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </dl>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </Section>
  )
}
