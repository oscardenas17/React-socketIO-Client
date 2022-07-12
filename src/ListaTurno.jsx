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

      <div class="container">
        <div class="row">
          <div class="col">
            <Tablero />
          </div>
          <div class="col">
            <Turnos />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaTurno;
