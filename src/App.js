import { useEffect, useState } from "react";

import Tablero from "./components/Tablero";
import Turnos from "./components/Turnos";
import {useSocket} from "./hooks/useSocket";

function App() {

  const [turnos, setTurnos] = useState( [] );//pasar info de turno
  const {socket, online} = useSocket('http://localhost:4000');


//escuchar lo emitido desde el server
  useEffect(() => {    
    socket.on('dato-turno', (turno) =>{
      console.log(`                                                                     datos `+ turno.nombre);
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
