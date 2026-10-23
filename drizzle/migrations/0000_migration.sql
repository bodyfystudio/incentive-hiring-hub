CREATE TABLE public.caller_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  city text NOT NULL,
  age integer,
  experience text NOT NULL,
  languages text NOT NULL,
  availability text NOT NULL,
  hours_per_day text,
  has_setup boolean NOT NULL DEFAULT false,
  why_suitable text,
  accepted_commission_only boolean NOT NULL DEFAULT false
);
GRANT ALL ON public.caller_applications TO service_role;
ALTER TABLE public.caller_applications ENABLE ROW LEVEL SECURITY;