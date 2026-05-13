import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Send } from "lucide-react";
import logo from "@/assets/PPAU_logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[#0d2b27] text-white">
      {/* Newsletter strip */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Stay Updated</h3>
            <p className="text-white/75 text-sm">
              Get the latest pharmacy news, CPD events, and policy updates.
            </p>
          </div>
          <form
            className="flex w-full max-w-md gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white/15 border border-white/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/90 transition-all shrink-0"
            >
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="PTAAU Logo"
                className="h-12 w-auto brightness-0 invert opacity-90"
              />
              <span className="text-xl font-bold text-white">PTAAU</span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              The professional body for Pharmacy Technicians and Assistants in
              Uganda, advancing healthcare excellence nationwide.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["/about", "About Us"],
                ["/membership", "Membership"],
                ["/cpd", "CPD / CME"],
                ["/events", "Events"],
                ["/news", "News & Updates"],
                ["/community", "Community"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/55 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              {[
                "Member Portal",
                "Practice Standards",
                "Regulatory Policy",
                "CPD Curriculum",
                "Resource Library",
                "Privacy Policy",
              ].map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-primary transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Nakawa, Kampala, Uganda
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +256 740 657759
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                info@ptaau.org
              </li>
            </ul>

            <div className="mt-8">
              <Link
                to="/membership"
                className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/35">
          <p>
            © {new Date().getFullYear()} Pharmacy Technicians and Assistants'
            Association of Uganda. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
