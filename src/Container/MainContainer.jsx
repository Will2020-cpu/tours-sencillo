import React from 'react'
import Hero from '../Components/Hero'
import SectionFiltro from '../Components/SectionFiltro'
import SectionCandelario from '../Components/SectionCandelario'
import SectionRooms from '../Components/SectionRooms'



//10% del valor 100.000 10.000
const MainContainer = () => {
    return (
        <>
            <Hero/>
            <div className="mt-10">
                
                <SectionCandelario />
                <SectionFiltro />
                <div className="my-10 m-auto w-10/12">
                    <div className="my-20">
                        <h1 className="text-center text-gray-600 text-3xl font-medium">Nuestros cuartos</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
                        <SectionRooms />
                        <SectionRooms />
                        <SectionRooms />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer
