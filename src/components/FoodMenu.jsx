import { useState, useEffect } from "react"
import { foodMenuArray } from "./foodMenuArray.js"
import { drinkMenuArray } from "./drinkMenuArray.js"
import OrderPage from "./OrderPage"
import OrderPageButton from "./OrderPageButton"

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
		setFoodMenuArr([...foodMenuArrUpdated, ...foodMenuArray])
	}, [foodMenuArrUpdated])

	useEffect(() => {
		setDrinkMenuArr([...drinkMenuArrUpdated, ...drinkMenuArray])
	}, [drinkMenuArrUpdated])

	const handleDeleteFood = (index) => {
		const updatedFoodMenuArr = [...foodMenuArr]
		updatedFoodMenuArr.splice(index, 1)
		setFoodMenuArr(updatedFoodMenuArr)
	}

	const handleDeleteDrink = (index) => {
		const updatedDrinkMenuArr = [...drinkMenuArr]
		updatedDrinkMenuArr.splice(index, 1)
		setDrinkMenuArr(updatedDrinkMenuArr)
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
								{isLoggedIn === false && (
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
										{isLoggedIn === false && (
											<button
												onClick={() =>
													handleDeleteDrink(index)
												}
											>
												Ta bort
											</button>
										)}
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
