import { createClient } from '@supabase/supabase-js';

const URL = 'https://xyzcompany.supabase.co';
const API_KEY = 'public-anon-key';
export const supabase = createClient(URL, API_KEY);


