import React from "react";

export default function About({pokemonData}) {

  return (
    <>
      <div>
        <h2  className='section-title'>About Pokemon</h2>
        <ul>
          <li><b>{"Abilities: "}</b>{pokemonData?.abilities?.map((ability) => ability.ability.name).join(", ")}</li>
          <li><b>{"Height: "}</b>{pokemonData?.height} + "cm"</li>
          <li><b>{"Weight: "}</b>{pokemonData?.weight} + "kg"</li>
          <li><b>{"Base Experience: "}</b>{pokemonData?.base_experience}</li>
          <li><b>{"Order: "}</b>{pokemonData?.order}</li>
        </ul>
      </div>
    </>
  );
}
