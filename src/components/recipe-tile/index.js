import React from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";

export default function RecipeTile({ recipe }) {
  console.log(recipe);

  return (
    <div className="recipe-tile" onClick={() => window.open(recipe["recipe"]["url"])}>
      <img className="recipe-tile-img" src={recipe["recipe"]["image"]} alt={recipe["recipe"]["label"]} />
      <p className="recipe-tile-name" key={uuidv4()}>
        {recipe["recipe"]["label"]}
      </p>
    </div>
  );
}
