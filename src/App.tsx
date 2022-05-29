import React, {useEffect} from 'react';
import './App.css';
import { Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Info} from "./pages/Info";
import {fetchPlanetsTC} from "./store/planetsReducer";
import {useAppDispatch, useAppSelector} from "./store/store";
import {ErrorPage} from "./pages/ErrorPage";
import {Spinner} from "./conponents/Spinner";

function App() {
  const dispatch = useAppDispatch()
  const init = useAppSelector<boolean>(state => state.planets.init)

  useEffect(()=>{
    dispatch(fetchPlanetsTC())
  }, [dispatch])

  if (!init) return <Spinner/>

  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/info/:planetName'} element={<Info/>}/>
        <Route path={'error'} element={<ErrorPage/>}/>
        <Route path={'404'} element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
        <Route path={'/*'} element={<Navigate to="404"/>}/>
      </Routes>
    </div>
  );
}

export default App;
