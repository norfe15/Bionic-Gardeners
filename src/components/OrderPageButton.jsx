import { useState } from "react"

function OrderPageButton({ setOrderList, item, drink }) {
	const [showMessage, setShowMessage] = useState(false)

	const testFunction = () => {
		setOrderList((orderList) => {
            if (item) {
			setShowMessage(true)

			setTimeout(() => {

				setShowMessage(false)
			}, 1000)
			

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
		
				{showMessage === true && <div className="food-add-message"> <p> Lagt till beställning </p> </div>}
			
		</>
	)
}

export default OrderPageButton
