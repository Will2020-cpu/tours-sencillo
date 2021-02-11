
const initialState = {
    user:{},
    usuarios:[],
    caja: [],
    reservaciones: []
}




const reducerContactos = (state= initialState,action ) =>{
    switch (action.type) {
        case "AGREGAR_USUARIO":
        return{
            ...state,
             user:action.user,
             usuarios: state.usuarios.concat(action.user)
        }
        case "AGREGAR_RESERVACIONES":
            return{
                ...state,
                reservaciones: state.reservaciones.concat(action.reservation)
            }
        default:
            break;
    }
    return state;
}

export default reducerContactos