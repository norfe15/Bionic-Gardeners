import React, { useState } from "react"
import { foodMenuArray } from "./foodMenuArray.js"
import { drinkMenuArray } from "./drinkMenuArray.js"
import OrderPage from "./OrderPage"
import Menu from "./Menu.jsx"
import OrderPageButton from "./OrderPageButton"
import AddDrink from "./AddDrink.jsx"
import AddFood from "./AddFood.jsx"

const storedFoodMenu = JSON.parse(localStorage.getItem("foodMenu")) || []
let foodMenuArr = [...foodMenuArray, ...storedFoodMenu]

const storedDrinkMenu = JSON.parse(localStorage.getItem("drinkMenu")) || []
let drinkMenuArr = [...drinkMenuArray, ...storedDrinkMenu]

function FoodMenu({setSidePage, sidePage, orderList, setOrderList}) {
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
        <>
            {sidePage === 'OrderPage' && <OrderPage orderList={orderList} />}
            <AddFood />
			<AddDrink />
           {sidePage !== 'OrderPage' && <div className="food-menu">
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
                            <OrderPageButton item={item} setOrderList={setOrderList} />
                        </li>
                    ))}
                </ul>
                <h2 className="food-heading">Dryck</h2>
                {drinkMenuArr.map((item, index) => (
                    <div key={index}>
                        <ul className="drink-ul">
                            <li className="drink-li" key={item.name}>
                                {item.name}
                            </li>
                            <li className="drink-li" key={item.price}>
                                {item.price}
                                <OrderPageButton item={item} setOrderList={setOrderList} />
                            </li>
                        </ul>
                    </div>
                ))}
            </div>}
        </>
	)
}

export default FoodMenu
export { foodMenuArr }
