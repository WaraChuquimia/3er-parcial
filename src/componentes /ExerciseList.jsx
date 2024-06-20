import React from 'react';
import './ExerciseList.css';
import ExerciseItem from './ExerciseItem';

function ExerciseList() {
  const exercises = [
    {
      title: 'Puxada frontal',
      details: '3 series x 12 repeticiones',
      image: 'image1'
    },
    {
      title: 'Remada curvada',
      details: '3 series x 12 repeticiones',
      image: 'image2'
    },
    {
      title: 'Remada unilateral',
      details: '3 series x 12 repeticiones',
      image: 'image3'
    },
    {
      title: 'Levantamiento terra',
      details: '3 series x 12 repeticiones',
      image: 'image4'
    }
  ];

  
  return (
    <div className="exercise-list">
      {exercises.map((exercise, index) => (
        <ExerciseItem
          key={index}
          title={exercise.title}
          details={exercise.details}
          image={exercise.image}
        />
      ))}
    </div>
  );
}

export default ExerciseList;
