import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/Main'
import Menu from './components/Menu'
import FoodMenu from './components/FoodMenu'

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      {/* <FoodMenu /> */}
    </div>
  )
}

export default App
