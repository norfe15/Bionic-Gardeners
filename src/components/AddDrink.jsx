import { useState, useEffect } from "react"
import { drinkMenuArray } from "./drinkMenuArray"
import { isValid, isValidPrice } from "./validation"

function AddDrink() {
	const [drinkArray, setDrinkArray] = useState([...drinkMenuArray])
	const [name, setName] = useState("")
	const [price, setPrice] = useState("")
	const [wrongAddName, setWrongAddName] = useState(false)
	const [wrongAddPrice, setWrongAddPrice] = useState(false)

	const [isValidAddName, notValidAddName] = isValid(name)
	const isValidClassName = wrongAddName ? (isValidAddName ? 'valid' : 'invalid') : ''
	const [isValidAddPrice, notValidAddPrice] = isValidPrice(price)
	const isValidClassPrice = wrongAddPrice ? (isValidAddPrice ? 'valid' : 'invalid') : ''

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handlePriceChange = (e) => {
		setPrice(e.target.value)
	}

	const handleSubmit = (e) => {
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
		setDrinkArray([...drinkArray, newDrink])
	}

	useEffect(() => {
		const drinkMenuData = JSON.parse(localStorage.getItem("drinkMenu"))
		if (drinkMenuData) {
			setDrinkArray(drinkMenuData)
		}
	}, [])

	return (
		<section className="add-drink-container">
			<h1 className="add-drink-header">Lägg till ny dryck</h1>
			<div className="add-drink">
				<form className="add-drink-form" onSubmit={handleSubmit}>
					<div className="order-container">
						<input
							placeholder="Namn"
							id="add-drink-input-name"
							type="text"
							value={name}
							className={isValidClassName}
							onChange={handleNameChange}
							onBlur={() => setWrongAddName(true)}>
						</input>
						<span className='input-icon-order'>{wrongAddName ? (isValidAddName ? '✔️' : '❌') : ''}</span>
						<span className='display-error-order'> {wrongAddName ? notValidAddName : ''}</span>
					</div>

					<div className="order-container">
						<input
							placeholder="Pris"
							id="add-drink-input-price"
							type="text"
							value={price}
							className={isValidClassPrice}
							onChange={handlePriceChange}
							onBlur={() => setWrongAddPrice(true)}>
						</input>
						<span className='input-icon-order'>{wrongAddPrice ? (isValidAddPrice ? '✔️' : '❌') : ''}</span>
						<span className='display-error-order'> {wrongAddPrice ? notValidAddPrice : ''}</span>
					</div>

					<button className="add-button" type="submit">
						Lägg till dryck
					</button>
				</form>
			</div>
		</section>
	)
}

export default AddDrink
