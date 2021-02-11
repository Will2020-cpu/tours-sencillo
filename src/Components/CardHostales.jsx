import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import House from '../assets/house.jpg'
import '../styles/CardHostales.css'

const CardHostales = () => {
    return (
        <>
            <div className="bg-white border rounded-lg max-w-xs shadow-lg overflow-hidden">
                <div className="w-full overflow-hidden">
                    <img className="zoom  max-w-xs" src={House} alt="ZukyHostel"/>
                </div>
                <div className="">
                    <div className="">
                        <span className="text-xs text-gray-400"><FontAwesomeIcon icon={}/> </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardHostales
