

export default function contact() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-10 p-16">
      <div className="w-full max-w-4xl bg-white border border-gray-300 shadow-lg rounded-t-md">
        <div className="p-10">
          <div className="flex flex-wrap -mx-8">
            <div className="w-full lg:w-1/2 px-8">
              <h1 className="text-xl font-semibold text-gray-900 mb-4">Me contacter</h1>
              <p className="text-gray-600 mb-6">
                Vous avez des questions ou vous voulez en savoir plus?<br /> N'hésitez pas à me contacter en utilisant le formulaire ci-contre.<br /> Je vous répondrai dès que possible!
              </p>
              <h1 className="text-xl font-semibold text-gray-900 mb-4">Mais aussi</h1>
              <p className="text-gray-600 mb-6">
                Tu peux aussi me contacter via ces réseaux sociaux
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="#" aria-label="Instagram">
                  <img src="images/instagram.png" alt="Instagram" className="w-14 h-14" />
                </a>
                <a href="#" aria-label="Facebook">
                  <img src="images/facebook.png" alt="Facebook" className="w-14 h-14" />
                </a>
                <a href="#" aria-label="Discord">
                  <img src="images/discord.png" alt="Discord" className="w-14 h-14" />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input type="text" id="prenom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required placeholder="Prénom" />
                  </div>
                  <div>
                    <input type="text" id="nom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required placeholder="Nom" />
                  </div>
                </div>
                <div>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required placeholder="E-mail" />
                </div>
                <div>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required placeholder="Objet" />
                </div>
                <div>
                  <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required placeholder="Message"></textarea>
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Envoyer mon message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src="images/banniere.png" alt="Bannière" className="w-full h-24  object-fit: fill rounded-b-md" />
      </div>
    </div>
  );
}