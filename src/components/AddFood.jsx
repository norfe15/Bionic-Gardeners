import { useState } from "react"
import {
	isValid,
	isValidIngredient,
	isValidPrice,
	isValidUrl,
} from "./validation"

function AddFood({ foodMenuArr, updateFoodMenu }) {
	const [name, setName] = useState("")
	const [ingredients, setIngredients] = useState("")
	const [price, setPrice] = useState("")
	const [img, setImg] = useState("")
	const [wrongAddName, setWrongAddName] = useState(false)
	const [wrongAddIngredient, setWrongAddIngredient] = useState(false)
	const [wrongAddPrice, setWrongAddPrice] = useState(false)
	const [wrongAddImg, setWrongAddImg] = useState(false)

	const [isValidAddName, notValidAddName] = isValid(name)
	const isValidClassName = wrongAddName
		? isValidAddName
			? "valid"
			: "invalid"
		: ""
	const [isValidAddIngredient, notValidAddIngredient] =
		isValidIngredient(ingredients)
	const isValidClassIngredient = wrongAddIngredient
		? isValidAddIngredient
			? "valid"
			: "invalid"
		: ""
	const [isValidAddPrice, notValidAddPrice] = isValidPrice(price)
	const isValidClassPrice = wrongAddPrice
		? isValidAddPrice
			? "valid"
			: "invalid"
		: ""
	const [isValidAddImg, notValidAddImg] = isValidUrl(img)
	const isValidClassImg = wrongAddImg
		? isValidAddImg
			? "valid"
			: "invalid"
		: ""

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
					<div className="order-container">
						<input
							placeholder="Namn"
							id="add-food-input-name"
							type="text"
							value={name}
							className={isValidClassName}
							onChange={handleNameChange}
							onBlur={() => setWrongAddName(true)}
						></input>
						<span className="input-icon-order">
							{wrongAddName ? (isValidAddName ? "✔️" : "❌") : ""}
						</span>
						<span className="display-error-order">
							{" "}
							{wrongAddName ? notValidAddName : ""}
						</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Ingredienser"
							id="add-food-input-ingredients"
							type="text"
							value={ingredients}
							className={isValidClassIngredient}
							onChange={handleIngredientsChange}
							onBlur={() => setWrongAddIngredient(true)}
						></input>
						<span className="input-icon-order">
							{wrongAddIngredient
								? isValidAddIngredient
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error-order">
							{" "}
							{wrongAddIngredient ? notValidAddIngredient : ""}
						</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Pris"
							id="add-food-input-price"
							type="text"
							value={price}
							className={isValidClassPrice}
							onChange={handlePriceChange}
							onBlur={() => setWrongAddPrice(true)}
						></input>
						<span className="input-icon-order">
							{wrongAddPrice
								? isValidAddPrice
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error-order">
							{" "}
							{wrongAddPrice ? notValidAddPrice : ""}
						</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Bild URL"
							id="add-food-input-image"
							type="text"
							value={img}
							className={isValidClassImg}
							onChange={handleImageChange}
							onBlur={() => setWrongAddImg(true)}
						></input>
						<span className="input-icon-order">
							{wrongAddImg ? (isValidAddImg ? "✔️" : "❌") : ""}
						</span>
						<span className="display-error-order">
							{" "}
							{wrongAddImg ? notValidAddImg : ""}
						</span>
					</div>

					<button className="add-button" type="submit">
						Lägg till mat
					</button>
				</form>
			</div>
		</section>
	)
}

export default AddFood
