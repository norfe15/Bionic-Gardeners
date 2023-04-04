import React, { useState } from "react"

function FoodMenu() {
  const menuArr = [
    {
      name: 'Fisherman’s Burger',
      ingredients:'Grovt bröd, 400g torskfilé, gräslök, tomat, romsås',
      img: './src/images/fisk.webp'
    },
    {
      name: 'The Spice Grills',
      ingredients: 'Briochebröd, 700g högrevsfärs, pepperjackost, dijonsenap, rökt paprikapulver, jalapeno',
      img: './src/images/spice.jpg'
    },
    {
      name: 'Greenie Burger',
      ingredients: 'Surdegsbröd, 400g Quorn, goudaost, cheddarost, philadelphia, jalapeno, chilisås',
      img: './src/images/quornburger.webp'
    },
    {
      name: 'Bigfoot Burger',
      ingredients: 'Briochebröd, 800g högrevsfärs, guacamole pepperjackost, chilisås, tomat, sallad',
      img: './src/images/juiciest.jpg'
    },
    {
      name: 'Mack Patty',
      ingredients: 'Surdegsbröd, 450g nötfärs, bacon, cheddarost, tomat, rödlök',
      img: './src/images/burger_1.jpg'
    }
  ]

  return (
    <div>
      <ul className="food-ul">
        {menuArr.map((item) => (
          <li className='food-li' key={item.name}>
            <h2 className='food-h2'>{item.name}</h2>
            <img className='food-img' src={item.img} alt={item.name} />
            <p className='food-p'>{item.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FoodMenu

