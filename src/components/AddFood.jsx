import { useState, useEffect } from "react"
import { foodMenuArray } from "./foodMenuArray"
import { isValid, isValidIngredient, isValidPrice } from "./validation"

function AddFood() {
	const [array, setArray] = useState([...foodMenuArray])
	const [name, setName] = useState("")
	const [ingredients, setIngredients] = useState("")
	const [img, setImg] = useState("")
	const [price, setPrice] = useState("")
	const [wrongOrderName, setWrongOrderName] = useState(false)
	const [wrongOrderIngredient, setWrongOrderIngredient] = useState(false)
	const [wrongOrderPrice, setWrongOrderPrice] = useState(false)

	const [isValidOrderName, notValidOrderName] = isValid(name)
	const isValidClassOrder = wrongOrderName ? (isValidOrderName ? 'valid' : 'invalid') : ''
	const [isValidOrderIngredient, notValidOrderIngredient] = isValidIngredient(ingredients)
	const isValidClassIngredient = wrongOrderIngredient ? (isValidOrderIngredient ? 'valid' : 'invalid') : ''
	const [isValidOrderPrice, notValidOrderPrice] = isValidPrice(price)
	const isValidClassPrice = wrongOrderPrice ? (isValidOrderPrice ? 'valid' : 'invalid') : ''

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
					<div className="order-container">
						<input
							placeholder="Namn"
							id="add-food-input-name"
							type="text"
							value={name}
							className={isValidClassOrder}
							onChange={handleNameChange}
							onBlur={() => setWrongOrderName(true)}>
						</input>
						<span className='input-icon-order'>{wrongOrderName ? (isValidOrderName ? '✔️' : '❌') : ''}</span>
						<span className='display-error-order'> {wrongOrderName ? notValidOrderName : ''}</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Ingredienser"
							id="add-food-input-ingredients"
							type="text"
							value={ingredients}
							className={isValidClassIngredient}
							onChange={handleIngredientsChange}
							onBlur={() => setWrongOrderIngredient(true)}>
						</input>
						<span className='input-icon-order'>{wrongOrderIngredient ? (isValidOrderIngredient ? '✔️' : '❌') : ''}</span>
						<span className='display-error-order'> {wrongOrderIngredient ? notValidOrderIngredient : ''}</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Pris"
							id="add-food-input-price"
							type="text"
							value={price}
							className={isValidClassPrice}
							onChange={handlePriceChange}
							onBlur={() => setWrongOrderPrice(true)}>
						</input>
						<span className='input-icon-order'>{wrongOrderPrice ? (isValidOrderPrice ? '✔️' : '❌') : ''}</span>
						<span className='display-error-order'> {wrongOrderPrice ? notValidOrderPrice : ''}</span>
					</div>

					<input
						placeholder="Bild URL"
						id="add-food-input-image"
						type="text"
						value={img}
						onChange={handleImageChange}
					/>

					<button type="submit">Lägg till mat</button>
				</form>
			</div >
		</section >
	)
}

export default AddFood
