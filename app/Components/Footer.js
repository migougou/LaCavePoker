import Link from 'next/link';

export default function Footer() {
    return (
        <footer class="text-black">
            <div className="px-32">
                <hr className="border-stone-950 sm:mx-auto dark:border-gray-700" />
            </div>
            <div class="px-20 pt-2">
                <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-4">
                        <img src="images/logo 2.png" class="h-28" alt="La Cave Poker" />
                    </div>
                    <div class="flex-grow relative">
                        <div class="flex flex-col items-center mt-4">
                            <span class="text-xl font-semibold mb-4">Toutes nos pages</span>
                            <div class="flex flex-wrap justify-center space-x-6 text-sm">
                                <div class="flex flex-col space-y-2">
                                    <Link href="/" class="hover:underline">Accueil</Link>
                                    <Link href="/aPropos" class="hover:underline">À propos</Link>
                                    <Link href="/outils" class="hover:underline">Outils</Link>
                                </div>
                                <div class="flex flex-col space-y-2">
                                    <Link href="/coaching" class="hover:underline">Coaching</Link>
                                    <Link href="/ranges" class="hover:underline">Ranges</Link>
                                    <Link href="/videos" class="hover:underline">Vidéos</Link>
                                </div>
                            </div>
                        </div>
                        <Link href="/contact" class="text-lg font-semibold hover:underline absolute top-0 right-0 mr-24 pt-12">Me contacter</Link>
                    </div>
                </div>
                <div class="my-2 flex justify-between items-center">
                    <div class="flex-auto flex justify-start">
                        <span class="text-sm pr-4">Conditions générales d'utilisation</span>
                        <span class="text-sm">Mentions légales</span>
                    </div>
                    <div class="flex space-x-4">
                        <a href="#" class="hover:opacity-75">
                            <img src="images/youtube.png" alt="YouTube" class="h-12" />
                        </a>
                        <a href="#" class="hover:opacity-75">
                            <img src="images/twitch.png" alt="Twitch" class="h-12" />
                        </a>
                        <a href="#" class="hover:opacity-75">
                            <img src="images/instagram.png" alt="Instagram" class="h-12" />
                        </a>
                        <a href="#" class="hover:opacity-75">
                            <img src="images/facebook.png" alt="Facebook" class="h-12" />
                        </a>
                        <a href="#" class="hover:opacity-75">
                            <img src="images/discord.png" alt="Discord" class="h-12" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}