import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Network } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — PTAAU" },
      { name: "description", content: "Join PTAAU's professional community of pharmacy technicians and assistants." },
      { property: "og:title", content: "PTAAU Community" },
      { property: "og:description", content: "Groups, discussions, and networking for members." },
    ],
  }),
  component: Community,
});

function Community() {
  return (
    <>
      <PageHero eyebrow="Community" title="A Network That Grows With You" subtitle="Groups, discussions, and mentorship — by members, for members." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-6 sm:grid-cols-3">
        {[
          { i: Users, t: "Groups", d: "Specialty groups across clinical, retail, hospital, and academia." },
          { i: MessageSquare, t: "Discussions", d: "Ask, share, and learn from peers in real time." },
          { i: Network, t: "Mentorship", d: "Senior members guiding the next generation." },
        ].map(b => (
          <div key={b.t} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
            <b.i className="mx-auto h-8 w-8 text-primary"/>
            <h3 className="mt-3 font-display font-semibold">{b.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-4 lg:px-8 pb-20 text-center">
        <Button asChild size="lg" className="bg-gradient-primary"><Link to="/membership">Join the community</Link></Button>
      </section>
    </>
  );
}
