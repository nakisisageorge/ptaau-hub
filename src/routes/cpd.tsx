import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Star, BookOpen, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/cpd")({
  head: () => ({
    meta: [
      { title: "CPD / CME — PTAAU Continuous Learning" },
      { name: "description", content: "Browse PTAAU's CPD/CME courses for pharmacy technicians and assistants." },
      { property: "og:title", content: "CPD / CME Courses" },
      { property: "og:description", content: "Continuous professional development for Uganda's pharmacy workforce." },
    ],
  }),
  component: Cpd,
});

const COURSES = [
  { t: "Rational Use of Antibiotics", i: "Dr. A. Mugisha", d: "4 hrs", p: "UGX 50,000", r: 4.9, c: "Clinical" },
  { t: "Pharmacovigilance Essentials", i: "Dr. R. Nankabirwa", d: "6 hrs", p: "UGX 75,000", r: 4.8, c: "Safety" },
  { t: "Patient Counseling Skills", i: "Dr. J. Okello", d: "3 hrs", p: "Free", r: 4.7, c: "Communication" },
  { t: "Inventory & Stock Management", i: "Mr. T. Kato", d: "5 hrs", p: "UGX 60,000", r: 4.6, c: "Operations" },
  { t: "Maternal & Child Health Pharmacy", i: "Ms. L. Auma", d: "8 hrs", p: "UGX 90,000", r: 4.9, c: "Public Health" },
  { t: "Antimicrobial Stewardship", i: "Dr. P. Wamala", d: "4 hrs", p: "Free", r: 4.8, c: "Clinical" },
];

function Cpd() {
  const [q, setQ] = useState("");
  const filtered = COURSES.filter(c => c.t.toLowerCase().includes(q.toLowerCase()) || c.c.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="CPD / CME" title="Continuous Professional Development"
        subtitle="Courses designed for pharmacy technicians and assistants — practical, accredited, and impactful." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search courses…"
                 className="w-full rounded-xl border border-input bg-background pl-10 pr-4 py-3 text-sm" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(c => (
            <article key={c.t} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-video bg-gradient-primary flex items-center justify-center relative">
                <BookOpen className="h-12 w-12 text-primary-foreground/80" />
                <span className="absolute top-3 left-3 text-xs uppercase tracking-wider bg-white/20 text-white px-2 py-1 rounded-full">{c.c}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-secondary"><Star className="h-4 w-4 fill-current" />{c.r}</span>
                  <span className="text-muted-foreground">{c.d}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">By {c.i}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-primary">{c.p}</span>
                  <Button asChild size="sm"><Link to="/membership">Enroll</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
