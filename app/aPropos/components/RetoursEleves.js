import { Carousel } from 'flowbite-react';

export default function RetoursEleves({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Retour élève ${index + 1}`} className="w-full"/>
      ))}
    </Carousel>
  );
}