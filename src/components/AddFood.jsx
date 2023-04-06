import { useState, useEffect } from "react"
import { foodMenuArray } from "./foodMenuArray"

function AddFood() {
	const [array, setArray] = useState([...foodMenuArray])

	const [name, setName] = useState("")
	const [ingredients, setIngredients] = useState("")
	const [img, setImg] = useState("")
	const [price, setPrice] = useState("")

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handleIngredientsChange = (e) => {
		setIngredients(e.target.value)
	}

	const handleImageChange = (e) => {
		setImg(e.target.value)
	}
	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	const handleSubmit = (e) => {
		useEffect(() => {
			const foodMenuData = JSON.parse(localStorage.getItem("foodMenu"))
			if (foodMenuData) {
				setArray(foodMenuData)
			}
		}, [])
		e.preventDefault()
		const newFood = { name, ingredients, img, price }
		const existingFood = JSON.parse(localStorage.getItem("foodMenu")) || []
		localStorage.setItem(
			"foodMenu",
			JSON.stringify([...existingFood, newFood])
		)
		setName("")
		setIngredients("")
		setImg("")
		setPrice("")
		setArray([...foodMenuArray, newFood])
	}

	return (
		<section className="add-food-container">
			<h1 className="add-food-header">Lägg till ny maträtt</h1>
			<div className="add-food">
				<form className="add-food-form" onSubmit={handleSubmit}>
					<input
						placeholder="Namn"
						id="add-food-input-name"
						type="text"
						value={name}
						onChange={handleNameChange}
					/>

					<input
						placeholder="Ingredienser"
						id="add-food-input-ingredients"
						type="text"
						value={ingredients}
						onChange={handleIngredientsChange}
					/>

					<input
						placeholder="Pris"
						id="add-food-input-price"
						type="text"
						value={price}
						onChange={handlePriceChange}
					/>

					<input
						placeholder="Bild URL"
						id="add-food-input-image"
						type="text"
						value={img}
						onChange={handleImageChange}
					/>

					<button type="submit">Lägg till mat</button>
				</form>
			</div>
		</section>
	)
}

export default AddFood
