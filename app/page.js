"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Accueil() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    const [tools, setTools] = useState([]);

    async function fetchData() {
        const { data, error } = await supabase.from('Outils').select('*');
        if (error) {
            console.error('Error fetching data:', error);
            return;
        }
        setTools(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1 className="mt-10 text-3xl font-bold">Contacts List</h1>
            {tools.length > 0 ? (
                <ul className="mt-4 space-y-4">
                    {tools.map((tool) => (
                        <li key={tool.id} className="border p-4 rounded-lg shadow">
                            <p>Last Name: {tool.name}</p>
                            <p>First Name: {tool.description}</p>
                            {tool.imageURL && (
                                <img src={tool.imageURL} alt={`Image de ${tool.name}`} className="mt-2 max-w-full" />
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts found.</p>
            )}
        </div>
    );
}
