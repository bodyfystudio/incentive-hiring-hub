import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import {
  Home,
  PhoneCall,
  BookOpen,
  Wallet,
  BadgeCheck,
  Clock,
  Languages,
  ArrowRight,
  CheckCircle2,
  Trophy,
} from "lucide-react";
import heroImg from "@/assets/hero-caller.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MILESTONES, applicationSchema, monthlyEarnings, milestoneBonus } from "@/lib/applications";
import { submitApplication } from "@/lib/applications.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Work From Home Sales Caller — Bodyfy Studio Careers" },
      {
        name: "description",
        content:
          "Join Bodyfy Studio as a remote sales caller. Earn ₹500–₹1,000 per sale plus monthly bonuses up to ₹5,000. Leads, script and training provided.",
      },
      { property: "og:title", content: "Remote Sales Caller — Bodyfy Studio" },
      {
        property: "og:description",
        content: "Turn conversations into earnings. Flexible hours, leads provided, weekly payouts.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Perks />
      <Earnings />
      <Calculator />
      <Responsibilities />
      <ApplySection />
      <Faq />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="https://bodyfystudio.com" className="font-display text-xl font-extrabold text-charcoal">
          Bodyfy<span className="text-primary">Studio</span>
        </a>
        <Button asChild size="sm" className="rounded-full font-semibold">
          <a href="#apply">Apply now</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <span className="h-2 w-2 rounded-full bg-secondary" /> We're hiring · Remote Sales Caller
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] text-charcoal md:text-7xl">
            Turn conversations into <span className="text-primary">earnings.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Call people who already want to start their weight loss journey, help them pick the right
            plan, and earn for every sale — from home, on your own hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-13 rounded-full px-7 text-base font-semibold shadow-glow">
              <a href="#apply">
                Apply for the role <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-charcoal/20 px-7 text-base">
              <a href="#earnings">See how you earn</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-charcoal">
            {["Work from home", "Leads provided", "Training & script", "No joining fee"].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-secondary/40" />
          <img
            src={heroImg}
            alt="A sales caller smiling on a headset while working from home"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
          />
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-charcoal p-5 text-charcoal-foreground shadow-soft md:-left-10">
            <p className="text-xs uppercase tracking-widest opacity-70">Earn up to</p>
            <p className="font-display text-3xl font-extrabold text-primary">{inr(25000)}</p>
            <p className="text-xs opacity-70">a month with 20 premium sales</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Perks() {
  const perks = [
    { icon: Home, title: "100% remote", text: "Work from home with a phone, internet and a quiet place to call." },
    { icon: PhoneCall, title: "Leads provided", text: "No hunting for prospects. We give you fresh enquiries and older leads." },
    { icon: BookOpen, title: "Training & script", text: "Get plan details, a proven call script and onboarding guidance." },
    { icon: Wallet, title: "Weekly payouts", text: "Commission is paid out every week for verified sales." },
    { icon: Clock, title: "Flexible hours", text: "No shifts. The more you work, the more you earn." },
    { icon: BadgeCheck, title: "No joining fee", text: "It costs nothing to join. Ever." },
  ];
  return (
    <section className="bg-charcoal py-20 text-charcoal-foreground">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">The opportunity</p>
        <h2 className="mt-3 max-w-2xl text-4xl font-bold md:text-5xl">
          Focus on people. We'll handle the leads.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-charcoal-foreground/10 bg-charcoal-foreground/5 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm opacity-75">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Earnings() {
  return (
    <section id="earnings" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary">How you earn</p>
        <h2 className="mt-3 text-4xl font-bold text-charcoal md:text-5xl">Clear commission. No guesswork.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            { plan: 4000, pay: 500 },
            { plan: 8000, pay: 1000 },
          ].map(({ plan, pay }) => (
            <div key={plan} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <p className="text-sm font-medium text-muted-foreground">For every {inr(plan)} plan sold</p>
              <p className="mt-2 font-display text-6xl font-extrabold text-charcoal">{inr(pay)}</p>
              <p className="mt-1 text-sm text-muted-foreground">in your pocket</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-gradient-warm p-8 md:p-10">
          <div className="flex items-center gap-3 text-primary-foreground">
            <Trophy className="h-6 w-6" />
            <h3 className="text-2xl font-bold">Monthly milestone bonuses</h3>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            {MILESTONES.map((m) => (
              <div key={m.sales} className="rounded-2xl bg-card p-5 text-center">
                <p className="text-sm text-muted-foreground">{m.sales} sales</p>
                <p className="mt-1 font-display text-3xl font-extrabold text-charcoal">+{inr(m.bonus)}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          Commission-only role — there is no fixed salary and earnings depend on your sales. Commission is
          paid once the customer's payment is verified.
        </p>
      </div>
    </section>
  );
}

function Calculator() {
  const [small, setSmall] = useState(6);
  const [big, setBig] = useState(4);
  const total = monthlyEarnings(small, big);
  const bonus = milestoneBonus(small + big);
  return (
    <section className="bg-accent/60 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground/70">Earnings calculator</p>
          <h2 className="mt-3 text-4xl font-bold text-charcoal md:text-5xl">What could you earn this month?</h2>
          <div className="mt-10 space-y-8">
            <div>
              <div className="flex justify-between text-sm font-semibold text-charcoal">
                <span>{inr(4000)} plans sold</span>
                <span>{small}</span>
              </div>
              <Slider className="mt-3" value={[small]} max={30} step={1} onValueChange={(v) => setSmall(v[0] ?? 0)} />
            </div>
            <div>
              <div className="flex justify-between text-sm font-semibold text-charcoal">
                <span>{inr(8000)} plans sold</span>
                <span>{big}</span>
              </div>
              <Slider className="mt-3" value={[big]} max={30} step={1} onValueChange={(v) => setBig(v[0] ?? 0)} />
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-charcoal p-10 text-charcoal-foreground shadow-soft">
          <p className="text-sm opacity-70">Estimated monthly earnings</p>
          <p className="mt-2 font-display text-6xl font-extrabold text-primary">{inr(total)}</p>
          <div className="mt-8 space-y-3 text-sm">
            <Row label="Commission" value={inr(total - bonus)} />
            <Row label={`Milestone bonus (${small + big} sales)`} value={inr(bonus)} />
          </div>
          <p className="mt-8 text-xs opacity-60">Illustration only. Actual earnings depend on verified sales.</p>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-charcoal-foreground/10 pb-3">
      <span className="opacity-75">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Responsibilities() {
  const items = [
    "Call new enquiries promptly and understand what each person is looking for.",
    "Follow up with older leads respectfully and note the next step.",
    "Explain plan options accurately and help interested people complete payment.",
    "Keep lead status and call notes up to date in the shared tracker.",
  ];
  const needs = [
    { icon: Languages, text: "Comfortable speaking Hindi and English" },
    { icon: PhoneCall, text: "Good communication and polite, respectful behaviour" },
    { icon: Home, text: "Smartphone, stable internet and a quiet space" },
    { icon: BadgeCheck, text: "18+ years — freshers are welcome" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">What you'll do</h2>
          <ul className="mt-8 space-y-4">
            {items.map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-charcoal md:text-4xl">What you need</h2>
          <ul className="mt-8 grid gap-4">
            {needs.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-charcoal">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  city: string;
  age: string;
  experience: string;
  languages: string;
  availability: string;
  hours_per_day: string;
  has_setup: boolean;
  why_suitable: string;
  accepted_commission_only: boolean;
};

const emptyForm: FormState = {
  full_name: "",
  phone: "",
  email: "",
  city: "",
  age: "",
  experience: "",
  languages: "Hindi, English",
  availability: "",
  hours_per_day: "",
  has_setup: false,
  why_suitable: "",
  accepted_commission_only: false,
};

function ApplySection() {
  const submit = useServerFn(submitApplication);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = applicationSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as keyof FormState] ??= issue.message;
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await submit({ data: parsed.data });
      setDone(true);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="apply" className="bg-charcoal py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr]">
        <div className="text-charcoal-foreground">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your next step</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Let's talk about your fit.</h2>
          <p className="mt-5 opacity-75">
            Tell us a little about yourself. We're looking for people who communicate well, stay organised
            and enjoy helping customers make a decision.
          </p>
          <div className="mt-8 rounded-2xl border border-primary/40 bg-primary/10 p-5 text-sm">
            <strong className="text-primary">Before applying:</strong> this role is incentive-only with no
            fixed salary. Please apply only if you're comfortable with performance-based earnings.
          </div>
        </div>

        <div className="rounded-3xl bg-card p-6 shadow-soft md:p-10">
          {done ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-secondary" />
              <h3 className="mt-5 text-3xl font-bold text-charcoal">Application received!</h3>
              <p className="mt-3 text-muted-foreground">
                Thanks, {form.full_name.split(" ")[0]}. Our team will contact you on WhatsApp or phone soon.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
              <Field label="Full name *" error={errors.full_name} className="sm:col-span-2">
                <Input value={form.full_name} onChange={(e) => set("full_name", e.target.value)} maxLength={100} />
              </Field>
              <Field label="Phone / WhatsApp *" error={errors.phone}>
                <Input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
              <Field label="Email" error={errors.email}>
                <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </Field>
              <Field label="City / State *" error={errors.city}>
                <Input value={form.city} onChange={(e) => set("city", e.target.value)} />
              </Field>
              <Field label="Age *" error={errors.age}>
                <Input type="number" min={18} value={form.age} onChange={(e) => set("age", e.target.value)} />
              </Field>
              <Field label="Sales / calling experience *" error={errors.experience}>
                <Select value={form.experience} onValueChange={(v) => set("experience", v)}>
                  <SelectTrigger><SelectValue placeholder="Select experience" /></SelectTrigger>
                  <SelectContent>
                    {["Fresher", "Less than 1 year", "1–3 years", "3+ years"].map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Availability *" error={errors.availability}>
                <Select value={form.availability} onValueChange={(v) => set("availability", v)}>
                  <SelectTrigger><SelectValue placeholder="Select availability" /></SelectTrigger>
                  <SelectContent>
                    {["Part-time", "Flexible hours", "Full-time"].map((o) => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Languages you speak *" error={errors.languages}>
                <Input value={form.languages} onChange={(e) => set("languages", e.target.value)} />
              </Field>
              <Field label="Hours per day you can give" error={errors.hours_per_day}>
                <Input placeholder="e.g. 3–4 hours" value={form.hours_per_day} onChange={(e) => set("hours_per_day", e.target.value)} />
              </Field>
              <Field label="Why are you suitable for this role?" error={errors.why_suitable} className="sm:col-span-2">
                <Textarea rows={3} maxLength={1000} value={form.why_suitable} onChange={(e) => set("why_suitable", e.target.value)} />
              </Field>
              <label className="flex items-start gap-3 text-sm sm:col-span-2">
                <Checkbox checked={form.has_setup} onCheckedChange={(v) => set("has_setup", v === true)} className="mt-0.5" />
                I have a smartphone, stable internet and a quiet place to make calls.
              </label>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm">
                  <Checkbox
                    checked={form.accepted_commission_only}
                    onCheckedChange={(v) => set("accepted_commission_only", v === true)}
                    className="mt-0.5"
                  />
                  I understand this is a commission-only role with no fixed salary. *
                </label>
                {errors.accepted_commission_only && (
                  <p className="mt-1 text-sm text-destructive">{errors.accepted_commission_only}</p>
                )}
              </div>
              <Button type="submit" size="lg" disabled={loading} className="h-13 rounded-full text-base font-semibold shadow-glow sm:col-span-2">
                {loading ? "Submitting…" : "Submit application"} <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label className="mb-2 block text-charcoal">{label}</Label>
      {children}
      {error && <p className="mt-1 text-sm text-destructive">{error}</p>}
    </div>
  );
}

function Faq() {
  const faqs = [
    { q: "Is there a fixed salary?", a: "No. This is a commission-only role. You earn ₹500 for every ₹4,000 plan and ₹1,000 for every ₹8,000 plan you sell, plus monthly milestone bonuses." },
    { q: "Will Bodyfy Studio provide leads?", a: "Yes. We share fresh enquiries and older leads with you — you don't need to find customers yourself." },
    { q: "When do I get paid?", a: "Payouts are made weekly for sales where the customer's payment has been verified." },
    { q: "Do I need previous experience?", a: "No. Freshers are welcome. We provide training, a call script and full plan details. Good communication in Hindi and English matters most." },
    { q: "Is there any joining fee?", a: "No. Joining is completely free." },
    { q: "How many hours do I need to work?", a: "There are no fixed hours. Work whenever suits you — the more calls you make, the more you can earn." },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-center text-4xl font-bold text-charcoal">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-base font-semibold text-charcoal">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-14 rounded-3xl bg-gradient-warm p-10 text-center">
          <h3 className="text-3xl font-bold text-primary-foreground">Ready to turn your calling skills into sales?</h3>
          <Button asChild size="lg" className="mt-6 rounded-full bg-charcoal px-8 text-charcoal-foreground hover:bg-charcoal/90">
            <a href="#apply">Apply now <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      © 2026 Bodyfy Studio · Remote Sales Caller opportunity ·{" "}
      <a href="https://bodyfystudio.com" className="underline hover:text-primary">bodyfystudio.com</a>
    </footer>
  );
}
