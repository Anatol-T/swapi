import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {planetsReducer} from "./planetsReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {residentsReducer} from "./residentsReducer";

const rootReducer = combineReducers({
  planets: planetsReducer,
  residents: residentsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;