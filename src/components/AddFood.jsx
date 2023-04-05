import { useState } from "react"
function AddFood() {
	const [food, setFood] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setFood([...food, inputValue]);
		setInputValue('');
	}

return(
	<div className="add-food">
		<form onSubmit={handleSubmit}>
		<label htmlFor="add-food-input">Lägg till maträtt</label>
		<input id="add-food-input" type="text" value={inputValue} onChange={handleChange} />
		<button type="submit">Lägg till mat</button>
		</form>
		<ul>{food.map((food, name) =>(<li><h3 key={name}>{food}</h3><img src="" alt="" /><p></p></li>))}</ul>
	</div>
);
}

export default AddFood