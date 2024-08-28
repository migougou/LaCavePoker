"use client"

import useSupabaseTable from '../../hooks/useSupabaseTable';

export default function QuiSuisJe() {
  const { data: bioData, loading, error } = useSupabaseTable('Biographie');

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="flex flex-col items-center text-center py-10">
      <h1 className="text-4xl font-bold mb-4 w-full pt-16">QUI SUIS-JE ?</h1>
      {bioData.map((bio) => (
        <div 
          key={bio.id} 
          className="flex flex-col justify-center md:flex-row items-center w-full max-w-6xl mx-auto"
        >
          <img 
            src={bio.imageURL} 
            alt="Photo de profil" 
            className="w-full md:w-1/3 lg:w-1/2 p-4 max-w-none" 
          />
          <div className="w-full md:w-2/3 lg:w-3/4 p-4 lg:mt-10 md:mt-0 flex justify-center">
            <p className="text-base md:text-sm lg:text-lg max-w-md">{bio.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

