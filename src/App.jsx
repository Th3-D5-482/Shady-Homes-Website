import React from 'react'
import Header from './Components/Header'
import Choosing from './Components/Choosing'
import Visualize from './Components/Visualize'
import Featured from './Components/Featured'

const App = () => {
  return (
    <div>
      <Header/>
      <Choosing/>
      <Visualize/>
      <Featured/>
    </div>
  )
}

export default App