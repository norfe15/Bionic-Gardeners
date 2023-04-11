import { useState } from "react"
import { foodMenuArray } from "./foodMenuArray"

function AddFood() {
	const [foodArray, setFoodArray] = useState([...foodMenuArray])

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
		e.preventDefault()
		const newFood = { name, ingredients, img, price }
		const existingFood = JSON.parse(localStorage.getItem("foodMenu")) || []
		const updatedFood = Array.isArray(existingFood)
			? [...existingFood, newFood]
			: [newFood]
		localStorage.setItem("foodMenu", JSON.stringify(updatedFood))
		setFoodArray([...foodArray, newFood])
		setName("")
		setIngredients("")
		setImg("")
		setPrice("")
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

					<button className="add-button" type="submit">
						Lägg till mat
					</button>
				</form>
			</div>
		</section>
	)
}

export default AddFood
