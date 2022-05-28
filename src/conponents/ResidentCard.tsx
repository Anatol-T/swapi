import React from 'react';
import {ResidentType} from "../api/api";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

type PropsType = {
  resident: ResidentType
}

export const ResidentCard = ({resident}:PropsType) => {
  return (
    <Grid item xs="auto">
      <Paper elevation={8} style={{padding: '10px', width: "250px"}}>
        <h3>{`Name: ${resident.name}`}</h3>
        <p>{`Mass: ${resident.mass}`}</p>
        <p>{`Height: ${resident.height}`}</p>
        <p>{`Eye color: ${resident.ye_color}`}</p>
        <p>{`Hair color: ${resident.hair_color}`}</p>
        <p>{`Skin color: ${resident.skin_color}`}</p>
        <p>{`Birth year: ${resident.birth_year}`}</p>
        <p>{`Gender: ${resident.gender}`}</p>
      </Paper>
    </Grid>
  );
};

