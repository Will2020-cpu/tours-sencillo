import React, { Fragment, useState } from 'react'
import cx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css';


//Componente navbar primera seccion
const NavBar = () => {
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
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Hosteles</Link>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Blog</Link>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Rooms</Link>
                        <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Contactos</Link>
            
                        <div className="flex lg:flex-row  md:flex-col space-x-4">
                            <Link to="/signin" className="hover:text-yellow-700 transition duration-500 ease">Iniciar Sesion</Link>
                            <Link to="/" className="hover:text-yellow-700 transition duration-500 ease">Registrate</Link>
                        </div>
                    </nav>
                    <button className="text-gray-600 sm:block lg:hidden z-50 focus:outline-none" onClick={()=> setOpen(!open)}>{open ? <FontAwesomeIcon icon={faTimes}/>  : <FontAwesomeIcon icon={faBars}/>}</button>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar
