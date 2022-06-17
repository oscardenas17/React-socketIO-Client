import { useContext } from "react";
import Tablero from "./components/Tablero";
import Turnos from "./components/Turnos";
import { SocketContext } from "./context/SocketContext";

function HomePage() {
  // const [turnos, setTurnos] = useState( [] );//pasar info de turno
  const { online } = useContext(SocketContext);

  return (
    <div className="App">
      <div className="alert m-0 p-0">
        <p>
          Service Status:
          {online ? (
            <span className="text-success"> Online</span>
          ) : (
            <span className="text-danger"> Offline</span>
          )}
        </p>
      </div>

      <Tablero />
      <Turnos />
    </div>
  );
}

export default HomePage;
