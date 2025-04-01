import React from 'react'
import Header from './Components/Header'
import Choosing from './Components/Choosing'
import Visualize from './Components/Visualize'
import Featured from './Components/Featured'
import Services from './Components/Services'
import Homey from './Components/Homey'

const App = () => {
  return (
    <div>
      <Header/>
      <Choosing/>
      <Visualize/>
      <Featured/>
      <Services/>
      <Homey/>
    </div>
  )
}

export default App