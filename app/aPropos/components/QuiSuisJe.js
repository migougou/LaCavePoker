export default function QuiSuisJe({ bio }) {
  return (
    <div className="flex flex-col items-center text-center py-10">
      <h1 className="text-4xl font-bold mb-4 w-full pt-16">QUI SUIS-JE ?</h1>
      <div className="flex flex-col justify-center md:flex-row items-center w-full">
        <img src="images/Seyfo.png" alt="Photo de profil" className="w-full md:w-auto p-4" />
        <p className="w-full md:w-1/2 p-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, velit eget sodales pretium, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Cras id turpis non purus facilisis semper. Phasellus tempor quam eu dui fermentum, non consequat nulla dignissim. Vestibulum dignissim eros eget augue maximus feugiat. Vivamus at urna libero. Nullam tincidunt ligula id odio convallis, nec eleifend mauris tristique. Maecenas ac efficitur enim, at egestas lectus. Integer posuere urna nec eleifend efficitur.
          Sed eu nisi lacinia, congue lorem vitae, feugiat velit. Nam sit amet convallis ipsum. Duis fermentum imperdiet velit, a dictum lacus tempor ut. Nullam commodo sollicitudin justo, vel vehicula libero cursus id. Sed a quam vel ligula volutpat tincidunt. Donec sodales interdum libero. Curabitur vitae augue auctor, tempor justo sit amet, maximus nunc. Phasellus ultrices interdum quam, non volutpat odio posuere nec.</p>
      </div>
    </div>
  );
}