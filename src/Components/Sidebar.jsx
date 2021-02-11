import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/sidebar.css'
import { faDollarSign, faPersonBooth, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <>
            <div className="p-4 w-64 bg-white border rounded-lg sidebar">
                <div>
                    <nav>
                        <ul className="uppercase font-medium text-gray-600 space-y-4">
                            <li><Link to="/dashboard/reservation" className="hover:text-yellow-700"><FontAwesomeIcon icon={faUsers}/> Reservaciones</Link></li>
                            <li><Link to="/dashboard/dinero" className="hover:text-yellow-700"><FontAwesomeIcon icon={faDollarSign}/> Dinero recibido</Link></li>
                            <li><Link to="/dashboard/rooms" className="hover:text-yellow-700"><FontAwesomeIcon icon={faPersonBooth}/> Cuarto disponibles</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar
