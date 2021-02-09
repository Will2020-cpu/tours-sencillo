import React, { Fragment, useState } from 'react'
import cx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClosedCaptioning, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/NavBar.css';

//Componente navbar primera seccion
const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <Fragment>
            <div className="w-full bg-white sticky top-0">
                <div className="w-9/12 m-auto h-24 flex items-center justify-between">
                    <div><a href="" className="text-2xl font-bold"><span className="text-yellow-700">Zuky</span> Hostel</a></div>
                    <nav className={cx({
                        "uppercase space-x-4 text-gray-600 font-medium": true,
                        "oculta": true,
                        "active space-y-8 text-center m-0":open
                    })}>
                        <a href="" className="hover:text-yellow-700 transition duration-500 ease">Inicio</a>
                        <a href="" className="hover:text-yellow-700 transition duration-500 ease">Sobre nosotros</a>
                        <a href="" className="hover:text-yellow-700 transition duration-500 ease">Blog</a>
                        <a href="" className="hover:text-yellow-700 transition duration-500 ease">Rooms</a>
                        <a href="" className="hover:text-yellow-700 transition duration-500 ease">Contactos</a>
                    </nav>
                    
                    <button className="text-gray-600 sm:block lg:hidden z-50 focus:outline-none" onClick={()=> setOpen(!open)}>{open ? <FontAwesomeIcon icon={faTimes}/>  : <FontAwesomeIcon icon={faBars}/>}</button>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar
