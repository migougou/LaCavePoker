'use client';
import CardPrice from "./components/cardPrice";

export default function Coaching() {
    return (
        <div className="py-10 text-center">
            <div className="py-10 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-3 pb-16">COACHING</h1>
                <p className="pb-16">Voici un choix de coaching que je vous propose. Vous pouvez me poser des questions sur n’importe quelle offre, en m’écrivant dans contact ou via mes réseaux.</p>
            </div>
            <div className="flex flex-wrap justify-center"> 
                <CardPrice />
            </div>
        </div>
    );
}
