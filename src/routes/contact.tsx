import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PTAAU" },
      { name: "description", content: "Get in touch with the Pharmacy Technicians and Assistants' Association of Uganda." },
      { property: "og:title", content: "Contact PTAAU" },
      { property: "og:description", content: "Reach out to PTAAU — phone, email, and office address." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Connect With PTAAU" subtitle="We'd love to hear from you. Reach out about membership, events, or partnerships." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold">Get in touch</h2>
          <p className="mt-3 text-muted-foreground">Office hours: Mon–Fri, 9:00 AM – 5:00 PM EAT.</p>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary"><Phone className="h-5 w-5"/></span>
              <div><div className="text-sm text-muted-foreground">Phone</div><div className="font-medium">+256 740 657759</div></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary"><Mail className="h-5 w-5"/></span>
              <div><div className="text-sm text-muted-foreground">Email</div><div className="font-medium">info@ptaau.org</div></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary"><MapPin className="h-5 w-5"/></span>
              <div><div className="text-sm text-muted-foreground">Office</div><div className="font-medium">Kampala, Uganda</div></div>
            </li>
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe title="PTAAU office location" className="w-full h-72"
              src="https://www.google.com/maps?q=Kampala,Uganda&output=embed" loading="lazy" />
          </div>
        </div>

        <form onSubmit={(e)=>{e.preventDefault(); setSent(true); toast.success("Message sent — we'll be in touch soon.");}}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft space-y-4">
          <h2 className="font-display text-2xl font-bold">Send a message</h2>
          {sent && <div className="rounded-md bg-secondary-soft px-3 py-2 text-sm text-secondary">Thank you — your message was received.</div>}
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full name" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
            <input required type="email" placeholder="Email" className="rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
          </div>
          <input placeholder="Phone (optional)" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
          <input required placeholder="Subject" className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
          <textarea required placeholder="Message" rows={5} className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm" />
          <Button type="submit" className="w-full bg-gradient-primary">Send message</Button>
        </form>
      </section>
    </>
  );
}
