'use client';

import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SecTitle from '@/components/ui/SecTitle';
import SocialLinks from '@/components/ui/SocilaLinks';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const info = [
  { label: 'Location', value: 'Egypt, Al-Sharqia, Faqous' },
  { label: 'Phone', value: '+20 1040578478' },
  { label: 'Email', value: 'elsayedkewan4business@gmail.com' },
];

export default function ContactSection({
  variant = 'page',
  id,
  headingAs = 'h2',
  showTitle = true,
}) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = React.useState(false);
  const isPage = variant === 'page';
  const outerClassName = isPage ? 'page-section' : 'section-shell';
  const canSubmit = formData.name && formData.email && formData.message && !sending;

  const handleChange = ({ target }) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data.error || 'Could not send message.', { duration: 4000 });
        return;
      }

      toast.success('Message sent.', { duration: 2000 });
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Network error. Please try again.', { duration: 4000 });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id={id} className={outerClassName}>
      <div className="content-wrap">
        <Toaster position="top-center" />

        {showTitle ? (
          <SecTitle
            as={headingAs}
            eyebrow="Contact"
            title="Let’s build something thoughtful, useful, and modern."
            subtitle="Reach out for freelance work, product collaboration, or full-time opportunities."
          />
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <aside className="section-panel rounded-[2rem] p-6 md:p-8">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-portfolio-accent">
              Reach out
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-portfolio-text md:text-3xl">
              Start with a quick hello.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-portfolio-muted md:text-base">
              If you have a product idea, an app to improve, or a workflow to automate, I&apos;d be
              happy to talk through it.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-portfolio-muted">
              {info.map((item) => (
                <li
                  key={item.label}
                  className="rounded-[1.4rem] border border-portfolio-border/70 bg-portfolio-bg/45 px-4 py-4 backdrop-blur-sm"
                >
                  <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-sm text-portfolio-text md:text-base">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.4rem] border border-portfolio-border/70 bg-portfolio-bg/40 px-5 py-4 backdrop-blur-sm">
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-portfolio-accent">
                Social
              </p>
              <SocialLinks linkClassName="text-lg md:text-xl" />
            </div>
          </aside>

          <div className="section-panel rounded-[2rem] p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-portfolio-text md:text-2xl">
              Send a message
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-portfolio-muted md:text-base">
              Share a little context and I&apos;ll get back to you as soon as I can.
            </p>

            <form onSubmit={sendMessage} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-portfolio-muted">
                  Name
                </Label>
                <Input
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  autoComplete="name"
                  disabled={sending}
                  className="rounded-2xl border-portfolio-border bg-portfolio-elevated/55 text-portfolio-text placeholder:text-portfolio-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-portfolio-muted">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  autoComplete="email"
                  disabled={sending}
                  className="rounded-2xl border-portfolio-border bg-portfolio-elevated/55 text-portfolio-text placeholder:text-portfolio-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-portfolio-muted">
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                  disabled={sending}
                  className="min-h-36 rounded-2xl border-portfolio-border bg-portfolio-elevated/55 text-portfolio-text placeholder:text-portfolio-muted"
                />
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-portfolio-accent px-6 text-sm font-semibold text-white shadow-[0_2px_12px_-2px_rgba(124,58,237,0.22)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-portfolio-accent-strong hover:shadow-[0_4px_16px_-4px_rgba(124,58,237,0.28)] disabled:translate-y-0 disabled:cursor-not-allowed disabled:bg-portfolio-surface disabled:text-portfolio-muted disabled:shadow-none"
              >
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
