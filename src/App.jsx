import { useState } from "react"
import "./App.css"
import Header from "./components/header"
import HomePage from "./components/HomePage"
import LoginModal from "./components/LoginModal"
import ToTopBtn from "./components/ToTopBtn"
import Menu from "./components/Menu"
import FoodMenu from "./components/FoodMenu"
import Footer from "./components/Footer"
import AddFood from "./components/AddFood"
import AddDrink from "./components/AddDrink"

function App() {
	const [page, setPage] = useState("HomePage")

	return (
		<div className="App">
			<LoginModal />
			<Header />
			<HomePage />
			<AddFood />
			<AddDrink />
			<FoodMenu />
			<ToTopBtn />
			<Menu setPage={setPage} />
			<Footer />
		</div>
	)
}

export default App
