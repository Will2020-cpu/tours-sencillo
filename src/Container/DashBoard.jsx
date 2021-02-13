import React from 'react'
import Sidebar from '../Components/Sidebar';
import { useParams } from 'react-router-dom'
import Reservation from '../Components/Reservation';

const DashBoard = () => {
    const { dashId } = useParams()
    switch (dashId) {
        case "reservation": return (
            <>
                <div className="lg:w-11/12 md:w-full m-auto flex justify-between space-x-4">
                    <Sidebar />
                    <Reservation/>
                </div>
            </>
        )
        default: return (
            <>
                <div className="w-11/12 m-auto flex">
                    <Sidebar />
                    <Reservation/>
                </div>
            </>
        )

    }
}

export default DashBoard
