import React, { useContext, useEffect, useId, useState } from "react";
import { SocketContext } from "../context/SocketContext";


const Turnos = () => {


  const [turnos, setTurnos] = useState( [] );
  const { socket } = useContext(SocketContext);
  
  //const [ticket, setTicket] = useState( [] );
  // const array = () =>{
  //   const nuevoArray = [...turnos, turnos]
  // }


  const turnoOut = (id) =>{
    console.log(id);
  // setTurnos( turnoPrevio => turnoPrevio.find( turno => turno.id !== id))
  }

  //escuchar lo emitido desde el server
  useEffect(() => {
    socket.on("dato-turno-server", (data) => {        
        //const newTurno = Object.values(data)
        // let añadirTurnos=[];
        //  añadirTurnos = [...almacena, almacena]
        //console.log(`  datos ` + almacena); 
        //console.log( data); 
      // setTurnos( turnoPrevio=>  turnoPrevio.concat( {...data, id: turnoPrevio.length }) );
      setTurnos (turnoPrevio=> [data, ...turnoPrevio]  )
      console.log( turnos); 
     
      //setTurnos(turnoPrevio= () =>  [...turnoPrevio, newTurno]); 
      
      //console.log( turnoPrevio=>  [...turnoPrevio, data]);
     
    });
    //return () => socket.off("dato-turno");
  }, []);

 
const id = useId();  

  const crearRows = () => {
    

    return turnos.slice(0,5).map((turno, index) => (
    
      <tr 
        // onClick={turnoOut.bind(null, turno.id) }
        key={ ` ${id}${index}`}>
        <td>
          <h3>{ turno.nombre}</h3>
        </td>
        <td>
          <h3>{turno.consultorio} </h3>
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
