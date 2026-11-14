
import { Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile, stats } from "@/data/profile"

export function Hero() {
  const email = `${profile.emailUser}@${profile.emailDomain}`

  const linkBase =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"

  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-4 pb-10 pt-24 sm:pt-32"
    >
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          {profile.role} · {profile.location}
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          {profile.headline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button onClick={() => (window.location.href = `mailto:${email}`)}>
            <Mail />
            Hubungi saya
          </Button>

          <a
            href={profile.cv}
            download
            className={`${linkBase} border border-input bg-background hover:bg-accent hover:text-accent-foreground`}
          >
            <Download />
            Unduh CV
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} hover:bg-accent hover:text-accent-foreground`}
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} hover:bg-accent hover:text-accent-foreground`}
          >
            LinkedIn
          </a>
        </div>

        <dl className="mt-14 grid max-w-md grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="text-sm text-muted-foreground">
                {s.label}
              </dt>
              <dd className="text-2xl font-bold">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
