import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://swapi.dev/api',
})

// api
export const swapiApi = {
  getPlanets () {
    return instance.get('planets')
  },
  getResidents (url:string) {

    return instance.get(url)
  }
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
export type ResidentType = {
  name: string
  height: string
  mass: string
  hair_color: string,
  skin_color: string
  ye_color: string,
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[],
  starships: string[],
  created: string
  edited: string
  url: string
}