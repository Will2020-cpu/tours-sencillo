import React, { Fragment, useState } from 'react'
import cx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteHostal } from '../helpers/SaveSession'
import '../styles/NavBar.css';





//Componente navbar primera seccion
const NavBar = ({ user }) => {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <div className="w-full bg-white sticky top-0 z-50">
                <div className="w-9/12 m-auto h-24 flex items-center justify-between">
                    <div><Link to="/" className="text-2xl font-bold"><span className="text-yellow-700">Zuky</span> Hostel</Link></div>
                    <nav className={cx({
                        "uppercase space-x-4 text-gray-600 font-medium flex items-center justify-between": true,
                        "oculta": true,
                        "active space-y-8 text-center m-0":open
                    })}>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Inicio</Link>
                        <Link to="/hostales" className="hover:text-yellow-700 transition duration-500 ease">Hosteles</Link>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Blog</Link>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Rooms</Link>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Contactos</Link>
            
                        <div className="flex lg:flex-row  md:flex-col space-x-4">
                            {Object.keys(user).length > 0 ? (
                                <div className="flex lg:flex-row md:flex-col space-x-4">
                                    <Link to="/dashboard" className="hover:text-yellow-700 transition duration-500 ease">{user.nombre}</Link>
                                    <Link to="/" onClick={()=>deleteHostal()} className="hover:text-yellow-700 transition duration-500 ease">Salir</Link>

                                </div>
                            ):(
                                <Link to="/signin" className="hover:text-yellow-700 transition duration-500 ease">Iniciar Sesion</Link>
                            )}
                        </div>
                    </nav>
                    <button className="text-gray-600 sm:block lg:hidden z-50 focus:outline-none" onClick={()=> setOpen(!open)}>{open ? <FontAwesomeIcon icon={faTimes}/>  : <FontAwesomeIcon icon={faBars}/>}</button>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) =>({
    user:state.user
})


export default connect(mapStateToProps, null) (NavBar)
