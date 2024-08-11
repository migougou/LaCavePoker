'use client';
import CardPrice from "./components/cardPrice"


export default function Coaching() {



return (
    <div className="py-10 text-center">
        <div className="py-10 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-3 pb-16">COACHING</h1>
            <p className="mb-5">Voici un choix de coaching que je vous propose.Vous pouvez me poser des questions sur n’importe quelle offre, en m’écrivant dans contact ou via mes réseaux.</p>
        </div>
        <div className="flex justify-around">
                <CardPrice title="LinkFinder" price="30" teamMembers="2" storage="20GB" integrationHelp={true} />
                <CardPrice title="Premium plan" price="99" teamMembers="5" storage="50GB" integrationHelp={true} />
                <CardPrice title="Enterprise plan" price="199" teamMembers="10" storage="100GB" integrationHelp={true} />
                <CardPrice title="Custom plan" price="Contact us" />
            </div>
    </div>
);
}