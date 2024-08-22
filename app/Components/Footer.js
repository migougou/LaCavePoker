import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="text-black dark:text-gray-300 bg-white dark:bg-gray-900">
            <div className="px-32">
                <hr className="border-stone-950 sm:mx-auto dark:border-gray-700" />
            </div>
            <div className="px-20 pt-2">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex justify-center w-full sm:justify-start sm:w-auto">
                        <Link href="/"><img src="images/logo 2.png" className="h-28" alt="La Cave Poker" /></Link>
                    </div>
                    <div className="flex-grow relative">
                        <div className="flex flex-col items-center mt-4">
                            <span className="text-xl font-semibold mb-4 dark:text-gray-300">Toutes nos pages</span>
                            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
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
                            <Link href="/contact" className="text-lg font-semibold hover:text-blue-700 dark:hover:text-blue-400 mt-4 sm:absolute sm:top-0 sm:right-0 sm:mr-24">Me contacter</Link>
                        </div>
                    </div>
                </div>
                <div className="my-8 flex flex-col sm:flex-row justify-between items-center">
                    <div className="flex flex-row justify-between w-full sm:w-auto space-x-2">
                        <a href="#" className="text-sm hover:text-blue-700 dark:hover:text-blue-400 underline">Conditions générales d'utilisation</a>
                        <a href="#" className="text-sm hover:text-blue-700 dark:hover:text-blue-400 underline">Mentions légales</a>
                    </div>
                    <div className="flex justify-center sm:justify-end w-full sm:w-auto space-x-4 pt-4 sm:pt-0">
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
