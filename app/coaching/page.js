'use client';
import CardPrice from "./components/cardPrice"


export default function Coaching() {



return (
    <div className="py-10 text-center">
    <div className="py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 pb-16">COACHING</h1>
        <p className="mb-5">Voici un choix de coaching que je vous propose. Vous pouvez me poser des questions sur n’importe quelle offre, en m’écrivant dans contact ou via mes réseaux.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center px-20">
        <CardPrice
            title="LinkFinder"
            price="30"
            duration="1H00-1H30"
            gameplay="Venir avec un gameplay de 20 minutes en 2 tables max"
            feedback="Retour constructif sur les points à travailler"
            accessDiscord={true}
            accessGroupe={true}
            accessRanges={true}
            accessVideos={true}
        />
        <CardPrice
            title="Pack 10 heures"
            price="500"
            duration="1H à 2H / semaine"
            gameplay=""
            feedback=""
            accessDiscord={true}
            accessGroupe={true}
            accessRanges={true}
            accessVideos={true}
        />
        <CardPrice
            title="Pack 20 heures"
            price="900"
            duration="1H à 2H / semaine"
            gameplay="2H00 de coaching offertes"
            feedback=""
            accessDiscord={true}
            accessGroupe={true}
            accessRanges={true}
            accessVideos={true}
        />
        <CardPrice
            title="Pack découverte"
            price="Gratuit"
            duration="1H00"
            gameplay="Venir avec un gameplay de 20 min en 2 tables"
            feedback="Retour constructif sur les points à travailler"
            accessDiscord={true}
            accessGroupe={true}
            accessRanges={true}
            accessVideos={true}
        />
    </div>
</div>
);
}