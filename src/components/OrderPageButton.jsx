import { useState } from "react"

function OrderPageButton({ setOrderList, item, drink }) {
	const [showMessage, setShowMessage] = useState(false)

	const testFunction = () => {
		console.log("1", showMessage)
		setShowMessage(true)
		console.log("2", showMessage)
		setTimeout(() => {
			setShowMessage(false)
			console.log("3", showMessage)
		}, 1000)

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
