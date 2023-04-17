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
import ContactForm from "./components/Contact"
import { drinkMenuArray as defaultDrinkmenu } from "./components/drinkMenuArray.js"
import { foodMenuArray as defaultFoodmenu } from "./components/foodMenuArray.js"

const storedFoodMenu = JSON.parse(localStorage.getItem("foodMenu")) || []
// let foodMenuArr = [...foodMenuArray, ...storedFoodMenu]

const storedDrinkMenu = JSON.parse(localStorage.getItem("drinkMenu")) || []
// let drinkMenuArr = [...drinkMenuArray /*...storedDrinkMenu */]

let uuid = self.crypto.randomUUID()
console.log(uuid)

function App() {
	const [page, setPage] = useState("HomePage")
	const [sidePage, setSidePage] = useState("")
	const [orderList, setOrderList] = useState([])
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const [foodMenuArr, setFoodMenuArr] = useState(defaultFoodmenu)
	const [drinkMenuArr, setDrinkMenuArr] = useState(defaultDrinkmenu)

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
			<LoginModal setPage={setPage} setIsLoggedIn={setIsLoggedIn} />
			<Header setPage={setPage} />
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
					setFoodMenuArrUpdated={setFoodMenuArr}
					drinkMenuArrUpdated={drinkMenuArr}
					setDrinkMenuArrUpdated={setDrinkMenuArr}
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
			{page === "HomePage" && <ContactForm />}
			<Footer />
		</div>
	)
}

export default App
