import React from 'react';
import {PlanetType} from "../api/api";

type PropsType = {
  planet: PlanetType
}

export const PlanetOptionsList = ({planet}:PropsType) => {
  return (
    <>
      <h3>{`Name: ${planet.name}`}</h3>
      <p>{`Climate: ${planet.climate}`}</p>
      <p>{`Diameter: ${planet.diameter}`}</p>
      <p>{`Gravity: ${planet.gravity}`}</p>
      <p>{`Orbital period: ${planet.orbital_period}`}</p>
      <p>{`Population: ${planet.population}`}</p>
      <p>{`Rotation period: ${planet.rotation_period}`}</p>
      <p>{`Surface water: ${planet.surface_water}`}</p>
      <p>{`Terrain: ${planet.terrain}`}</p>
    </>
  );
};

