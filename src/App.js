import React, { Fragment,useEffect } from 'react'
import Routes from './routes'
import { getHostal } from './helpers/SaveSession'
import { connect } from 'react-redux'


function App({ agregarUsuario, user }) {
  useEffect(()=>{
    function cargandoUsuario(){
      if (getHostal()){
        const user = {
          nombre:"Zukytech"
        }
        agregarUsuario(user)
      }
    }
    cargandoUsuario()
  },[])
  return (
    <Fragment>
      <div>
          <Routes/>
      </div>
    </Fragment>
  );
}


const mapStateToProps = (state) =>({
  user: state.user
})

const mapDispatchToProps = (dispatch) =>({
  agregarUsuario(user){
    dispatch({
      type:"AGREGAR_USUARIO",
      user
    })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
