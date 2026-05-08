import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — PTAAU" },
      { name: "description", content: "Upcoming PTAAU events: Pharmacy Week, awareness campaigns, and CPD sessions." },
      { property: "og:title", content: "PTAAU Events" },
      { property: "og:description", content: "Conferences, awareness days, and CPD sessions across Uganda." },
    ],
  }),
  component: Events,
});

const EVENTS = [
  { t: "Pharmacy Week 2026", date: "Sep 22 – 28", time: "All week", loc: "Kampala Serena Hotel", tag: "Flagship", desc: "Uganda's largest gathering of pharmacy professionals." },
  { t: "Sickle Cell Awareness Day", date: "Jun 19, 2026", time: "9:00 AM", loc: "Mulago National Hospital", tag: "Public Health", desc: "Community education and free screening." },
  { t: "CPD: Antimicrobial Stewardship", date: "Jul 12, 2026", time: "2:00 PM", loc: "Online (Zoom)", tag: "CPD", desc: "Live, accredited continuing education session." },
  { t: "World Pharmacist Day", date: "Sep 25, 2026", time: "10:00 AM", loc: "National Theatre", tag: "Celebration", desc: "Honoring Uganda's pharmacy professionals." },
];

function Events() {
  return (
    <>
      <PageHero eyebrow="Events" title="Upcoming Events" subtitle="Join us at flagship events, awareness campaigns, and CPD sessions." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-6 md:grid-cols-2">
        {EVENTS.map(e => (
          <article key={e.t} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all">
            <div className="bg-gradient-primary px-6 py-6 text-primary-foreground flex items-center justify-between">
              <div>
                <div className="text-xl font-display font-bold">{e.date}</div>
                <div className="text-sm opacity-80 flex items-center gap-1 mt-1"><Clock className="h-3.5 w-3.5"/>{e.time}</div>
              </div>
              <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded-full">{e.tag}</span>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{e.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" /> {e.loc}
              </div>
              <Button asChild className="mt-5"><Link to="/contact">Register</Link></Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
