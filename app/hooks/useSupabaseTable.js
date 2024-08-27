import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function useSupabaseTable(tableName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from(tableName)
          .select("*")
          .order('id', { ascending: true });  
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [tableName]);

  return { data, loading, error };
}
