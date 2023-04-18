import { useState } from "react"

function OrderPageButton({ setOrderList, item, drink }) {
	const [showMessage, setShowMessage] = useState(false)

	const testFunction = () => {
		setShowMessage(true)

		setTimeout(() => {

			setShowMessage(false)
		}, 2000)
		console.log("button pressed 1")
		setOrderList((orderList) => {
            if (item) {
			// Gör kopia av orderList
			// Lägg till item till nya orderList
			// Retunera nya orderList
			console.log("button pressed 2")

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
		<><button className="food-button" onClick={testFunction}>
			<span className="material-symbols-outlined">add_circle</span>
		</button>
		
		{
		showMessage === true && 
		<div className="food-add-message"> <p> Lagt till beställning </p> </div>
		}
			
		</>
	)
}

export default OrderPageButton
