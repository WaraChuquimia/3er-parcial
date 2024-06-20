import React from 'react';
import './ExerciseImage.css';
import image1 from "../assets/puxada.png";
import image2 from '../assets/remada.png';
import image3 from '../assets/remadauni.png';
import image4 from '../assets/levantamiento.png';

export const Image1 = image1;
export const Image2 = image2;
export const Image3 = image3;
export const Image4 = image4;

const images = {
  image1,
  image2,
  image3,
  image4
};

const ExerciseImage = ({ ejercicio }) => {
  const selectedImage = images[ejercicio];
  
  return (
    <div className="exercise-image">
      {selectedImage ? (
        <img src={selectedImage} alt={ejercicio} />
      ) : (
        <p>Imagen no disponible</p>
      )}
    </div>
  );
};

export { images };

export default ExerciseImage;
