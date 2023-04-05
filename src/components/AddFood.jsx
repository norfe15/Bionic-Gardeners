import { useState } from "react";

function AddFood() {
	const [food, setFood] = useState([]);
	const [name, setName] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [image, setImage] = useState('');

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleIngredientsChange = (e) => {
		setIngredients(e.target.value);
	}

	const handleImageChange = (e) => {
		setImage(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setFood([...food, { name, ingredients, image }]);
		setName('');
		setIngredients('');
		setImage('');
	}

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
					placeholder="Bild URL"
					id="add-food-input-image"
					type="text"
					value={image}
					onChange={handleImageChange}
				/>

				<button type="submit">Lägg till mat</button>
			</form>
			<ul>
			{food.map((item, index) => (
				<li key={index}>
				<h3>{item.name}</h3>
				<img src={item.image} alt="" />
				<p>{item.ingredients}</p>
				</li>
				))}
			</ul>
		</div>
		</section>
	);
}

export default AddFood;
