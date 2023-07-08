import React, { useState } from 'react';
import ExerciseContext from './ExerciseContext';

const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  const addExercise = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const deleteExercise = (exerciseId) => {
    const updatedExercises = exercises.filter((exercise) => exercise.id !== exerciseId);
    setExercises(updatedExercises);
  };

  return (
    <ExerciseContext.Provider value={{ exercises, addExercise, deleteExercise }}>
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseProvider;
