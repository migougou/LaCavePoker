"use client"
import useSupabaseTable from '../hooks/useSupabaseTable'

export default function CoachingPage() {
  const { data, loading, error } = useSupabaseTable("CardPrice");

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1 className="mt-10 text-3xl font-bold">Tarifs de Coaching</h1>
      {data.length > 0 ? (
        <ul className="mt-4 space-y-4">
          {data.map((card) => (
            <li key={card.id} className="border p-4 rounded-lg shadow">
              <p>Pack: {card.pack}</p>
              <p>Price: {card.price}</p>
              <p>Time: {card.time}</p>
              <p>Line: {card.line1}</p>
              <p>Message: {card.line2}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun tarif trouvé.</p>
      )}
    </div>
  );
}