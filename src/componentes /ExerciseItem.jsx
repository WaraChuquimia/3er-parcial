import React from 'react';
import './ExerciseItem.css';
import ExerciseImage from './ExerciseImage';

function ExerciseItem({ title, details, image }) {
  return (
    <div className="exercise-item-container">
      <div className="exercise-item">
        <ExerciseImage ejercicio={image} />
        <div className="exercise-details">
          <h2>{title}</h2>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
}

export default ExerciseItem;
