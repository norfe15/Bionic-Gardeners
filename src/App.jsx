import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Main from './components/HomePage'
import HomePage from './components/HomePage'
import LoginModal from './components/LoginModal'
import Menu from './components/Menu'
import FoodMenu from './components/FoodMenu'
import Footer from './components/Footer'
import AddFood from './components/AddFood'

function App() {

  const [page, setPage] = useState('HomePage')

	return (
    <div className="App">
		<Header />
		<Main />
		<AddFood />
		<Menu />
		<FoodMenu />
		<Footer />
    </div>
	)
}

export default App
