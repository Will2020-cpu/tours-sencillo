import React, { Fragment } from 'react'


//Componente navbar primera seccion
const NavBar = () => {
    return (
        <Fragment>
            <div className="w-full bg-blue-400">
                <div className="w-9/12 m-auto flex items-center justify-between">
                    <div><a href="">Logo</a></div>
                    <nav>
                        <Link to="/" className="font-medium">Inicio</Link>
                        <Link to="/" className="font-medium">Ofertas</Link>
                        <Link to="/" className="font-medium">Contacto</Link>                                                
                    </nav>
                </div>
            </div>
        </Fragment>
    )
}

export default NavBar
