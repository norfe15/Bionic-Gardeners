import { useState } from 'react'
import './App.css'
import Header from './components/header'
import HomePage from './components/HomePage'
import LoginModal from './components/LoginModal'
import Menu from './components/Menu'
import FoodMenu from './components/FoodMenu'
import Footer from './components/Footer'

function App() {

  const [page, setPage] = useState('HomePage')

  return (
    <div className="App">
      <LoginModal />
      <Header />
      {page === 'HomePage' && <HomePage />}
      {page === 'FoodMenu' && <FoodMenu />}

      <Menu setPage={setPage} />
      <Footer />
    </div>
  )
}

export default App
