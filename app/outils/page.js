"use client"
import { useState } from 'react';
import { Button } from 'flowbite-react';

const ToolData = [
    {
        name: "GTO Wizard",
        description: "Description de GTO Wizard...",
        imageUrl: "https://gtowizard.com/assets/static/intro.d7fe51f.76a3737bf1cde31794e4df2109c7c6bf.png",
        url: "https://gtowizard.com",
    },
    {
        name: "Swongsim",
        description: "Description de Swongsim...",
        imageUrl: "https://www.clubpoker.net/forum-poker/uploads/monthly_2023_10/swong.png.060593831e6e0321f93e8c686b7d6f18.png",
    },
    {
        name: "HUD",
        description: "Description de HUD...",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFXZ3DN7R2-W9Zun_IHks-cCbL_zf5pMwjMkNRkxnYdg1vkcnDKI6bfPDqa8XYsAm9I4&usqp=CAU",
    },
    {
        name: "Trackers",
        description: "Description de Trackers...",
        imageUrl: "https://d3ltpfxjzvda6e.cloudfront.net/2015/12/18/poker-tracker-big.png",
    },

];

export default function Outils() {
    const [selectedTool, setSelectedTool] = useState(ToolData[0]);

    return (
        <div className="py-10 text-center">
            <div className="py-10 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 pb-16">LES OUTILS</h1>
                <p className="mb-5">Bienvenue sur notre page dédiée aux passionnés de poker cherchant à affiner leur stratégie Hors Table. Ici, vous découvrirez une sélection rigoureusement choisie d'outils essentiels qui vous guideront dans votre quête pour maîtriser l'art du poker. Que vous soyez débutant ou joueur expérimenté, ces ressources sont conçues pour améliorer vos compétences et élever votre jeu à un niveau supérieur.(Cliquez sur le titre de l’outil pour accéder au site)</p>
            </div>
            <div className="flex justify-center space-x-4 mb-5">
                {ToolData.map((tool) => (
                    <Button
                        color="gray"
                        onClick={() => setSelectedTool(tool)}
                        className={`hover:bg-blue-500 hover:text-white ${selectedTool.name === tool.name ? 'ring-2 ring-blue-500' : 'text-gray-700'}`}
                    >
                        {tool.name}
                    </Button>
                ))}
            </div>
            <hr className="border-stone-950 sm:mx-auto dark:border-gray-700 max-w-lg mx-auto" />

            {selectedTool && ( // Ajouter une condition pour afficher le contenu de l'outil uniquement s'il est sélectionné
                <>
                    <a href={selectedTool.url} target="_blank" rel="noopener noreferrer">
                        <h2 className="text-3xl font-semibold mb-4 py-16 hover:text-blue-500 cursor-pointer">{selectedTool.name}</h2>
                    </a>
                    <div className="flex justify-center items-start space-x-4 max-w-4xl mx-auto pb-20">
                        <img src={selectedTool.imageUrl} alt={selectedTool.name} className="w-full max-w-lg" />
                        <div className="w-1/2">
                            <p>{selectedTool.description}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
