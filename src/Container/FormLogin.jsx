import React,{ useState } from 'react'
import Habitacion from '../assets/cama.jpg';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import '../styles/Login.css';
import { Redirect } from 'react-router-dom';
import { setHostal } from '../helpers/SaveSession'


const FormLogin = ({users,agregarUsuario}) => {
    const { handleSubmit,register,errors } = useForm();
    const [exito,setExito] = useState(false)
    const [error,setError] = useState(false)

    const onSubmit = (data) =>{
        if(data.email.toLowerCase() === "zukytech@zukytech.com" && data.password.toLowerCase() === "123456789"){
            setExito(true)
            setHostal("Zuky")
        }else{
            setError(true)
        }
            
    }

    return (
       <>   
            { exito ? <Redirect to="/"/> : null}

           <div className="image-fondo" style={{backgroundImage: `url("${Habitacion}")`}}>
               <div className="p-8 bg-white shadow-lg rounded-lg">
                   <h1 className="font-medium text-3xl mb-10">Inicia Sesion</h1>
                   <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
                        <input type="text" ref={register} name="email" placeholder="Email" className="p-2 border  rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                        <input type="password" ref={register} name="password" placeholder="Password" className="p-2 border  rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"/>
                        <button className="p-2 bg-yellow-600 rounded-sm text-white">Iniciar Sesion</button>
                   </form>
               </div>
           </div>
       </>
    )
}


const mapStateToProps = (state) =>({
    users: state.usuarios
})



const mapDispatchToProps = (dispatch)=>({
    agregarUsuario(user){
        dispatch({
            type:"AGREGAR_CONTACTO",
            user
        })
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(FormLogin)
