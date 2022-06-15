import React from 'react'
import App from './App'
import { SocketProvider } from './context/SocketContext'

export const TurnoApp = () => {
  return (
    <SocketProvider>
        <App />
    </SocketProvider>
  )
}
