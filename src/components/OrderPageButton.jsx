import { useState } from "react"

function OrderPageButton({ setOrderList, item, drink }) {

	const testFunction = () => {
		setOrderList((orderList) => {
            if (item) {
			let copiedList = [...orderList]
			copiedList.push(item)
			console.log(copiedList)
			return copiedList
            } else if (drink) {
			let copiedList = [...orderList]
			copiedList.push(drink)
			console.log(copiedList)
			return copiedList 
            }

		})
	}

	return (
		<>

		<button className="food-button" onClick={(testFunction, showMessage)}>
			<span className="material-symbols-outlined">add_circle</span>
		</button>
		</>
	)
}

export default OrderPageButton