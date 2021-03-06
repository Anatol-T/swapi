import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchResidentsTC, setResidentsAC} from "../store/residentsReducer";
import {PlanetType, ResidentType} from "../api/api";
import {useAppSelector} from "../store/store";
import {PlanetOptionsList} from "../conponents/PlanetOptionsList";
import {ResidentCard} from "../conponents/ResidentCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from '@mui/material/Button';
import {Spinner} from "../conponents/Spinner";
import {useDispatch} from "react-redux";

type FilterType = "all" | "male" | "female"

export const Info = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const dispatch = useDispatch<any>()
  const navigate = useNavigate()
  const {planetName} = useParams<{ planetName: string }>()

  const loading = useAppSelector<boolean>(state => state.residents.loading)
  const planets: PlanetType[] = useAppSelector<PlanetType[]>(state => state.planets.planets)
  const planet = planets.filter(el => el.name === planetName)[0]

  const residents = useAppSelector<ResidentType[]>(state => state.residents.residents)

  const filteredResidents = (filter: FilterType) => {
    if (filter === "male") {
      return residents.filter(el => el.gender === 'male')
    }
    if (filter === "female") {
      return residents.filter(el => el.gender === 'female')
    }
    return residents
  }

  useEffect(() => {
    if (planetName) dispatch(fetchResidentsTC(planetName))
    return () => dispatch(setResidentsAC([]))
  }, [])

  const mappedResidentsCards = residents.length === 0
    ? <h3>No residents</h3>
    : filteredResidents(filter).map(el => <ResidentCard resident={el} key={el.name}/>)

  const goBack = () => navigate(`/`)

  return (
    <Container fixed>
      <Grid container justifyContent="center">
        <Grid item>
          <h2>Planet info</h2>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent={'space-around'}>
        <Grid item>
          <PlanetOptionsList planet={planet}/>
        </Grid>
        <Grid item>
          <h3>Filter</h3>
          <ButtonGroup size="small" variant="contained" color={"inherit"}>
            <Button onClick={() => setFilter('all')}
                    color={filter === 'all' ? "primary" : "inherit"}>
              all
            </Button>
            <Button onClick={() => setFilter('male')}
                    color={filter === 'male' ? "primary" : "inherit"}>
              male
            </Button>
            <Button onClick={() => setFilter('female')}
                    color={filter === 'female' ? "primary" : "inherit"}>
              female
            </Button>
          </ButtonGroup>
          <div style={{marginTop: '20px'}}>
            <Button onClick={goBack}>Go back</Button>
          </div>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <h2>Residents</h2>
          </Grid>
        </Grid>
      </Grid>
      {loading
        ? <Spinner/>
        : <Grid container spacing={3}>
          {mappedResidentsCards}
        </Grid>
      }
    </Container>
  );
};
