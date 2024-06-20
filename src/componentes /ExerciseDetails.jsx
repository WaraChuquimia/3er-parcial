import React from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = ({ details }) => {
  return (
    <div className="exercise-details">
      {details}
    </div>
  );
};

export default ExerciseDetails;
