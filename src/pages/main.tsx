import React from 'react';
import {useAppSelector} from "../store/store";
import {PlanetType} from "../api/api";
import {Planet} from "../conponents/Planet";

export const Main = () => {


  const planets = useAppSelector<PlanetType[]>(state => state.planets.planets)
  const loading = useAppSelector<boolean>(state => state.planets.loading)


  return (
    <div>
      {loading && <div>loading...</div>}
      {!loading && planets.map(planet => {
        return (
          <Planet planet={planet} key={planet.name}/>
        )
      })}
    </div>
  );
};
