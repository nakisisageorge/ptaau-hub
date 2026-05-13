import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Shield, Users, Scale } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources | PTAAU" },
      { name: "description", content: "Download PTAAU constitution, code of conduct, and professional guidelines." },
      { property: "og:title", content: "PTAAU Resources" },
      { property: "og:description", content: "Constitution, guidelines, and member documents." },
    ],
  }),
  component: Resources,
});

const DOCS = [
  { t: "PTAAU Constitution", d: "The governing constitution of the association.", icon: Scale },
  { t: "Code of Conduct", d: "Ethical and professional standards for members.", icon: Shield },
  { t: "Professional Guidelines", d: "Practice guidelines for pharmacy technicians and assistants.", icon: BookOpen },
  { t: "Membership Eligibility", d: "Criteria and process for becoming a PTAAU member.", icon: Users },
];

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Documents and Guidelines"
        subtitle="Official PTAAU documents, policies, and downloadable resources for members."
      />

      <section aria-labelledby="docs-heading" className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-label">Downloads</span>
            <h2 id="docs-heading" className="text-3xl font-bold text-foreground">
              Official Documents
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOCS.map((d) => (
              <div
                key={d.t}
                className="group bg-white rounded-2xl border border-border p-6 shadow-soft card-hover"
              >
                <div className="icon-box mb-5 group-hover:scale-105 transition-transform">
                  <d.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{d.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{d.d}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white rounded-full text-xs font-semibold"
                  aria-label={`Download ${d.t} as PDF`}
                >
                  <Download className="h-3.5 w-3.5 mr-1.5" aria-hidden="true" /> Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
            Contact our team and we will help you find the right document or resource.
          </p>
          <Button
            asChild
            className="bg-primary hover:bg-secondary text-white rounded-full px-8 h-11 font-semibold"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
