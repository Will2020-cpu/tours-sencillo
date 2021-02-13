import React from 'react'
import { connect } from 'react-redux'
import LaTabla from './Table'


const Reservation = ({reservaciones}) => {
    console.log(reservaciones)
    return (
        <>
            <div className=" p-2 w-full rounded-lg flex flex-col">
                <h1 className="text-4xl text-gray-600 font-medium text-center">Reservaciones</h1>
                <div className="">
                    <LaTabla/>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) =>({
    reservaciones: state.reservaciones
})



export default connect (mapStateToProps, null)(Reservation)