import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
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
	const [sidePage, setSidePage] = useState("")
	const [orderList, setOrderList] = useState([])

	const [foodMenuArr, setFoodMenuArr] = useState([])

	function updateMenu(newMenu) {
		setFoodMenuArr(newMenu)
		localStorage.setItem("foodMenu", JSON.stringify(newMenu))
	}

	return (
		<div className="App">
			<LoginModal setPage={setPage} />
			<Header />
			{page === "FoodMenu" && <AddFood setFoodMenuArr={setFoodMenuArr} updateMenu={updateMenu} />}
			{page === "FoodMenu" && <AddDrink />}
			{page === "HomePage" && <HomePage />}
			{page === "FoodMenu" && (
				<FoodMenu
					foodMenuArr={foodMenuArr}
					setFoodMenuArr={setFoodMenuArr}
					setSidePage={setSidePage}
					sidePage={sidePage}
					orderList={orderList}
					setOrderList={setOrderList}
				/>
			)}
			<ToTopBtn />
			<Menu setPage={setPage} setSidePage={setSidePage} />
			<Footer />
		</div>
	)
}

export default App
