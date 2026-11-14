
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "@/hooks/use-theme"
import { profile } from "@/data/profile"

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Skill" },
  { href: "#experience", label: "Pengalaman" },
  { href: "#projects", label: "Project" },
  { href: "#contact", label: "Kontak" },
]

export function Navbar() {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <nav
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4"
        aria-label="Navigasi utama"
      >
        <a href="#top" className="font-semibold">
          {profile.name.split(" ")[0]}
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label="Ganti tema"
          >
            {theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger>
              <Menu className="size-5" />
            </SheetTrigger>

            <SheetContent side="right">
              <SheetTitle className="sr-only">
                Menu Navigasi
              </SheetTitle>

              <ul className="mt-10 flex flex-col gap-5 px-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
