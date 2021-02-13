import React, { useState } from 'react'
import { StaticDialog } from 'react-st-modal';
import { makeStyles } from '@material-ui/core/styles'
import ReactDatePicker from 'react-datepicker'
import { useForm, Controller } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/Dialog.css'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import moment from 'moment'



const useStyles = makeStyles((theme) => ({
    Modal: {
        maxWidth: '600px',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        boxShadow: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}))

function SimpleDialog({ reservaciones, agregarReservacion }) {
    const [isOpen, setOpen] = useState(false);
    const classes = useStyles()
    const { register, handleSubmit, control } = useForm();
    const [openWompi, setOpenWompi] = useState(false)

    const onSubmit = (data, e) => {
        const newReservation = {
            nombre: data.nombre,
            email: data.email,
            fecha: moment(`${data.ReactDatePicker}`).format('l')
        }
        agregarReservacion(newReservation)
        e.target.reset();
    }
    return (
        <div>
            <StaticDialog
                isOpen={isOpen}
                className={classes.Modal}
                onAfterClose={() => {
                    setOpen(false);
                    // do something with dialog result
                }}
            >
                {/* see previous demo */}
                <div className="p-4 flex m-auto rounded-lg">
                    <div className="bg-white p-4 space-y-4">
                        <h1 className="text-center text-4xl text-gray-600">Hacer Reservacion</h1>
                        <form action="https://checkout.wompi.co/p/" method="GET" onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-center flex-col space-y-4">
                            <div className="flex flex-col space-y-1">
                                <label className="text-xs text-gray-600 " >Nombre de la persona</label>
                                <input ref={register} name="nombre" className="rounded-sm p-2 border focus:outline-none focus:ring-2" type="text" placeholder="Minombreejemplo" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="text-xs text-gray-600 " >Email</label>
                                <input ref={register} name="email" className="rounded-sm p-2 border focus:outline-none focus:ring-2" type="email" placeholder="miemail@miemail.com" />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <label className="text-xs text-gray-600 " >Fecha a ingresar</label>
                                <Controller
                                    control={control}
                                    name="ReactDatePicker"
                                    defaultValue=""
                                    render={({ onChange, onBlur, value }) => (
                                        <ReactDatePicker
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            className="p-2 border rounded "
                                            selected={value}
                                            placeholderText="Fecha"
                                        />
                                    )}
                                />
                            </div>


                            <button type="submit" onClick={() => setOpenWompi(!openWompi)} className="p-2 bg-yellow-700 text-white rounded focus:outline-none">Reservar</button>
                        </form>
                        <form action="https://checkout.wompi.co/p/" method="GET">
                            <input type="hidden" name="public-key" value="pub_prod_qaSVzz5pxhPiSEdObRqUUWruI11hqIEp" />
                            <input type="hidden" name="currency" value="COP" />
                            <input type="hidden" name="amount-in-cents" value="1200000" />
                            <input type="hidden" name="reference" value="37DNKF84S92N1S" />
                            <Button color="primary" type="submit" className={`${openWompi ? "visible" : "invisible"}`} variant="contained">Pagar con wompi</Button>
                        </form>
                    </div>
                </div>
            </StaticDialog>
            <div className="flex items-center justify-center">
                <button className="p-1 rounded text-white focus:outline-none bg-yellow-700" onClick={() => setOpen(!isOpen)}>Reserva YA!</button>
            </div>
        </div>
    );
}


const mapStateToProps = (state) => ({
    reservaciones: state.reservaciones
})

const mapDispatchToProps = (dispatch) => ({
    agregarReservacion(reservation) {
        dispatch({
            type: "AGREGAR_RESERVACIONES",
            reservation
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(SimpleDialog)