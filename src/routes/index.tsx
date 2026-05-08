import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, Megaphone, Stethoscope, Users, ArrowRight, Calendar, MapPin,
  Award, BookOpen, Heart, Sparkles, TrendingUp, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-pharmacy.jpg";
import chairImg from "@/assets/chairperson.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PTAAU — Advancing Pharmacy Professionals in Uganda" },
      { name: "description", content: "Empowering Uganda's pharmacy technicians and assistants through advocacy, education, and professional excellence." },
      { property: "og:title", content: "PTAAU — Advancing Pharmacy Professionals in Uganda" },
      { property: "og:description", content: "Join the leading professional association for pharmacy technicians & assistants in Uganda." },
    ],
  }),
  component: Home,
});

function useCounter(target: number, run: boolean, duration = 1500) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, duration]);
  return v;
}

function Stat({ value, label, icon: Icon, run }: { value: number; label: string; icon: any; run: boolean }) {
  const n = useCounter(value, run);
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-shadow">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <div className="font-display text-3xl font-bold text-primary">{n.toLocaleString()}+</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setRun(true), { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Pharmacy professionals at work" width={1920} height={1080}
             className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24 md:py-32 lg:py-40 text-primary-foreground">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Officially recognized professional body
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
              Advancing Pharmacy <br className="hidden md:block" />
              Professionals in Uganda
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
              Empowering Pharmacy Technicians and Assistants through advocacy, education,
              collaboration, and professional excellence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/membership">Join PTAAU <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
                <Link to="/cpd">Explore CPD/CME</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="mx-auto max-w-7xl px-4 lg:px-8 -mt-12 relative z-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={1800} label="Pharmacy Technicians" icon={Stethoscope} run={run} />
          <Stat value={255} label="Pharmacy Assistants" icon={Users} run={run} />
          <Stat value={3096} label="Pharmacies" icon={Heart} run={run} />
          <Stat value={11370} label="Drug Shops" icon={MapPin} run={run} />
        </div>
      </section>

      {/* CHAIR MESSAGE */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="grid gap-10 lg:grid-cols-5 items-center">
          <div className="lg:col-span-2">
            <div className="relative">
              <img src={chairImg} alt="PTAAU Chairperson" loading="lazy" width={800} height={1024}
                   className="rounded-2xl object-cover w-full shadow-elegant" />
              <div className="absolute -bottom-5 -right-5 rounded-xl bg-card p-4 shadow-elegant border border-border hidden md:block">
                <div className="text-xs text-muted-foreground">Chairperson</div>
                <div className="font-semibold">PTAAU Executive</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Welcome Message</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">A Word from the Chairperson</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              On behalf of the Pharmacy Technicians and Assistants' Association of Uganda, I welcome you to
              our professional home. Together we are shaping the future of pharmacy practice — uplifting standards,
              expanding access to medicines, and supporting every member's growth.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We invite you to join, learn, advocate, and contribute as we strengthen pharmaceutical healthcare
              delivery for every Ugandan community.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link to="/about">About PTAAU</Link></Button>
              <Button asChild variant="outline"><Link to="/membership">Become a Member</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATE */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Mandate</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">What We Stand For</h2>
            <p className="mt-3 text-muted-foreground">Four pillars guiding our work for Uganda's pharmacy workforce.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: GraduationCap, title: "Continuing Professional Development", desc: "CPD/CME programs that keep members at the forefront of pharmacy practice." },
              { icon: Megaphone, title: "Professional Advocacy", desc: "Voice and representation for pharmacy technicians and assistants nationwide." },
              { icon: Stethoscope, title: "Pharmacy Practice", desc: "Promoting safe, ethical, and patient-centered pharmaceutical care." },
              { icon: Users, title: "Networking Opportunities", desc: "A vibrant community for collaboration, mentorship, and growth." },
            ].map((c) => (
              <div key={c.title} className="group rounded-2xl border border-border bg-card p-6 shadow-soft hover:-translate-y-1 hover:shadow-elegant transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <Link to="/about" className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 gap-1 transition-all">
                  Read more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Events</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Upcoming Events</h2>
          </div>
          <Button asChild variant="outline"><Link to="/events">View all</Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Pharmacy Week 2026", date: "Sep 22", month: "2026", loc: "Kampala Serena Hotel", tag: "Flagship" },
            { title: "Sickle Cell Awareness Day", date: "Jun 19", month: "2026", loc: "Mulago National Hospital", tag: "Public Health" },
            { title: "CPD Session: Antimicrobial Stewardship", date: "Jul 12", month: "2026", loc: "Online", tag: "CPD" },
          ].map((e) => (
            <article key={e.title} className="group rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all">
              <div className="bg-gradient-primary px-6 py-8 text-primary-foreground flex items-center justify-between">
                <div>
                  <div className="text-3xl font-display font-bold">{e.date}</div>
                  <div className="text-sm opacity-80">{e.month}</div>
                </div>
                <span className="text-xs uppercase tracking-wider bg-white/20 px-2 py-1 rounded-full">{e.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {e.loc}
                </div>
                <Button asChild size="sm" className="mt-5 w-full"><Link to="/events">Register</Link></Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="bg-secondary-soft py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Join Us</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Benefits of Membership</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: TrendingUp, title: "Professional Growth" },
              { icon: Megaphone, title: "Advocacy & Recognition" },
              { icon: Users, title: "Community Connection" },
              { icon: Award, title: "Industry Opportunities" },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl bg-card p-6 text-center shadow-soft hover:-translate-y-1 transition-transform">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display font-semibold">{b.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">CPD / CME</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">Featured Courses</h2>
          </div>
          <Button asChild variant="outline"><Link to="/cpd">Browse catalog</Link></Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Rational Use of Antibiotics", i: "Dr. A. Mugisha", p: "UGX 50,000", r: 4.9 },
            { t: "Pharmacovigilance Essentials", i: "Dr. R. Nankabirwa", p: "UGX 75,000", r: 4.8 },
            { t: "Patient Counseling Skills", i: "Dr. J. Okello", p: "Free", r: 4.7 },
          ].map((c) => (
            <article key={c.t} className="rounded-2xl border border-border bg-card overflow-hidden shadow-soft hover:shadow-elegant transition-all">
              <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-primary-foreground/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-sm text-secondary">
                  <Star className="h-4 w-4 fill-current" /> {c.r}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{c.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">By {c.i}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-semibold text-primary">{c.p}</span>
                  <Button asChild size="sm"><Link to="/cpd">Enroll</Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Latest News</span>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold">From the Association</h2>
            </div>
            <Button asChild variant="outline"><Link to="/news">All articles</Link></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { tag: "Advocacy", title: "PTAAU advances scope-of-practice review with the Allied Health Professionals' Council", date: "Apr 28, 2026" },
              { tag: "Public Health", title: "World Pharmacist Day: technicians at the heart of medication safety", date: "Apr 12, 2026" },
              { tag: "Education", title: "New CPD curriculum launched for community pharmacy assistants", date: "Mar 30, 2026" },
            ].map((n) => (
              <article key={n.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant transition-all">
                <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary">{n.tag}</span>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{n.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" /> {n.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="rounded-3xl bg-gradient-primary px-6 py-16 md:px-16 text-primary-foreground text-center shadow-elegant">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Become a PTAAU Member Today</h2>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">
            Join thousands of pharmacy professionals shaping Uganda's healthcare future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90"><Link to="/membership">Join now</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20"><Link to="/contact">Contact us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
