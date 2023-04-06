import React, {useState } from "react"
import OrderPage from "./OrderPage"
import OrderPageButton from "./OrderPageButton"

function FoodMenu() {

    const [addFoodToOrder, setAddFoodToOrder] = useState('')

    const menuArr = [
        {
            name: 'Fisherman’s Burger',
            ingredients: 'Grovt bröd, 400g torskfilé, gräslök, tomat, romsås',
            price: '115kr',
            img: './src/images/fisk.webp'
        },
        {
            name: 'The Spice Grills',
            ingredients: 'Briochebröd, 700g högrevsfärs, pepperjackost, dijonsenap, rökt paprikapulver, jalapeno',
            price: '119kr',
            img: './src/images/spice.jpg'
        },
        {
            name: 'Greenie Burger',
            ingredients: 'Surdegsbröd, 400g Quorn, goudaost, cheddarost, philadelphia, jalapeno, chilisås',
            price: '119kr',
            img: './src/images/quornburger.webp'
        },
        {
            name: 'Bigfoot Burger',
            ingredients: 'Briochebröd, 800g högrevsfärs, guacamole pepperjackost, chilisås, tomat, sallad',
            price: '139kr',
            img: './src/images/juiciest.jpg'
        },
        {
            name: 'Mack Patty',
            ingredients: 'Surdegsbröd, 450g nötfärs, bacon, cheddarost, tomat, rödlök',
            price: '129kr',
            img: './src/images/burger_1.jpg'
        }
    ]

    const drinkArr = [
        {
            name: 'Coca-cola',
            price: '35kr'
        },
        {
            name: 'Fanta',
            price: '35kr'
        },
        {
            name: 'Sprite',
            price: '35kr'
        },
        {
            name: 'Lingondricka',
            price: '10kr'
        },
        {
            name: 'Festis',
            price: '15kr'
        },
    ]
    return (
        <>  
        <OrderPage />
        <div className="food-menu">
            <h2 className="food-heading">Meny</h2>
            <ul className="food-ul">
                {menuArr.map((item) => (
                    <li className='food-li' key={item.name}>
                        <div className="img-container">
                        <h2 className='food-h3'>{item.name}</h2>
                        <img className='food-img' src={item.img} alt={item.name} />
                        <p className="food-price">{item.price}</p>
                        </div>
                        <p className='food-p'>{item.ingredients}</p>
                        <OrderPageButton addFoodToOrder={item} />
                    </li>
                ))}

            </ul>
                <h2 className="food-heading">Dryck</h2>
                {drinkArr.map((drink, index) => (
                    <div key={index}>
                        <ul className="drink-ul">
                            <li className="drink-li" key={drink.name}>{drink.name}</li>
                            <li className="drink-li" key={drink.price}>{drink.price}</li>
                        </ul>
                    </div>
                ))}
        </div>
        </>
    )
}

export default FoodMenu

