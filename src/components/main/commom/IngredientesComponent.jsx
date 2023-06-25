import React from 'react';
import colher from "../../../images/colher.png";

export default function IngredientesComponent({ ingredientes }) {
  return (
    <div>
      <ul>
        {ingredientes.map((ingrediente, index) => (
          <li key={index}>
            <img src={colher} alt="Colher" />
            <div className="ingredienteTxt">
              <p>{ingrediente}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
