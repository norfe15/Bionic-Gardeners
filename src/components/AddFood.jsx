import { useState } from "react"

function AddFood({ foodMenuArr, updateFoodMenu }) {
	const [name, setName] = useState("")
	const [ingredients, setIngredients] = useState("")
	const [price, setPrice] = useState("")
	const [img, setImg] = useState("")

	function handleFoodSubmit(e) {
		e.preventDefault()
		const newFoodMenu = [...foodMenuArr, { name, ingredients, price, img }]
		updateFoodMenu(newFoodMenu)
		setName("")
		setIngredients("")
		setPrice("")
		setImg("")
	}

	function handleNameChange(e) {
		setName(e.target.value)
	}

	function handleIngredientsChange(e) {
		setIngredients(e.target.value)
	}

	function handlePriceChange(e) {
		setPrice(e.target.value)
	}

	function handleImageChange(e) {
		setImg(e.target.value)
	}

	return (
		<section className="add-food-container">
			<h1 className="add-food-header">Lägg till ny maträtt</h1>
			<div className="add-food">
				<form className="add-food-form" onSubmit={handleFoodSubmit}>
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
