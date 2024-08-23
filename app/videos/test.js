"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Videos() {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    const [cards, setCards] = useState([]);
    async function fetchData() {
        const { data, error } = await supabase.from("CardPrice").select("*");
        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        setCards(data);
    }
    useEffect(() => {
        fetchData();
    }, []
    );



    return (

        <div>
            <div>
            <h1 className="mt-10 text-3xl font-bold">Cards List</h1>
            {cards.length > 0 ? (
                <ul className="mt-4 space-y-4">
                    {cards.map((card) => (
                        <li key={card.id} className="border p-4 rounded-lg shadow">
                            <p>Pack: {card.pack}</p>
                            <p>Price: {card.price}</p>
                            <p>Time: {card.time}</p>
                            <p>line: {card.line1}</p>
                            <p>Message: {card.line2}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cards found.</p>
            )}
            </div>
        </div>
        

    )
}
