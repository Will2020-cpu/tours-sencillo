import React from 'react'
import Travel from '../assets/travel.jpg'


const Hero = () => {
    return (
        <>
            <div style={{backgroundImage:`url("${Travel}")`}} className="hero flex items-center justify-center">
                <div className="flex flex-col">
                    <h1 className="lg:text-6xl text-white font-bold uppercase text-center md:text-2xl">Encuentra un hospedaje seguro y con beneficios</h1>
                    <div className="mx-auto mt-10">
                        <button className="bg-yellow-600 p-4 rounded-lg uppercase text-white focus:outline-none hover:bg-gray-800 transition duration-500">Mejores Hospedajes</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
