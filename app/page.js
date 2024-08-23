"use client"

import useSupabaseTable from './hooks/useSupabaseTable';

export default function Accueil() {
    const { data: tools, loading, error } = useSupabaseTable('Outils');

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div>
            <h1 className="mt-10 text-3xl font-bold">Liste des Outils</h1>
            {tools.length > 0 ? (
                <ul className="mt-4 space-y-4">
                    {tools.map((tool) => (
                        <li key={tool.id} className="border p-4 rounded-lg shadow">
                            <p>Nom: {tool.name}</p>
                            <p>Description: {tool.description}</p>
                            {tool.imageURL && (
                                <img src={tool.imageURL} alt={`Image de ${tool.name}`} className="mt-2 max-w-full" />
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucun outil trouvé.</p>
            )}
        </div>
    );
}