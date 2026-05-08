import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ShieldCheck, Award, Megaphone, Handshake, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PTAAU — Our Mission, Vision & Leadership" },
      { name: "description", content: "Learn about PTAAU's history, mission, vision, core values, and leadership team." },
      { property: "og:title", content: "About PTAAU" },
      { property: "og:description", content: "History, mission, vision, values, and leadership of PTAAU." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Building Uganda's Pharmacy Profession"
        subtitle="PTAAU brings together pharmacy technicians and assistants under one professional voice — recognized under the Allied Health Professionals' Council framework." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The Pharmacy Technicians and Assistants' Association of Uganda (PTAAU) is the national body
            representing pharmacy technicians and pharmacy assistants. We exist to elevate professional
            standards, champion ethical practice, and strengthen pharmaceutical healthcare delivery.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Through advocacy, continuous professional development, and community building, we ensure
            our members are equipped, recognized, and empowered to serve every Ugandan.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border border-border p-6 bg-card shadow-soft">
            <h3 className="font-display text-xl font-semibold">Mission</h3>
            <p className="mt-2 text-muted-foreground">Advance pharmacy practice in Uganda through advocacy, education, and ethical professional standards.</p>
          </div>
          <div className="rounded-2xl border border-border p-6 bg-card shadow-soft">
            <h3 className="font-display text-xl font-semibold">Vision</h3>
            <p className="mt-2 text-muted-foreground">A Uganda where every pharmacy professional is empowered, recognized, and central to public health.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center">Our Journey</h2>
          <div className="mt-12 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {[
              { year: "Founding", title: "PTAAU established", desc: "Pharmacy technicians unite under a shared professional voice." },
              { year: "Growth", title: "Recognition under AHPC", desc: "Officially recognized within the Allied Health Professionals' Council framework." },
              { year: "Today", title: "Nationwide membership", desc: "Serving over 2,000 pharmacy professionals across Uganda." },
              { year: "Tomorrow", title: "Digital CPD platform", desc: "Modern continuous learning experiences for every member." },
            ].map((m, i) => (
              <div key={m.title} className={`relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-10 ${i%2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:text-right md:pr-10">
                  <div className="text-sm font-semibold text-secondary">{m.year}</div>
                  <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-1 h-3 w-3 rounded-full bg-gradient-primary md:-translate-x-1/2" />
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <h2 className="font-display text-3xl font-bold text-center">Our Core Values</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: ShieldCheck, t: "Integrity" },
            { icon: Award, t: "Professionalism" },
            { icon: Megaphone, t: "Advocacy" },
            { icon: Handshake, t: "Collaboration" },
            { icon: Sparkles, t: "Excellence" },
          ].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft hover:-translate-y-1 transition-transform">
              <v.icon className="mx-auto h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display font-semibold">{v.t}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-center">Leadership Team</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "Dr. M. Ssempala", r: "Chairperson" },
              { n: "Ms. C. Akello", r: "Vice Chairperson" },
              { n: "Mr. P. Wamala", r: "Secretary General" },
              { n: "Ms. R. Namutebi", r: "Treasurer" },
            ].map((p) => (
              <div key={p.n} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display text-2xl font-bold">
                  {p.n.split(" ").map(s=>s[0]).join("").slice(0,2)}
                </div>
                <h3 className="mt-4 font-display font-semibold">{p.n}</h3>
                <p className="text-sm text-muted-foreground">{p.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
