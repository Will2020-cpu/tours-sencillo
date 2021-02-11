import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
import MainContainer from './Container/MainContainer'
import FormLogin from './Container/FormLogin'
import DashBoard from './Container/DashBoard'
import HostalContainer from './Container/HostalContainer'

const routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" render={() => (
                    <>
                        <NavBar />
                        <div className="main">
                            <MainContainer />
                        </div>
                    </>
                )} />
                <Route path="/signin" component={FormLogin} />
                <Route path="/dashboard" render={() => (
                    <>
                        <NavBar />
                        <div className="main">
                            <DashBoard />
                        </div>
                    </>
                )} />
                <Route path="/dashboard/:id" render={() => (
                    <>
                        <NavBar />
                    </>
                )} />
                <Route path="/hostales" render={()=>(
                    <>
                        <NavBar/>
                        <HostalContainer/>
                    </>
                )}/>
            </Switch>
        </>
    )
}

export default routes
