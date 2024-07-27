export default function QuiSuisJe({ imageSrc, bio }) {
    return (
      <div className="flex flex-wrap items-center">
        <img src={imageSrc} alt="Photo de profil" className="w-full sm:w-1/2 p-4"/>
        <p className="w-full sm:w-1/2 p-4 text-lg">{bio}</p>
      </div>
    );
  }