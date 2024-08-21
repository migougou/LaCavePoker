"use client"
import Link from 'next/link';
import { MoonIcon, UserIcon, Bars3Icon, SunIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function NavBar({ dark, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false); // Ajouter un état pour le menu déroulant

  return (
    <div className={dark ? "dark" : ""}>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="p-4 px-10 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <img src="images/logo 2.png" className="h-12" alt="La Cave Poker Logo" />
            </Link>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">La Cave Poker</span>
          </div>
          <div className="flex items-center"></div>
          <div className="flex items-center md:hidden">
                      {/* Bouton toggle et icônes à côté seulement sur petit écran */}
                      <div onClick={toggleDarkMode} className="cursor-pointer mr-4 md:hidden">
              {dark ? (
                <SunIcon className="h-6 w-6 text-gray-900 dark:text-white" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-900 dark:text-white" />
              )}
            </div>
          <UserIcon className="h-6 w-6 mr-4 text-gray-900 dark:text-white" />
          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />
            </button>
            </div>
            <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'} text-right`} id="navbar-default">
              <ul className="flex flex-col md:flex-row md:space-x-8 rtl:md:space-x-reverse mt-4 md:mt-0 bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                <li onClick={toggleDarkMode} className="hidden md:block cursor-pointer">
                  {dark ? (
                    <SunIcon className="h-6 w-6 text-gray-900 dark:text-white" />
                  ) : (
                    <MoonIcon className="h-6 w-6 text-gray-900 dark:text-white" />
                  )}
                </li>
                <li className="hidden md:block">
                  <UserIcon className="h-6 w-6 text-gray-900 dark:text-white" />
                </li>
              </ul>
            </div>
        </div>
        <div className="px-32">
          <hr className="my-6 border-stone-950 sm:mx-auto dark:border-gray-700 lg:my-0" />
        </div>
      </nav>
    </div>
  )
}
