import type { ReactNode } from "react"

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 mx-auto max-w-5xl px-4 py-20">
      <h2 className="mb-10 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {children}
    </section>
  )
}