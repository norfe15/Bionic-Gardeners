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

function App() {
	const [page, setPage] = useState("HomePage")

	const [foodMenuArr, setFoodMenuArr] = useState([])

	function updateMenu(newMenu) {
		setFoodMenuArr(newMenu)
		localStorage.setItem("foodMenu", JSON.stringify(newMenu))
	}

	return (
		<div className="App">
			<LoginModal />
			<Header />
			<HomePage />
			<AddFood setFoodMenuArr={setFoodMenuArr} updateMenu={updateMenu} />
			<FoodMenu
				foodMenuArr={foodMenuArr}
				setFoodMenuArr={setFoodMenuArr}
			/>
			<ToTopBtn />
			<Menu setPage={setPage} />
			<Footer />
		</div>
	)
}

export default App
