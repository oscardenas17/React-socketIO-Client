import React from 'react'
// import { SocketContext } from "./context/SocketContext";
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div className=' col-9  my-5 mx-auto d-flex flex-row mb-3'>
       <button type="button" className="btn btn-success m-2">
       <Link
            className='text-white text-decoration-none '
            to="/turno/tunja"
               >Tunja</Link>
       </button>

       <button type="button" className="btn btn-success m-2">
       <Link
            className='text-white text-decoration-none '
            to="/turno/bucaramanga"
               >Bucaramanga
        </Link>
       </button>

       <button type="button" className="btn btn-success m-2">
       <Link
            className='text-white text-decoration-none '
            to="/turno/bogota"
               >Bogotá
        </Link>
       </button>
       
      
       
        
      
    </div>
  )
}

export default Home