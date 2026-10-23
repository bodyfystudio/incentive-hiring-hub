import { z } from "zod";

export const PLAN_COMMISSION = { 4000: 500, 8000: 1000 } as const;

export const MILESTONES = [
  { sales: 5, bonus: 1000 },
  { sales: 10, bonus: 2500 },
  { sales: 15, bonus: 3500 },
  { sales: 20, bonus: 5000 },
] as const;

/** Highest milestone bonus reached for a month's total sales (bonuses are not stacked). */
export function milestoneBonus(totalSales: number): number {
  let bonus = 0;
  for (const m of MILESTONES) if (totalSales >= m.sales) bonus = m.bonus;
  return bonus;
}

export function monthlyEarnings(plans4000: number, plans8000: number): number {
  const commission = plans4000 * PLAN_COMMISSION[4000] + plans8000 * PLAN_COMMISSION[8000];
  return commission + milestoneBonus(plans4000 + plans8000);
}

export const applicationSchema = z.object({
  full_name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{8,17}$/, "Enter a valid phone / WhatsApp number"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  city: z.string().trim().min(2, "Please enter your city / state").max(100),
  age: z.coerce.number().int().min(18, "You must be 18 or older").max(70),
  experience: z.enum(["Fresher", "Less than 1 year", "1–3 years", "3+ years"]),
  languages: z.string().trim().min(2, "Tell us which languages you speak").max(150),
  availability: z.enum(["Part-time", "Flexible hours", "Full-time"]),
  hours_per_day: z.string().trim().max(30).optional().or(z.literal("")),
  has_setup: z.boolean(),
  why_suitable: z.string().trim().max(1000).optional().or(z.literal("")),
  accepted_commission_only: z.literal(true, {
    errorMap: () => ({ message: "Please confirm you understand this is commission-only" }),
  }),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
