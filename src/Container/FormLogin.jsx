import React from 'react'
import Habitacion from '../assets/cama.jpg'
import '../styles/Login.css'

const FormLogin = () => {
    return (
       <>
           <div className="image-fondo" style={{backgroundImage: `url("${Habitacion}")`}}>
               <div className="p-8 bg-white shadow-lg rounded-lg">
                   <h1 className="font-medium text-3xl mb-10">Inicia Sesion</h1>
                   <form action="" className="flex flex-col space-y-4">
                        <input type="text" placeholder="Username" className="p-2 border  rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                        <input type="text" placeholder="Password" className="p-2 border  rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                        <button className="p-2 bg-yellow-600 rounded-sm text-white">Iniciar Sesion</button>
                   </form>
               </div>
           </div>
       </>
    )
}

export default FormLogin
