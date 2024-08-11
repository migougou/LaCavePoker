import Link from 'next/link';
import { MoonIcon, UserIcon } from '@heroicons/react/24/solid';


export default function NavBar() {

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between p-4 px-10">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/"><img src="images/logo 2.png" className="h-12" alt="La Cave Poker Logo" /></Link>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">La Cave Poker
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Accueil</Link>
                </li>
                <li>
                  <Link href="/aPropos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">A Propos</Link>
                </li>
                <li>
                  <Link href="/outils" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Outils</Link>
                </li>
                <li>
                  <Link href="/videos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Vidéos</Link>
                </li>
                <li>
                  <Link href="/coaching" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Coaching</Link>
                </li>
                <li>
                  <Link href="/ranges" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Ranges</Link>
                </li>
                <li>
                  <MoonIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </li>
                <li>
                  <UserIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-32">
          <hr className="my-6 border-stone-950 sm:mx-auto dark:border-gray-700 lg:my-0" />
        </div>
      </nav>
    </div>
  )
}