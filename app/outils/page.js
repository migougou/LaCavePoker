"use client"
import { useState } from 'react';
import { Button } from 'flowbite-react';
import useSupabaseTable from '../hooks/useSupabaseTable'; 

export default function Outils() {
    const { data: ToolData, loading, error } = useSupabaseTable('Outils');
    const [selectedTool, setSelectedTool] = useState(null);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;

    // Sélectionner le premier outil par défaut si aucun n'est sélectionné
    if (!selectedTool && ToolData.length > 0) {
        setSelectedTool(ToolData[0]);
    }

    return (
        <div className="py-10 text-center">
            <div className="py-10 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 pb-16">LES OUTILS</h1>
                <p className="mb-5">Bienvenue sur notre page dédiée aux passionnés de poker cherchant à affiner leur stratégie Hors Table. Ici, vous découvrirez une sélection rigoureusement choisie d'outils essentiels qui vous guideront dans votre quête pour maîtriser l'art du poker. Que vous soyez débutant ou joueur expérimenté, ces ressources sont conçues pour améliorer vos compétences et élever votre jeu à un niveau supérieur.(Cliquez sur le titre de l'outil pour accéder au site)</p>
            </div>
            <div className="flex justify-center space-x-4 mb-5">
                {ToolData.map((tool) => (
                    <Button
                        key={tool.id}
                        color="gray"
                        onClick={() => setSelectedTool(tool)}
                        className={`hover:bg-blue-500 hover:text-white ${selectedTool && selectedTool.id === tool.id ? 'ring-2 ring-blue-500' : 'text-gray-700'}`}
                    >
                        {tool.name}
                    </Button>
                ))}
            </div>
            <hr className="border-stone-950 sm:mx-auto dark:border-gray-700 max-w-lg mx-auto" />
            {selectedTool && (
                <>
                    <a href={selectedTool.url} target="_blank" rel="noopener noreferrer">
                        <h2 className="text-3xl font-semibold mb-4 py-16 hover:text-blue-500 cursor-pointer">{selectedTool.name}</h2>
                    </a>
                    <div className="flex justify-center items-start space-x-8 max-w-full mx-auto pb-20">
                        <img src={selectedTool.imageURL} alt={selectedTool.name} className="w-full max-w-3xl object-contain" />
                        <div className="max-w-xl text-left">
                            <p className="leading-relaxed text-lg" style={{ whiteSpace: 'pre-line' }}>{selectedTool.description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
