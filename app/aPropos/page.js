import QuiSuisJe from './components/QuiSuisJe';
import MesCourbes from './components/MesCourbes';
import RetoursEleves from './components/RetoursEleves';

export default function Apropos(){
  return (
    <div className="space-y-8">
      <QuiSuisJe imageSrc="/path/to/image.jpg" bio="Voici ma biographie..."/>
      <MesCourbes />
      <RetoursEleves images={['/path/to/image1.jpg', '/path/to/image2.jpg']} />
    </div>
  )
}