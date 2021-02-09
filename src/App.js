import React, { Fragment } from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import SectionCandelario from './Components/SectionCandelario'
import SectionFiltro from './Components/SectionFiltro'
import SectionRooms from './Components/SectionRooms'

function App() {
  return (
    <Fragment>
      <div>
        <NavBar />
        <Hero />
        <div className="mt-10">
          <SectionCandelario />
          <SectionFiltro />
          <div className="my-10 m-auto w-10/12">
            <div className="my-20">
              <h1 className="text-center text-gray-600 text-3xl font-medium">Nuestros cuartos</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4">
              <SectionRooms />
              <SectionRooms />
              <SectionRooms />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
