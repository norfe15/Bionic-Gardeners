import { useState, useEffect } from "react"
import { drinkMenuArray } from "./drinkMenuArray"

function AddDrink() {
	const [drinkArray, setDrinkArray] = useState([...drinkMenuArray])

	const [name, setName] = useState("")
	const [price, setPrice] = useState("")

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	const handleSubmit = (e) => {
		useEffect(() => {
			const drinkMenuData = JSON.parse(localStorage.getItem("drinkMenu"))
			if (drinkMenuData) {
				setArray(drinkMenuData)
			}
		}, [])
		e.preventDefault()
		const newDrink = { name, price }
		const existingDrink =
			JSON.parse(localStorage.getItem("drinkMenu")) || []
		localStorage.setItem(
			"drinkMenu",
			JSON.stringify([...existingDrink, newDrink])
		)
		setName("")
		setPrice("")
		setDrinkArray([...drinkMenuArray, newDrink])
	}

	return (
		<section className="add-drink-container">
			<h1 className="add-drink-header">Lägg till ny dryck</h1>
			<div className="add-drink">
				<form className="add-drink-form" onSubmit={handleSubmit}>
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

					<button type="submit">Lägg till dryck</button>
				</form>
			</div>
		</section>
	)
}

export default AddDrink
