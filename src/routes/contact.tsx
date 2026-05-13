import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PTAAU" },
      { name: "description", content: "Get in touch with the Pharmacy Technicians and Assistants Association of Uganda." },
      { property: "og:title", content: "Contact PTAAU" },
      { property: "og:description", content: "Reach out to PTAAU by phone, email, or visit our office." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect With PTAAU"
        subtitle="We would love to hear from you. Reach out about membership, events, or partnerships."
      />

      <section aria-labelledby="contact-heading" className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Info side */}
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 id="contact-heading" className="text-3xl font-bold text-foreground mb-4">
                We're Here to Help
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have questions about membership, upcoming events, or professional development,
                our team is ready to assist you.
              </p>

              <ul className="space-y-5 mb-8" aria-label="Contact details">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+256 740 657759",
                    sub: "Mon to Fri, 9:00 AM to 5:00 PM EAT",
                    href: "tel:+256740657759",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@ptaau.org",
                    sub: "We reply within 24 hours",
                    href: "mailto:info@ptaau.org",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Nakawa, Kampala, Uganda",
                    sub: "Visit us during office hours",
                    href: null,
                  },
                  {
                    icon: Clock,
                    label: "Office Hours",
                    value: "Mon to Fri: 9:00 AM to 5:00 PM",
                    sub: "East Africa Time (EAT)",
                    href: null,
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="icon-box shrink-0">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-0.5">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold text-foreground text-sm hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-semibold text-foreground text-sm">{item.value}</div>
                      )}
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="PTAAU office location on Google Maps"
                  className="w-full h-64"
                  src="https://www.google.com/maps?q=Nakawa,Kampala,Uganda&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form side */}
            <div>
              <div className="bg-white rounded-2xl border border-border p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill in the form below and we will get back to you shortly.
                </p>

                {sent && (
                  <div
                    role="alert"
                    className="rounded-xl bg-primary-soft border border-primary/20 px-4 py-3 text-sm text-primary font-medium mb-5"
                  >
                    Your message was received. We will be in touch soon.
                  </div>
                )}

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                    toast.success("Message sent. We will be in touch soon.");
                  }}
                  className="space-y-4"
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="full-name"
                        className="text-xs font-semibold text-foreground/70 uppercase tracking-widest block mb-1.5"
                      >
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="full-name"
                        name="fullName"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-foreground/70 uppercase tracking-widest block mb-1.5"
                      >
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold text-foreground/70 uppercase tracking-widest block mb-1.5"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+256 ..."
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-foreground/70 uppercase tracking-widest block mb-1.5"
                    >
                      Subject <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-foreground/70 uppercase tracking-widest block mb-1.5"
                    >
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us more..."
                      rows={5}
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-secondary text-white font-semibold rounded-full h-12"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
