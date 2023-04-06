import React from "react"
import { foodMenuArray } from "./foodMenuArray.js"
import { drinkMenuArray } from "./drinkMenuArray.js"

const storedFoodMenu = JSON.parse(localStorage.getItem("foodMenu")) || []
let foodMenuArr = [...foodMenuArray, ...storedFoodMenu]

const storedDrinkMenu = JSON.parse(localStorage.getItem("drinkMenu")) || []
let drinkMenuArr = [...drinkMenuArray, ...storedDrinkMenu]

function FoodMenu() {
	// const drinkArr = [
	// 	{
	// 		name: "Coca-cola",
	// 		price: "35kr",
	// 	},
	// 	{
	// 		name: "Fanta",
	// 		price: "35kr",
	// 	},
	// 	{
	// 		name: "Sprite",
	// 		price: "35kr",
	// 	},
	// 	{
	// 		name: "Lingondricka",
	// 		price: "10kr",
	// 	},
	// 	{
	// 		name: "Festis",
	// 		price: "15kr",
	// 	},
	// ]
	return (
		<div>
			<h2 className="food-heading">Meny</h2>
			<ul className="food-ul">
				{foodMenuArr.map((item) => (
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
					</li>
				))}
			</ul>
			<h2 className="food-heading">Dryck</h2>
			{drinkMenuArr.map((drink, index) => (
				<div key={index}>
					<ul className="drink-ul">
						<li className="drink-li" key={drink.name}>
							{drink.name}
						</li>
						<li className="drink-li" key={drink.price}>
							{drink.price}
						</li>
					</ul>
				</div>
			))}
		</div>
	)
}

export default FoodMenu
export { foodMenuArr }
