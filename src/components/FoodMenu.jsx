import { useState, useEffect } from "react"
import { foodMenuArray } from "./foodMenuArray.js"
import { drinkMenuArray } from "./drinkMenuArray.js"
import OrderPage from "./OrderPage"
import Menu from "./Menu.jsx"
import OrderPageButton from "./OrderPageButton"
import AddDrink from "./AddDrink.jsx"
import AddFood from "./AddFood.jsx"

const storedFoodMenu = JSON.parse(localStorage.getItem("foodMenu")) || []
// let foodMenuArr = [...foodMenuArray, ...storedFoodMenu]

const storedDrinkMenu = JSON.parse(localStorage.getItem("drinkMenu")) || []
// let drinkMenuArr = [...drinkMenuArray /*...storedDrinkMenu */]

function FoodMenu({
	setSidePage,
	sidePage,
	orderList,
	setOrderList,
	isLoggedIn,
	foodMenuArrUpdated,
	drinkMenuArrUpdated,
}) {
	const [foodMenuArr, setFoodMenuArr] = useState([])
	const [drinkMenuArr, setDrinkMenuArr] = useState([])

	useEffect(() => {
		// const storedFoodMenu =
		// 	JSON.parse(localStorage.getItem("foodMenu")) || []
		setFoodMenuArr([...foodMenuArray, ...foodMenuArrUpdated])
	}, [foodMenuArrUpdated])

	useEffect(() => {
		console.log(drinkMenuArr)
		setDrinkMenuArr([...drinkMenuArray, ...drinkMenuArrUpdated])
	}, [drinkMenuArrUpdated])

	const handleDeleteFood = (index) => {
		const updatedFoodMenuArr = [...foodMenuArr]
		updatedFoodMenuArr.splice(index, 1)
		localStorage.setItem("foodMenu", JSON.stringify(updatedFoodMenuArr))
		setFoodMenuArr(updatedFoodMenuArr)
	}

	const handleDeleteDrink = (index) => {
		const updatedDrinkMenuArr = [...drinkMenuArr]
		updatedDrinkMenuArr.splice(index, 1)
		localStorage.setItem("drinkMenu", JSON.stringify(updatedDrinkMenuArr))
		setDrinkMenuArr(updatedDrinMenuArr)
	}
	return (
		<>
			{sidePage === "OrderPage" && (
				<OrderPage orderList={orderList} setOrderList={setOrderList} />
			)}
			{sidePage !== "OrderPage" && (
				<div className="food-menu">
					<h2 className="food-heading">Meny</h2>
					<ul className="food-ul">
						{foodMenuArr.map((item, index) => (
							<li className="food-li" key={index}>
								<div className="img-container">
									<h2 className="food-h3">{item.name}</h2>
									<img
										className="food-img"
										src={item.img}
										alt={item.name}
									/>
									<p className="food-price">{item.price}</p>
								</div>
								<p className="food-p">{item.ingredients}</p>
								{isLoggedIn === true && (
									<button
										onClick={() => handleDeleteFood(index)}
									>
										Ta bort
									</button>
								)}
								<OrderPageButton
									item={item}
									setOrderList={setOrderList}
								/>
							</li>
						))}
					</ul>
					<h2 className="food-heading">Dryck</h2>
					{drinkMenuArr &&
						drinkMenuArr.map((drink, index) => (
							<div key={index}>
								<ul className="drink-ul">
									<li className="drink-li" key={index}>
										{drink.name}
									</li>
									<li className="drink-li" key={drink.price}>
										{drink.price}
										<button
											onClick={() =>
												handleDeleteDrink(index)
											}
										>
											Ta bort
										</button>
										<OrderPageButton
											drink={drink}
											setOrderList={setOrderList}
										/>
									</li>
								</ul>
							</div>
						))}
				</div>
			)}
		</>
	)
}

export default FoodMenu
