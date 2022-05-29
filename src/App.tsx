import React, {useEffect} from 'react';
import './App.css';
import { Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Info} from "./pages/Info";
import {fetchPlanetsTC} from "./store/planetsReducer";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./store/store";
import spinner from "../src/assets/DoubleRingSpinner.svg"
import {ErrorPage} from "./pages/ErrorPage";

function App() {
  const dispatch = useDispatch<any>()
  const init = useAppSelector<boolean>(state => state.planets.init)

  useEffect(()=>{
    dispatch(fetchPlanetsTC())
  }, [dispatch])

  if (!init) return <div className={'loading'}><img src={spinner} alt="loading..."/></div>
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/info/:planetName'} element={<Info/>}/>
        <Route path={'error'} element={<ErrorPage/>}/>
        <Route path='404' element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
        <Route path={'/*'} element={<Navigate to="404"/>}/>
      </Routes>
    </div>
  );
}

export default App;
