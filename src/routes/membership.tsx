import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Check, Users, BookOpen, Megaphone, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Join PTAAU" },
      { name: "description", content: "Become a PTAAU member and access advocacy, CPD, networking, and recognition." },
      { property: "og:title", content: "PTAAU Membership" },
      { property: "og:description", content: "Professional and student membership for Uganda's pharmacy workforce." },
    ],
  }),
  component: Membership,
});

function Tier({ name, price, features, highlight }: { name: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-8 shadow-soft ${highlight ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
      <h3 className="font-display text-2xl font-bold">{name}</h3>
      <div className="mt-3 text-3xl font-bold">{price}</div>
      <ul className="mt-6 space-y-3 text-sm">
        {features.map(f => (
          <li key={f} className="flex gap-2"><Check className={`h-5 w-5 shrink-0 ${highlight ? "text-white" : "text-secondary"}`} /> {f}</li>
        ))}
      </ul>
      <Button asChild className={`mt-8 w-full ${highlight ? "bg-white text-primary hover:bg-white/90" : ""}`}>
        <Link to="/contact">Apply</Link>
      </Button>
    </div>
  );
}

function Membership() {
  return (
    <>
      <PageHero eyebrow="Membership" title="Become a PTAAU Member"
        subtitle="Join Uganda's leading professional community for pharmacy technicians and assistants." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-8 md:grid-cols-2">
        <Tier name="Professional Membership" price="Annual subscription" highlight
              features={["Full advocacy & representation","Discounted CPD/CME courses","Member-only events","Recognition & certification","Committee participation"]} />
        <Tier name="Student Membership" price="Free"
              features={["Educational opportunities","Mentorship access","Career resources","Student events","Pathway to professional membership"]} />
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center">Member Benefits</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Users, t: "Networking", d: "Connect with peers across Uganda." },
              { i: Megaphone, t: "Advocacy", d: "A national voice for your profession." },
              { i: BookOpen, t: "CPD Access", d: "Continuous learning made accessible." },
              { i: HeartHandshake, t: "Recognition", d: "Be celebrated for your impact." },
            ].map(b => (
              <div key={b.t} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <b.i className="mx-auto h-7 w-7 text-primary" />
                <h3 className="mt-3 font-display font-semibold">{b.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="rounded-3xl bg-gradient-primary p-12 text-center text-primary-foreground shadow-elegant">
          <h2 className="font-display text-3xl font-bold">Ready to take the next step?</h2>
          <p className="mt-3 text-white/85">Volunteer, sponsor, or join a committee to shape pharmacy in Uganda.</p>
          <Button asChild size="lg" className="mt-6 bg-white text-primary hover:bg-white/90"><Link to="/contact">Get involved</Link></Button>
        </div>
      </section>
    </>
  );
}
