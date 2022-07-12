
import { useContext, useEffect, useId, useState } from "react";
import { SocketContext } from "../context/SocketContext";

import { useParams } from "react-router-dom";
//import { useSpeechSynthesis } from 'react-recipes';
// import { useSpeechSynthesis } from "react-speech-kit";



const Turnos = () => {

  

  const params = useParams();

  const [turnos, setTurnos] = useState( [] );
 
  const { socket } = useContext(SocketContext);


  //const voices = window.speechSynthesis.getVoices(); 
      //console.log('voces',voices);
         
    



 // const  {speak, voices, supported }  = useSpeechSynthesis();

  //const voice = voices[1] || voices[1];
 //const voice='';


  //escuchar lo emitido desde el server
  //1. enviar el room
  useEffect(() => { 
    socket.emit('room', params.ciudad)
    console.log('desde front',params.ciudad)
   
  }, ); 

   

   useEffect(() => { 
     socket.on('respuesta', (data)=>{  
        
      setTurnos (turnoPrevio=> [data, ...turnoPrevio]  )  
      const value = `${data.txtNombre} dirigirse al consultorio ${data.txtConsultorio}` 
      const voices = window.speechSynthesis.getVoices(); 
      const ut = new SpeechSynthesisUtterance(
        value
      );
      
      ut.lang = "es-MX";
       ut.volume =1;
       ut.rate =1;
       ut.pitch =1;
       ut.voice = voices[0] || voices[1] ; 
    

    //  const hola={ default: true,
    //   lang: "es-MX",
    //   localService: true,
    //   name: "Microsoft Raul - Spanish (Mexico)",
    //   voiceURI: "Microsoft Raul - Spanish (Mexico)"}
    //      ut.voice = new SpeechSynthesisVoice(
    //       hola
    //       )

      speechSynthesis.speak(ut);
  
       console.log(ut);
      
      // speack()
      //  speak( {text: value  , voice: ut.voice} )  
           
    })  
    //console.log( 'afuetra',voice,'adentro2', voices[1] ); 
    //speak( { voices: voice} ) 
   }, [socket ]);

  
const id = useId(); 

// if (!supported) {
//   return 'Speech is not supported. Upgrade your browser';
// }


  const crearRows = () => {
    

    return turnos.slice(0,6).map((turno, index) => (
    
      <tr 
        // onClick={turnoOut.bind(null, turno.id) }
        key={ ` ${id}${index}`}>
         <td>
         <h3> {turno.txtNombre}</h3>
        </td>
        <td>
          {/* <input type="text"  disabled value={value} onChange={() => setValue(turno.txtNombre)} /> */}
          <h3> { turno.txtConsultorio}</h3>
          
        </td>
      
      </tr>
    ));
  };

  return (

   

    <div className="">    


<h1 className="text-center">Atendiendo</h1>
        <hr />
      <table className="table table-stripped">

     


        <thead>
          <tr>
            <th>Paciente</th>
            <th>Consultorio</th>
          </tr>
        </thead>
        
        <tbody>
          {crearRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Turnos;



// import React from "react";
// import { useSpeechSynthesis } from "react-speech-kit";
// const Turnos = () => {
//   const [value, setValue] = React.useState("");
//   const { speak } = useSpeechSynthesis();
//   return (
//     <div className="speech">
//       <div className="group">
//         <h2>Text To Speech Converter Using React Js</h2>
//       </div>
//       <div className="group">
//         <textarea
//           rows="10"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         ></textarea>
//       </div>
//       <div className="group">
//         <button onClick={() => speak({ text: value })}>Speech</button>
//       </div>
//     </div>
//   );
// };
// export default Turnos;


