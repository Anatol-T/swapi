import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {planetsReducer} from "./planetsReducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {residentsReducer} from "./residentsReducer";

const rootReducer = combineReducers({
  planets: planetsReducer,
  residents: residentsReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<ThunkDispatch<AppRootStateType, unknown, any>>()

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;
