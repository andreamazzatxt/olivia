import type { RequestEventLoader } from "@builder.io/qwik-city";
import { createServerClient } from "supabase-auth-helpers-qwik";

export const getSupabase =  (requestEv: RequestEventLoader) => createServerClient(
    requestEv.env.get("PUBLIC_SUPABASE_URL")!,
    requestEv.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
    requestEv
  )