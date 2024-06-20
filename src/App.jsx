import React from 'react';
import "./App.css";
import ExerciseList from "./componentes /ExerciseList";

function App() {
  return (
    <div className="root">
      <div className="alineacion">
        <div className="alitext">
          <div className="textitou">Ejercicios</div>
        <div className="textitoo">4</div>
        </div>
      
      <div className="ejerciu"><ExerciseList/></div>
      </div>
      
    </div>
  );
}

export default App;


