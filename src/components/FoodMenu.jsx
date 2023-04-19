import { useState, useRef } from "react"
import OrderPage from "./OrderPage"
import OrderPageButton from "./OrderPageButton"
import { v4 as uuid } from "uuid"

function FoodMenu({
	setSidePage,
	sidePage,
	orderList,
	setOrderList,
	isLoggedIn,
	setFoodMenuArrUpdated,
	setDrinkMenuArrUpdated,
	foodMenuArrUpdated,
	drinkMenuArrUpdated,
}) {
	const [isEditing, setIsEditing] = useState(false)
	const [editedIngredients, setEditedIngredients] = useState("")
	const [editingIndex, setEditingIndex] = useState(-1)
	const editedIngredientsRef = useRef(null)

	// Handlers

	const handleDeleteFood = (index) => {
		const updatedFoodMenuArr = [...foodMenuArrUpdated]
		updatedFoodMenuArr.splice(index, 1)
		localStorage.setItem("foodMenu", JSON.stringify(updatedFoodMenuArr))
		setFoodMenuArrUpdated(updatedFoodMenuArr)
	}

	const handleDeleteDrink = (index) => {
		const updatedDrinkMenuArr = [...drinkMenuArrUpdated]
		updatedDrinkMenuArr.splice(index, 1)
		localStorage.setItem("drinkMenu", JSON.stringify(updatedDrinkMenuArr))
		setDrinkMenuArrUpdated(updatedDrinkMenuArr)
	}

	const handleEditIngredients = (index) => {
		setIsEditing(true)
		setEditedIngredients(foodMenuArrUpdated[index].ingredients)
		setEditingIndex(index)
		setTimeout(() => {
			editedIngredientsRef.current.focus()
		}, 0)
	}

	const handleSaveIngredients = (index) => {
		const updatedFoodMenuArr = [...foodMenuArrUpdated]
		updatedFoodMenuArr[index].ingredients = editedIngredients
		localStorage.setItem("foodMenu", JSON.stringify(updatedFoodMenuArr))
		setFoodMenuArrUpdated(updatedFoodMenuArr)
		setIsEditing(false)
		setEditingIndex(-1)
	}

	console.log("Foodmenu", foodMenuArrUpdated)
	return (
		<>
			{sidePage === "OrderPage" && (
				<OrderPage orderList={orderList} setOrderList={setOrderList} />
			)}
			{sidePage !== "OrderPage" && (
				<div className="food-menu">
					<h2 className="food-heading">Meny</h2>
					<ul className="food-ul">
						{foodMenuArrUpdated.map((item, index) => (
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
								{isEditing && index === editingIndex ? (
									<input
										ref={editedIngredientsRef}
										value={editedIngredients}
										onChange={(e) =>
											setEditedIngredients(e.target.value)
										}
										onBlur={() =>
											handleSaveIngredients(index)
										}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												handleSaveIngredients(index)
											}
										}}
									/>
								) : (
									<p
										className="food-p"
										onClick={() => {
											isLoggedIn === true &&
												handleEditIngredients(index)
										}}
									>
										{item.ingredients}
									</p>
								)}
								<label className="food-button-bar">
									{isLoggedIn === true && (
										<button
											className="food-button"
											onClick={() =>
												handleDeleteFood(index)
											}
										>
											Ta bort
										</button>
									)}
									{isLoggedIn === false && (
										<OrderPageButton
											item={item}
											setOrderList={setOrderList}
										/>
									)}
								</label>
							</li>
						))}
					</ul>
					<h2 className="food-heading">Dryck</h2>
					{drinkMenuArrUpdated &&
						drinkMenuArrUpdated.map((drink, index) => (
							<div key={uuid()}>
								<label className="drink-button-bar">
									<ul className="drink-ul">
										<li className="drink-li" key={uuid()}>
											{drink.name}
										</li>
										<li className="drink-li" key={uuid()}>
											{drink.price}
											{isLoggedIn === true && (
												<button
													onClick={() =>
														handleDeleteDrink(index)
													}
												>
													Ta bort
												</button>
											)}
											{isLoggedIn === false && (
												<OrderPageButton
													drink={drink}
													setOrderList={setOrderList}
												/>
											)}
										</li>
									</ul>
								</label>
							</div>
						))}
				</div>
			)}
		</>
	)
}

export default FoodMenu
