import { useEffect, useState } from "react";
import io from 'socket.io-client'

import Tablero from "./components/Tablero";
import Turnos from "./components/Turnos";

//COnexión con el server socket
const connectSocketServer = () =>{
  const socket = io.connect('http://localhost:4000', {
    //SOCKETIO 3 > PIDE TRANSPORT
    transports: ['websocket']
  })
  return socket;
}


function App() {

  const [socket] = useState(connectSocketServer);
  const [online, setOnline] = useState(false);
  const [turnos, setTurnos] = useState( [] );//pasar info de turno

  //console.log(socket);

  //socket conectado
  useEffect(() => {
    setOnline( socket.connected )
  }, [socket]);

  useEffect(() => {
    
    socket.on('connect', () =>{
      setOnline(true)
    })
  }, [socket]);

  useEffect(() => {
    
    socket.on('disconnect', () =>{
      setOnline(false)
    })
  }, [socket]);

//escuchar lo emitido desde el server
  useEffect(() => {    
    socket.on('dato-turno', (turno) =>{
      console.log(`aca llegan los datos `+ turno.nombre);
      setTurnos( [turno] )
    })
  }, [socket]);

  

  return (
    <div className="App">

        <div className="alert m-0 p-0">
          <p>
            Service Status:
            {
              online 
              ? <span className="text-success"> Online</span> 
              : <span className="text-danger"> Offline</span>
            }
          
          </p>
        </div>

      <Tablero/>
      <Turnos data ={turnos}/>
    </div>
  );
}

export default App;
