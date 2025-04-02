import React from 'react'
import Header from './Components/Header'
import Choosing from './Components/Choosing'
import Visualize from './Components/Visualize'
import Featured from './Components/Featured'
import Services from './Components/Services'
import Homey from './Components/Homey'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <Choosing/>
      <Visualize/>
      <Featured/>
      <Services/>
      { /* <Homey/>
      <Footer/> */}
    </div>
  )
}

export default App