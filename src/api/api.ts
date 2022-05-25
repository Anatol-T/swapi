import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/',
})

// api
export const todolistsAPI = {
  getPlanets () {
    return instance.get('planets')
  },
}

export type PlanetType = {
  name: string,
  rotation_period: number,
  orbital_period: number,
  diameter: number,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: number,
  population: number,
  residents: Array<string>,
  "films":Array<string>,
  "created": string,
  "edited": string,
  "url": string
}