import { createClient } from '@supabase/supabase-js';

const URL = 'https://google.supabase.co'; // Example placeholder URL
const API_KEY = 'google-public-anon-key-1234567890abcdef'; // Example placeholder API Key

export const supabase = createClient(URL, API_KEY);

