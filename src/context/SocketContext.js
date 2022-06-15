import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";



export const SocketContext = createContext(); 


//high order component mas facíl de utilizar
export const SocketProvider = ( {children}) => {

    const {socket, online} = useSocket('http://localhost:4000');
    return (
        <SocketContext.Provider value={ {socket, online} } >
            {children}
        </SocketContext.Provider>
    )
}