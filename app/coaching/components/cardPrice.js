'use client';

import useSupabaseTable from '../../hooks/useSupabaseTable';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function CardPrice() {
    const { data: cardPrices, loading, error } = useSupabaseTable('CardPrice');

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className="flex flex-wrap justify-center gap-12">
            {cardPrices.map((card) => (
                <div 
                    key={card.id} 
                    className={`w-full max-w-xs bg-white border border-black rounded-xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 flex flex-col ${
                        card.pack === "Pack 20H" ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white" : ""
                    }`}
                >
                    {/* Titre de la carte */}
                    <div className={`mb-4 text-xl font-medium ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-white"} h-12 flex items-center justify-center`}>
                        {card.pack}
                    </div>

                    {/* Section du prix */}
                    <div 
                        className={`flex items-baseline ${card.pack === "Pack 20H" ? "text-white" : "text-gray-900 dark:text-white"} h-32 flex items-center justify-center`}
                    >
                        <span className={`text-5xl font-extrabold tracking-tight ${card.pack === "Pack Découverte" ? "text-xl" : ""}`}>
                            {card.pack === "Pack Découverte" ? "GRATUIT. Viens découvrir une heure de coaching. Cette offre est unique et ne peut être renouvelée." : card.price}
                        </span>
                        {card.pack !== "Pack Découverte" && <span className="text-3xl font-semibold">€</span>}
                    </div>

                    {/* Contenu de la carte */}
                    <ul role="list" className="space-y-6 my-7 flex-grow">
                        {card.time && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} mt-0.5`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.time}</span>
                            </li>
                        )}
                        {card.line1 && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} mt-0.5`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.line1}</span>
                            </li>
                        )}
                        {card.line2 && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} mt-0.5`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.line2}</span>
                            </li>
                        )}
                        {card.accessDiscord && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "line-through text-gray-400 dark:text-gray-500" : ""}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "text-gray-400 dark:text-gray-500" : ""}`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.accessDiscord}</span>
                            </li>
                        )}
                        {card.accessGroupe && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "line-through text-gray-400 dark:text-gray-500" : ""}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "text-gray-400 dark:text-gray-500" : ""}`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.accessGroupe}</span>
                            </li>
                        )}
                        {card.accessRanges && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "line-through text-gray-400 dark:text-gray-500" : ""}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "text-gray-400 dark:text-gray-500" : ""}`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.accessRanges}</span>
                            </li>
                        )}
                        {card.accessVideos && (
                            <li className={`flex items-start text-left ${card.pack === "Pack 20H" ? "text-white" : "text-gray-500 dark:text-gray-400"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "line-through text-gray-400 dark:text-gray-500" : ""}`}>
                                <CheckCircleIcon className={`flex-shrink-0 w-5 h-5 mt-0.5 ${card.pack === "Pack 20H" ? "text-white" : "text-blue-700 dark:text-blue-500"} ${card.pack === "LeakFinder" || card.pack === "Pack Découverte" ? "text-gray-400 dark:text-gray-500" : ""}`} />
                                <span className="text-base font-normal leading-tight ms-3">{card.accessVideos}</span>
                            </li>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
}
