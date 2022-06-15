import React, { useState } from 'react'

const Turnos = ( {data} ) => {

// const [turnos, setturnos] = useState(data);
// console.log(data);
// console.log(turnos);
    const crearRows = () =>{
       
        return(

             data.map( turno => (
                <tr key={turno.nombre}>
                    <td> 
                        <h3>{turno.nombre}</h3>
                    </td>
                    <td> 
                        <h3>{turno.consultorio} </h3>
                    </td>
                </tr>
            )  )
          
            
        )
        
    }


  return (

    <div className="col-9  my-5 mx-auto">
       <table className='table table-stripped'>
           <thead>
               <tr>
                   <th>Paciente</th>
                   <th>Consultorio</th>
               </tr>
           </thead>

           <tbody>{crearRows()}</tbody>

       </table>
  </div>
  )
}

export default Turnos