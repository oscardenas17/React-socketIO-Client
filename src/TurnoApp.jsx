import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { SocketProvider } from './context/SocketContext'
import ListaTurno from './ListaTurno'
import Home from './Home';

// import { Helmet } from "react-helmet"

// const siteLanguage = 'es-MX'

export const TurnoApp = () => {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Routes>
        {/* <Helmet htmlAttributes={{
        lang: siteLanguage,
        }} 
    ><title lang={siteLanguage}>PT</title>  */}
          <Route index element={ <Home/> }/> 
          <Route path='turno/:ciudad'  element={  <ListaTurno />}/>
        {/* </Helmet> */}
        </Routes>


       
      </SocketProvider>
    </BrowserRouter>
  )
}
