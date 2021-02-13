import React from 'react'
import CardHostales from '../Components/CardHostales'

const HostalContainer = () => {
    return (
        <>  
            <div className="w-full my-10">
                <h1 className="text-center text-4xl font-medium text-gray-600">Todos nuestros hostales</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 w-9/12 m-auto gap-4">
                <CardHostales />
                <CardHostales />
            </div>
        </>
    )
}

export default HostalContainer
