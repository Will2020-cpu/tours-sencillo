import React from 'react'

const SectionRooms = () => {
    return (
      <>
        <div className="max-w-xs bg-white rounded-lg border shadow-lg overflow-hidden">
            <div className="overflow-hidden"><img  src="https://cdn.pixabay.com/photo/2014/08/08/21/03/bedroom-413706_960_720.jpg" alt="logo"/></div>
            <div className="p-4 flex justify-center">
                <span className="text-center text-xl text-gray-600 uppercase">Cuarto con cama doble</span>
            </div>
            <div className="p-4 flex justify-center items-center">
                <span className="text-sm text-gray-500">Precio :</span> <span className="text-yellow-700 text-3xl">$ 35.000</span>
            </div>
            <div className="flex justify-center p-2">
                <button className="p-2 text-white bg-gray-700 rounded-lg hover:bg-yellow-700 transition duration-500">Me interesa</button>
            </div>
        </div>
      </>
    )
}

export default SectionRooms
