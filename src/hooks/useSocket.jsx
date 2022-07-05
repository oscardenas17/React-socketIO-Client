import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

//serverPath= http://localhost:4000
export const useSocket = (serverPath) => {
  //Conexión con el socket server - si el path del server no cambia, se guarda con memo para evitar dos clientes conectados siempre que se inicia la app
  const socket = useMemo(
    () =>
      io.connect(serverPath, {
        //SOCKETIO 3 > PIDE TRANSPORT
        transports: ["websocket"],
      }),
    [serverPath] // dependencia si el [serverPath] cambia se ejecuta de nuevo el memo
  );

  const [online, setOnline] = useState(false);

  //socket conectado
  useEffect(() => {
    setOnline(socket.connected);
  }, [socket]);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
  }, [socket]);

  return { //se expone el socket y el online del mismo
    socket,
    online,
  }
};
