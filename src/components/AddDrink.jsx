import { useState, useEffect } from "react"
import { drinkMenuArray } from "./drinkMenuArray"

function AddDrink({ drinkMenuArr, updateDrinkMenu }) {
	const [name, setName] = useState("")
	const [price, setPrice] = useState("")

	const handleDrinkSubmit = (e) => {
		e.preventDefault()
		const newDrinkMenu = [...drinkMenuArr, { name, price }]
		updateDrinkMenu(newDrinkMenu)
		setName("")
		setPrice("")
		// const existingDrink =
		// 	JSON.parse(localStorage.getItem("drinkMenu")) || []
		// localStorage.setItem(
		// 	"drinkMenu",
		// 	JSON.stringify([...existingDrink, newDrink])
		// )
		// setDrinkArray([...drinkArray, newDrink])
	}

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	// useEffect(() => {
	// 	const drinkMenuData = JSON.parse(localStorage.getItem("drinkMenu"))
	// 	if (drinkMenuData) {
	// 		setDrinkArray(drinkMenuData)
	// 	}
	// }, [])

	return (
		<section className="add-drink-container">
			<h1 className="add-drink-header">Lägg till ny dryck</h1>
			<div className="add-drink">
				<form className="add-drink-form" onSubmit={handleDrinkSubmit}>
					<input
						placeholder="Namn"
						id="add-drink-input-name"
						type="text"
						value={name}
						onChange={handleNameChange}
					/>

					<input
						placeholder="Pris"
						id="add-drink-input-price"
						type="text"
						value={price}
						onChange={handlePriceChange}
					/>

					<button className="add-button" type="submit">
						Lägg till dryck
					</button>
				</form>
			</div>
		</section>
	)
}

export default AddDrink
