import { useContext } from "react";
import Tablero from "./components/Tablero";
import Turnos from "./components/Turnos";
import { SocketContext } from "./context/SocketContext";

function ListaTurno() {
  // const [turnos, setTurnos] = useState( [] );//pasar info de turno
  const { online } = useContext(SocketContext);

  return (
    <div className="App">
      <div className="alert m-0 p-0">
        <p>
          Servicio: 
          {online ? (
            <span className="text-success"> En linea</span>
          ) : (
            <span className="text-danger"> Desconectado</span>
          )}
        </p>
      </div>

      <Tablero />
      <Turnos />
    </div>
  );
}

export default ListaTurno;
