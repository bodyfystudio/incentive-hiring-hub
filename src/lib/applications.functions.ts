import { createServerFn } from "@tanstack/react-start";
import { applicationSchema } from "./applications";

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("caller_applications").insert({
      full_name: data.full_name,
      phone: data.phone,
      email: data.email || null,
      city: data.city,
      age: data.age,
      experience: data.experience,
      languages: data.languages,
      availability: data.availability,
      hours_per_day: data.hours_per_day || null,
      has_setup: data.has_setup,
      why_suitable: data.why_suitable || null,
      accepted_commission_only: data.accepted_commission_only,
    });
    if (error) {
      console.error("Application insert failed", error.message);
      throw new Error("Could not submit your application. Please try again.");
    }
    return { ok: true };
  });
