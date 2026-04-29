import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2 } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { profile } from "@/data/profile";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subj = encodeURIComponent(
      subject || `Portfolio inquiry from ${name || "your site"}`
    );
    const body = encodeURIComponent(
      `Hi Sultan,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subj}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad bg-secondary/30">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something"
          description="Open to consulting, technical leadership, and embedded product opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <div className="card-base p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Quickest way is email — I usually reply within a day.
            </p>

            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href={profile.socials.email} className="text-muted-foreground hover:text-primary">
                    {profile.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a href={`tel:${profile.phone}`} className="text-muted-foreground hover:text-primary">
                    {profile.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">{profile.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-secondary"
              >
                <Code2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="card-base p-6 lg:col-span-3 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium text-foreground">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tell me about your query, project, timeline and goals…"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">
                Submitting opens your email client with the message pre-filled.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Send className="h-4 w-4" /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
