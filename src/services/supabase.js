import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wjtjtgwfurlmkltnfiwm.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqdGp0Z3dmdXJsbWtsdG5maXdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MzQ1NDIsImV4cCI6MjAyMzMxMDU0Mn0.rLqFz_ha4XDz8vyQ6NT2POstXqmPNkVt5AUioB7pNRA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
export { supabaseUrl };
