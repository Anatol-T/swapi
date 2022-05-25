import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Main} from "./pages/main";
import {Info} from "./pages/Info";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='info' element={<Info/>}/>
        <Route path='404' element={<h1 style={{textAlign: 'center'}}>404: PAGE NOT FOUND</h1>}/>
        <Route path='*' element={<Navigate to="404"/>}/>
      </Routes>
    </div>
  );
}

export default App;
