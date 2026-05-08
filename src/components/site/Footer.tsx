import { Link } from "@tanstack/react-router";
import { Pill, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Pill className="h-5 w-5" />
            </span>
            <span className="font-display text-lg font-bold">PTAAU</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pharmacy Technicians and Assistants' Association of Uganda — advancing professional excellence,
            advocacy, and continuous learning across Uganda's pharmacy workforce.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/about","About Us"],["/membership","Membership"],["/cpd","CPD/CME"],["/events","Events"],["/news","News"],["/resources","Resources"]].map(([to,l])=>(
              <li key={to}><Link to={to} className="hover:text-primary transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary"/>+256 740 657759</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary"/>info@ptaau.org</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary"/>Kampala, Uganda</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Get pharmacy updates & CPD invites.</p>
          <form className="flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" required placeholder="you@email.com"
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"/>
            <button className="rounded-md bg-gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground">Join</button>
          </form>
          <div className="mt-5 flex gap-3 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5"/></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-5 w-5"/></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PTAAU. All rights reserved.
      </div>
    </footer>
  );
}
