import React, { useContext, useEffect, useId, useState } from "react";
import { SocketContext } from "../context/SocketContext";

import { useParams } from "react-router-dom";

const Turnos = () => {

  const params = useParams();
  const ciudad = params.ciudad
  console.log(params)

  const [turnos, setTurnos] = useState( [] );
  const { socket } = useContext(SocketContext);
  
  //const [ticket, setTicket] = useState( [] );
  // const array = () =>{
  //   const nuevoArray = [...turnos, turnos]
  // }


  // const turnoOut = (id) =>{
  //   console.log(id);
  // // setTurnos( turnoPrevio => turnoPrevio.find( turno => turno.id !== id))
  // }


  //escuchar lo emitido desde el server
  //1. enviar el room
  useEffect(() => {
    socket.emit('room', ciudad)
    console.log('desde front',ciudad)
  }, []);




   useEffect(() => {
     socket.on('respuesta', (data)=>{
       console.log(data)
       setTurnos (turnoPrevio=> [data, ...turnoPrevio]  )  
    })
   }, [socket]);


 
const id = useId();  

  const crearRows = () => {
    

    return turnos.slice(0,5).map((turno, index) => (
    
      <tr 
        // onClick={turnoOut.bind(null, turno.id) }
        key={ ` ${id}${index}`}>
        <td>
          <h3>{ turno.txtNombre}</h3>
        </td>
        <td>
          <h3>{turno.txtConsultorio} </h3>
        </td>
      </tr>
    ));
  };

  return (
    <div className="col-9  my-5 mx-auto">
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Consultorio</th>
          </tr>
        </thead>
        
        <tbody>{crearRows()}</tbody>
      </table>
    </div>
  );
};

export default Turnos;
