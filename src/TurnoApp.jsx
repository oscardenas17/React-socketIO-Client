import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { SocketProvider } from './context/SocketContext'
import ListaTurno from './ListaTurno'
import Home from './Home';

export const TurnoApp = () => {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Routes>

        <Route index element={ <Home/> }/> 
        <Route path='turno/:ciudad'  element={  <ListaTurno />}/>
          
        </Routes>


       
      </SocketProvider>
    </BrowserRouter>
  )
}
