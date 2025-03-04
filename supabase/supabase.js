const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://inxrmazghretqayellhc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlueHJtYXpnaHJldHFheWVsbGhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNjgzNTksImV4cCI6MjA1NTk0NDM1OX0.ohRrAutQdJbg--YGn1P6VQiJNZgTC2De6FtUE7epi98";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;