import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://nhsmtsnopubudyjmvauh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oc210c25vcHVidWR5am12YXVoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjA2NTY0OCwiZXhwIjoyMDExNjQxNjQ4fQ.YHkmXpwvgCK2ah0pi1NwIvkvgoC00hctX6jJpqth3Zk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
