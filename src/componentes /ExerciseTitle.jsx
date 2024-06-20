import React from 'react';
import './ExerciseTitle.css';

const ExerciseTitle = ({ title }) => {
  return (
    <div className="exercise-title">
      {title}
    </div>
  );
};

export default ExerciseTitle;
