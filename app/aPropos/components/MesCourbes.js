"use client"
import { useState } from 'react';
import { Button } from 'flowbite-react';

const CurveData = [
    {
        limit: "5€",
        imageUrl: "images/courbe.png",
    },
    {
        limit: "10€",
        imageUrl: "images/courbe.png",
    },
    {
        limit: "20€",
        imageUrl: "images/courbe.png",
    },
    {
        limit: "50€",
        imageUrl: "images/courbe.png",
    },
    // Ajoutez d'autres courbes ici si nécessaire
];

export default function MesCourbes() {
    const [selectedCurve, setSelectedCurve] = useState(null);

    return (
        <div className="py-10 text-center">
            <div className="py-10 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 pb-16">MES COURBES</h1>
            </div>
            <div className="flex justify-center space-x-4 mb-5">
                {CurveData.map((curve) => (
                    <Button
                        color="gray"
                        onClick={() => setSelectedCurve(curve)}
                    >
                        {curve.limit}
                    </Button>
                ))}
            </div>
            <hr className="border-stone-950 sm:mx-auto dark:border-gray-700 max-w-sm mx-auto" />

            {selectedCurve && ( // Affiche l'image de la courbe sélectionnée
                <div className="flex justify-center items-start space-x-4 max-w-4xl mx-auto py-20">
                    <img src={selectedCurve.imageUrl} alt={`Courbe pour ${selectedCurve.limit}`} className="w-full" />
                </div>
            )}
        </div>
    );
}
