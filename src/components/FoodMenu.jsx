import React, { useState, useEffect } from "react"
import { foodMenuArray } from "./foodMenuArray"

function FoodMenu() {
	const [foodMenuArr, setFoodMenuArr] = useState([])

	useEffect(() => {
		const storedFoodMenu =
			JSON.parse(localStorage.getItem("foodMenu")) || []
		setFoodMenuArr([...foodMenuArray, ...storedFoodMenu])
	}, [])

	const handleDelete = (index) => {
		const updatedFoodMenuArr = [...foodMenuArr]
		updatedFoodMenuArr.splice(index, 1)
		localStorage.setItem("foodMenu", JSON.stringify(updatedFoodMenuArr))
		setFoodMenuArr(updatedFoodMenuArr)
	}

	return (
		<div>
			<h2 className="food-heading">Meny</h2>
			<ul className="food-ul">
				{foodMenuArr.map((item, index) => (
					<li className="food-li" key={item.name}>
						<div className="img-container">
							<h2 className="food-h3">{item.name}</h2>
							<img
								className="food-img"
								src={item.img}
								alt={item.name}
							/>
							<p className="food-price">{item.price}</p>
						</div>
						<p className="food-p">{item.ingredients}</p>
						<button onClick={() => handleDelete(index)}>
							Ta bort
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default FoodMenu
