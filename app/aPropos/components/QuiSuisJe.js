"use client"
import { useState, useEffect } from 'react';
import useSupabaseTable from '../../hooks/useSupabaseTable';

export default function QuiSuisJe() {
  const [isClient, setIsClient] = useState(false);
  const { data: bioData, loading, error } = useSupabaseTable('Biographie');

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Ne rien rendre côté serveur

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error.message}</div>;

  return (
    <div className="flex flex-col items-center text-center py-10">
      <h1 className="text-4xl font-bold mb-4 w-full pt-16">QUI SUIS-JE ?</h1>
      {bioData && bioData.map((bio) => (
        <div key={bio.id}>
          <div className="flex flex-col md:flex-row items-center w-full">
            <img src={bio.imageURL} alt="Photo de profil" className="w-full md:w-1/2 lg:w-1/3 p-4 max-w-xs md:max-w-none" />
            <p className="w-full md:w-1/2 lg:w-2/3 p-4 mt-10 text-lg">{bio.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}