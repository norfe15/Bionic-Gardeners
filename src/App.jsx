import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/Main'
import Menu from './components/Menu'
import FoodMenu from './components/FoodMenu'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Menu />
      <FoodMenu />
      <Footer />
    </div>
  )
}

export default App
