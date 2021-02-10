import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
import MainContainer from './Container/MainContainer'
import FormLogin from './Container/FormLogin'



const routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={()=>(
                    <>
                        <NavBar/>
                        <div className="main">
                            <MainContainer/>
                        </div>
                    </>
                )}/>

                <Route path="/signin" component={FormLogin} />
            </Switch>
        </>
    )
}

export default routes
