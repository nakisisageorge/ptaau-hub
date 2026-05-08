import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Updates — PTAAU" },
      { name: "description", content: "Latest news, advocacy, and public health updates from PTAAU." },
      { property: "og:title", content: "PTAAU News" },
      { property: "og:description", content: "Stories from Uganda's pharmacy profession." },
    ],
  }),
  component: News,
});

const POSTS = [
  { tag: "Advocacy", title: "PTAAU advances scope-of-practice review with Allied Health Professionals' Council", excerpt: "Latest engagement secures stronger recognition for pharmacy technicians.", date: "Apr 28, 2026" },
  { tag: "Public Health", title: "World Pharmacist Day: technicians at the heart of medication safety", excerpt: "Highlights from this year's national celebrations.", date: "Apr 12, 2026" },
  { tag: "Education", title: "New CPD curriculum launched for community pharmacy assistants", excerpt: "Eight new accredited modules now available online.", date: "Mar 30, 2026" },
  { tag: "Community", title: "Outreach: free medication review camps in Wakiso and Mbale", excerpt: "Members lead community-based medication reviews.", date: "Mar 14, 2026" },
  { tag: "Policy", title: "Position paper on antimicrobial stewardship submitted to Ministry of Health", excerpt: "PTAAU contributes evidence-based recommendations.", date: "Feb 22, 2026" },
  { tag: "Awards", title: "Outstanding Member 2025 announced at the annual gala", excerpt: "Recognizing excellence in pharmacy practice.", date: "Feb 5, 2026" },
];

function News() {
  return (
    <>
      <PageHero eyebrow="News" title="From the Association" subtitle="Advocacy wins, public health campaigns, and member stories." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(p => (
          <article key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-all">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">{p.tag}</span>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" /> {p.date}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
