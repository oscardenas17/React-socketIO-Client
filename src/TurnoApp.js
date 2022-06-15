import React from 'react'

import { SocketProvider } from './context/SocketContext'
import HomePage from './HomePage'

export const TurnoApp = () => {
  return (
    <SocketProvider>
        <HomePage />
    </SocketProvider>
  )
}
