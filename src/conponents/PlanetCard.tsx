import React from 'react';
import {PlanetType} from "../api/api";
import {useNavigate} from "react-router-dom";
import {PlanetOptionsList} from "./PlanetOptionsList";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

type PropsType = {
  planet: PlanetType
}

export const PlanetCard = ({planet}: PropsType) => {
  const navigate = useNavigate()

  const showInfo = () => {
    navigate(`info/${planet.name}`)

  }

  return (
    <Grid item xs="auto" style={{cursor: 'pointer'}}>
      <Paper elevation={8} style={{padding: '10px', width: "250px"}} onClick={showInfo}>
        <PlanetOptionsList planet={planet}/>
      </Paper>
    </Grid>
  );
};

