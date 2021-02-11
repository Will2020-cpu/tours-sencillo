import React from 'react'
import CardHostales from '../Components/CardHostales'

const HostalContainer = () => {
    return (
        <>
            <div className="grid grid-cols-3 w-9/12 m-auto gap-4">
                <CardHostales />
                <CardHostales />
            </div>
        </>
    )
}

export default HostalContainer
