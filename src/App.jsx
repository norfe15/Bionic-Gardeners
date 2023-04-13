import { useEffect, useState } from "react"
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
import { foodMenuArray } from "./components/foodMenuArray.js"

function App() {
	const [page, setPage] = useState("HomePage")
	const [sidePage, setSidePage] = useState("")
	const [orderList, setOrderList] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const [foodMenuArr, setFoodMenuArr] = useState([])
	const [drinkMenuArr, setDrinkMenuArr] = useState([])
	const [originalFoodMenu, setOriginalFoodMenu] = useState([])

	function updateFoodMenu(newFoodMenu) {
		setFoodMenuArr(newFoodMenu)
		localStorage.setItem("foodMenu", JSON.stringify(newFoodMenu))
	}

	function updateDrinkMenu(newDrinkMenu) {
		setDrinkMenuArr(newDrinkMenu)
		localStorage.setItem("drinkMenu", JSON.stringify(newDrinkMenu))
	}

	useEffect(() => {
		let foodMenuFromLocalStorage = JSON.parse(
			localStorage.getItem("foodMenu")
		)
		if (foodMenuFromLocalStorage !== originalFoodMenu) {
			setFoodMenuArr(foodMenuFromLocalStorage)
		}
	}, [])

	return (
		<div className="App">
			<LoginModal setPage={setPage} setIsLoggedIn={setIsLoggedIn} />
			<Header />
			{page === "FoodMenu" &&
				isLoggedIn === true &&
				sidePage === "AddFood" && (
					<AddFood
						setFoodMenuArr={setFoodMenuArr}
						foodMenuArr={foodMenuArr}
						updateFoodMenu={updateFoodMenu}
					/>
				)}
			{page === "FoodMenu" &&
				isLoggedIn === true &&
				sidePage === "AddFood" && (
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
					isLoggedIn={isLoggedIn}
					setIsLoggedIn={setIsLoggedIn}
				/>
			)}
			<ToTopBtn />
			<Menu
				setPage={setPage}
				setSidePage={setSidePage}
				isLoggedIn={isLoggedIn}
				setIsLoggedIn={setIsLoggedIn}
			/>
			<Footer />
		</div>
	)
}

export default App
