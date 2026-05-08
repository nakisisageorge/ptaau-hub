import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — PTAAU" },
      { name: "description", content: "Download PTAAU constitution, code of conduct, professional guidelines, and policies." },
      { property: "og:title", content: "PTAAU Resources" },
      { property: "og:description", content: "Constitution, guidelines, policies, and member documents." },
    ],
  }),
  component: Resources,
});

const DOCS = [
  { t: "PTAAU Constitution", d: "The governing constitution of the association." },
  { t: "Code of Conduct", d: "Ethical and professional standards for members." },
  { t: "Professional Guidelines", d: "Practice guidelines for pharmacy technicians and assistants." },
  { t: "Membership Eligibility", d: "Criteria and process for becoming a PTAAU member." },
  { t: "Terms & Conditions", d: "Terms governing use of PTAAU services." },
  { t: "Privacy Policy", d: "How we handle and protect member data." },
];

function Resources() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Documents & Guidelines" subtitle="Official PTAAU documents and downloadable resources." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOCS.map(d => (
          <div key={d.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">{d.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
            <Button variant="outline" size="sm" className="mt-5"><Download className="h-4 w-4 mr-2"/>Download PDF</Button>
          </div>
        ))}
      </section>
    </>
  );
}
