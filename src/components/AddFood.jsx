import { useState } from "react";
import FoodMenu from './FoodMenu';
import { foodMenuArray } from "./foodMenuArray";
import { foodMenuArr } from "./FoodMenu";

// Kalla på foodmenuarray
// Gör en ny temporär array
// Sätt in alla egenskaper i den arrayen
// Kasta in den arrayen i foodmenuarrayen genom [...ngt] (eller tvärtom)
// Uppdatera useState!

function AddFood() {
	const [array, setArray] = useState([...foodMenuArray])

	const [name, setName] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [image, setImage] = useState('');
	const [price, setPrice] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleIngredientsChange = (e) => {
		setIngredients(e.target.value);
	}

	const handleImageChange = (e) => {
		setImage(e.target.value);
	}
	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	}

const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setIngredients("");
    setImage("");
    setPrice("");
	setArray(foodMenuArr.push({ name, ingredients, image, price }))
	setArray(array.push({ name, ingredients, image, price }))
	setArray(foodMenuArray.push({ name, ingredients, image, price }))
	console.log('array: ', array, ' foodMenuArray: ', foodMenuArray, 'foodMenuArr: ', foodMenuArr);


};

	return (
		<section className="add-food-container">
		<div className="add-food">
			<form onSubmit={handleSubmit}>
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
					placeholder="pris"
					id="add-food-input-price"
					type="text"
					value={price}
					onChange={handlePriceChange}
				/>

				<input
					placeholder="Bild URL"
					id="add-food-input-image"
					type="text"
					value={image}
					onChange={handleImageChange}
				/>

				<button type="submit">Lägg till mat</button>
			</form>
		</div>
		</section>
	);
}

export default AddFood;
