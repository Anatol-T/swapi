import {PlanetType, swapiApi} from "../api/api";
import {Dispatch} from "redux";


type InitialStateType = {
  planets: PlanetType[]
  loading: boolean
  error: string | null
}
const initialState: InitialStateType = {
  planets: [],
  loading: false,
  error: '',
}

export const planetsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "PLANETS/SET-PLANETS":
      return {...state, planets: action.planets}
    case "PLANETS/SET-LOADING":
      return {...state, loading: action.loading}
    case "PLANETS/SET-ERROR":
      return {...state, error: action.error}
    default:
      return {...state}
  }
}

export const setPlanetsAC = (planets: PlanetType[]) => ({type: 'PLANETS/SET-PLANETS', planets} as const)
export const setErrorAC = (error: string | null) => ({type: 'PLANETS/SET-ERROR', error} as const)
export const setLoadingAC = (loading: boolean) => ({type: 'PLANETS/SET-LOADING', loading} as const)

export type SetPlanetsACType = ReturnType<typeof setPlanetsAC>
export type SetLoadingACType = ReturnType<typeof setLoadingAC>
export type SetAppErrorACType = ReturnType<typeof setErrorAC>

type ActionsType = SetAppErrorACType
  | SetLoadingACType
  | SetPlanetsACType

// thunks
export const fetchPlanetsTC = () => {
  return (dispatch: Dispatch) => {
    dispatch(setLoadingAC(true))
    swapiApi.getPlanets()
      .then((res) => {
        dispatch(setPlanetsAC(res.data.results))
        dispatch(setLoadingAC(false))
      })
  }
}
//const [ planets, films, people ] = await Promise.all(urls.map(url => getAllPages(url)));