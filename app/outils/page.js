"use client"
import { useState } from 'react';
import { Button, Dropdown } from 'flowbite-react'; // Ajout de Dropdown pour le filtre déroulant
import useSupabaseTable from '../hooks/useSupabaseTable'; 

export default function Outils() {
    const { data: ToolData, loading, error } = useSupabaseTable('Outils');
    const [selectedTool, setSelectedTool] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // État pour gérer l'ouverture du dropdown

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur : {error}</div>;

    // Sélectionner le premier outil par défaut si aucun n'est sélectionné
    if (!selectedTool && ToolData.length > 0) {
        setSelectedTool(ToolData[0]);
    }

    return (
        <div className="py-10 text-center">
            <div className="py-10 max-w-4xl mx-auto px-4 md:px-0">
                <h1 className="text-4xl font-bold mb-3 pb-16">LES OUTILS</h1>
                <p className="mb-5">
                    Bienvenue sur notre page dédiée aux passionnés de poker cherchant à affiner leur stratégie Hors Table. 
                    Ici, vous découvrirez une sélection rigoureusement choisie d'outils essentiels qui vous guideront dans votre quête pour maîtriser l'art du poker. 
                    Que vous soyez débutant ou joueur expérimenté, ces ressources sont conçues pour améliorer vos compétences et élever votre jeu à un niveau supérieur.
                    (Cliquez sur le titre de l'outil pour accéder au site)
                </p>
            </div>

            {/* Filtre pour grand écran */}
            <div className="hidden md:flex justify-center space-x-4 mb-5">
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

            {/* Filtre pour petit écran */}
            <div className="md:hidden mb-5 flex justify-center">
                <Dropdown
                    label={<span className="font-bold text-lg">OUTILS</span>} // Texte en gras et plus grand
                    dismissOnClick={true}
                    inline={true}
                    open={isDropdownOpen}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {ToolData.map((tool) => (
                        <Dropdown.Item key={tool.id} onClick={() => setSelectedTool(tool)}>
                            {tool.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown>
            </div>

            {/* Ligne horizontale uniquement pour grand écran */}
            <hr className="border-stone-950 sm:mx-auto dark:border-gray-700 max-w-lg mx-auto hidden md:block" />

            {selectedTool && (
                <>
                    <a href={selectedTool.siteURL} target="_blank" rel="noopener noreferrer">
                        <h2 className="text-3xl font-semibold mb-4 py-16 hover:text-blue-500 cursor-pointer">
                            {selectedTool.name}
                        </h2>
                    </a>

                    <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-20 max-w-full mx-auto pb-20 px-4 md:px-0">
                        <div className="flex flex-col space-y-8 w-full md:w-auto">
                            <img src={selectedTool.imageURL} alt={selectedTool.name} className="w-full max-w-2xl object-contain" />
                            {selectedTool.name === "HUD" && selectedTool.imageURL2 && (
                                <img src={selectedTool.imageURL2} alt={`${selectedTool.name} - 2`} className="w-full max-w-2xl object-contain" />
                            )}
                        </div>
                        <div className="max-w-xl text-left">
                            <p className="leading-relaxed text-lg" style={{ whiteSpace: 'pre-line' }}>{selectedTool.description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
