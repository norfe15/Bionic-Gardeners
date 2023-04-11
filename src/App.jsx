import { useState } from "react"
import "./App.css"
import Header from "./components/header"
import HomePage from "./components/HomePage"
import LoginModal from "./components/LoginModal"
import ToTopBtn from "./components/ToTopBtn"
import Menu from "./components/Menu"
import FoodMenu from "./components/FoodMenu"
import Footer from "./components/Footer"


function App() {
	const [page, setPage] = useState("HomePage")

	return (
		<div className="App">
			<LoginModal setPage={setPage} />
			<Header />
			{page === 'HomePage' && <HomePage />}
      		{page === 'FoodMenu' && <FoodMenu />}
			<ToTopBtn />
			<Menu setPage={setPage} />
			<Footer />
		</div>
	)
}

export default App
