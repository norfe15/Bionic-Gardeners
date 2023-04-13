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
	const [drinkMenuArr, setDrinkMenuArr] = useState([])

	function updateFoodMenu(newFoodMenu) {
		setFoodMenuArr(newFoodMenu)
		localStorage.setItem("foodMenu", JSON.stringify(newFoodMenu))
	}

	function updateDrinkMenu(newDrinkMenu) {
		setDrinkMenuArr(newDrinkMenu)
		localStorage.setItem("drinkMenu", JSON.stringify(newDrinkMenu))
	}

	return (
		<div className="App">
			<LoginModal setPage={setPage} />
			<Header />
			{page === "FoodMenu" && (
				<AddFood
					setFoodMenuArr={setFoodMenuArr}
					foodMenuArr={foodMenuArr}
					updateFoodMenu={updateFoodMenu}
				/>
			)}
			{page === "FoodMenu" && (
				<AddDrink
					setDrinkMenuArr={setDrinkMenuArr}
					drinkMenuArr={drinkMenuArr}
					updateDrinkMenu={updateDrinkMenu}
				/>
			)}
			{page === "HomePage" && <HomePage />}
			{page === "FoodMenu" && (
				<FoodMenu
					foodMenuArrUpdated={foodMenuArr}
					setFoodMenuArr={setFoodMenuArr}
					drinkMenuArrUpdated={drinkMenuArr}
					setDrinkMenuArr={setDrinkMenuArr}
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
