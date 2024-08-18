import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="text-black dark:text-gray-300 bg-white dark:bg-gray-900">
            <div className="px-32">
                <hr className="border-stone-950 sm:mx-auto dark:border-gray-700" />
            </div>
            <div className="px-20 pt-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href="/"><img src="images/logo 2.png" className="h-28" alt="La Cave Poker" /></Link>
                    </div>
                    <div className="flex-grow relative">
                        <div className="flex flex-col items-center mt-4">
                            <span className="text-xl font-semibold mb-4 dark:text-gray-300">Toutes nos pages</span>
                            <div className="flex flex-wrap justify-center space-x-6 text-sm">
                                <div className="flex flex-col space-y-2">
                                    <Link href="/" className="hover:text-blue-700 dark:hover:text-blue-400">Accueil</Link>
                                    <Link href="/aPropos" className="hover:text-blue-700 dark:hover:text-blue-400">À propos</Link>
                                    <Link href="/outils" className="hover:text-blue-700 dark:hover:text-blue-400">Outils</Link>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Link href="/coaching" className="hover:text-blue-700 dark:hover:text-blue-400">Coaching</Link>
                                    <Link href="/ranges" className="hover:text-blue-700 dark:hover:text-blue-400">Ranges</Link>
                                    <Link href="/videos" className="hover:text-blue-700 dark:hover:text-blue-400">Vidéos</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/contact" className="text-lg font-semibold hover:text-blue-700 dark:hover:text-blue-400 absolute top-0 right-0 mr-24 pt-12">Me contacter</Link>
                    </div>
                </div>
                <div className="my-2 flex justify-between items-center">
                    <div className="flex-auto flex justify-start">
                        <a href="#" className="text-sm hover:text-blue-700 dark:hover:text-blue-400 pr-4">Conditions générales d'utilisation</a>
                        <a href="#" className="text-sm hover:text-blue-700 dark:hover:text-blue-400">Mentions légales</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:opacity-75">
                            <img src="images/youtube.png" alt="YouTube" className="h-12" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <img src="images/twitch.png" alt="Twitch" className="h-12" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <img src="images/instagram.png" alt="Instagram" className="h-12" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <img src="images/facebook.png" alt="Facebook" className="h-12" />
                        </a>
                        <a href="#" className="hover:opacity-75">
                            <img src="images/discord.png" alt="Discord" className="h-12" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
