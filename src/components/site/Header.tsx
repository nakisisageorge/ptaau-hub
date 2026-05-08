import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Pill } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/cpd", label: "CPD/CME" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-soft">
            <Pill className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">PTAAU</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm"><Link to="/membership">Sign in</Link></Button>
          <Button asChild size="sm" className="bg-gradient-primary"><Link to="/membership">Join PTAAU</Link></Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-primary"><Link to="/membership">Join PTAAU</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}
