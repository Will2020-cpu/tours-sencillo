import { faHamburger, faMapMarkerAlt, faWifi, faGlassMartiniAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import House from '../assets/house.jpg'
import Dialog from './Dialog'
import '../styles/CardHostales.css'
import { connect } from 'react-redux'




const CardHostales = () => {
    return (
        <>
            <div className="bg-white border rounded-lg max-w-xs shadow-lg overflow-hidden">
                <div className="w-full overflow-hidden">
                    <img className="zoom  max-w-xs" src={House} alt="ZukyHostel" />
                </div>
                <div className="p-4 border-b">
                    <div className="">
                        <span className="text-xs text-gray-400"><FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-700" /> Direccion</span>
                    </div>
                </div>
                <div className="p-2 space-y-2">
                    <p className="text-sm text-gray-900">Hostel donde hay energia positiva amigo...</p>
                    <div className="flex items-center space-x-2">
                        <h4 className="text-gray-600 text-sm">Instalaciones :</h4>
                        <div className="tooltip top">
                            <FontAwesomeIcon icon={faHamburger} className="text-yellow-700" />
                            <span className="tiptext text-sm">Restaurante</span>
                        </div>
                        <div className="tooltip top">
                            <FontAwesomeIcon icon={faWifi} className="text-yellow-700" />
                            <span className="tiptext text-sm">Wifi</span>
                        </div>
                        <div className="tooltip top">
                            <FontAwesomeIcon icon={faGlassMartiniAlt} className="text-yellow-700" />
                            <span className="tiptext text-sm">Bar</span>
                        </div>
                    </div>
                    <div className="px-2 border-b">
                        <h4 className="text-gray-600 text-sm">Precio : <span className="text-primary">$ 120.000 </span> </h4>
                    </div>
                    <Dialog/>
                </div>
            </div>
        </>
    )
}


export default CardHostales

