import {PlanetType} from "../api/api";


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

export const planetsReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    default:
      return {...state}
  }
}