import { ResidentType, swapiApi} from "../api/api";
import {Dispatch} from "redux";
import {AppRootStateType} from "./store";
import {setErrorAC} from "./planetsReducer";

type InitialStateType = {
  residents: ResidentType[]
  loading: boolean
}
const initialState: InitialStateType = {
  residents: [],
  loading: false,
}

export const residentsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case "RESIDENTS/SET-RESIDENTS":
      return {...state,  residents: action.residents}
    case "RESIDENTS/SET-LOADING":
      return {...state, loading: action.loading}
    default:
      return {...state}
  }
}

export const setResidentsAC = (residents: ResidentType[]) => ({type: 'RESIDENTS/SET-RESIDENTS', residents} as const)
export const setLoadingAC = (loading: boolean) => ({type: 'RESIDENTS/SET-LOADING', loading} as const)

export type SetResidentsACType = ReturnType<typeof setResidentsAC>
export type SetLoadingACType = ReturnType<typeof setLoadingAC>

type ActionsType =
  | SetResidentsACType
  | SetLoadingACType

// thunks
export const fetchResidentsTC = (name: string) => {
  return (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const index = getState().planets.planets.findIndex(el => el.name === name)
    const urls = getState().planets.planets[index].residents
    dispatch(setLoadingAC(true))
    Promise.all(urls.map(url => swapiApi.getResidents(url)))
      .then(res=>{
        const residents = res.map(el => el.data)
        dispatch(setResidentsAC(residents))
        dispatch(setLoadingAC(false))
      })
      .catch((err)=>{
        console.log(err)
        dispatch(setErrorAC('something went wrong'))
      })
  }
}