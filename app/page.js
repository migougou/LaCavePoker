"use client"

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function Accueil() {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    );

    const [contacts, setContacts] = useState([]);
    async function fetchData() {
        const { data, error } = await supabase.from("Contact").select("*");
        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        setContacts(data);
    }
    useEffect(() => {
        fetchData();
    }, []
    );



    return (

        <div>
            <div>
            <h1 className="mt-10 text-3xl font-bold">Contacts List</h1>
            {contacts.length > 0 ? (
                <ul className="mt-4 space-y-4">
                    {contacts.map((contact) => (
                        <li key={contact.id} className="border p-4 rounded-lg shadow">
                            <p>First Name: {contact.firstName}</p>
                            <p>Last Name: {contact.lastName}</p>
                            <p>Email: {contact.email}</p>
                            <p>Sujet: {contact.subject}</p>
                            <p>Message: {contact.message}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts found.</p>
            )}
            </div>
        </div>
        

    )
}
