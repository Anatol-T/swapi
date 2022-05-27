import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
})

// api
export const swapiApi = {
  getPlanets () {
    return instance.get('planets')
  },
}

export type PlanetType = {
  name: string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: Array<string>,
  "films":Array<string>,
  "created": string,
  "edited": string,
  "url": string
}