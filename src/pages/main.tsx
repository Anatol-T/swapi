import React from 'react';
import {useAppSelector} from "../store/store";
import {PlanetType} from "../api/api";
import {PlanetCard} from "../conponents/PlanetCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export const Main = () => {


  const planets = useAppSelector<PlanetType[]>(state => state.planets.planets)
  const init = useAppSelector<boolean>(state => state.planets.init)


  return (
      <Container fixed>
        <Grid container justifyContent="center">
          <Grid item>
            <h2>Planets list</h2>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {!init && <div>loading...</div>}
          {init && planets.map(planet => {
            return (
              <PlanetCard planet={planet} key={planet.name}/>
            )
          })}
        </Grid>
      </Container>
  );
};
