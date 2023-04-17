function OrderPageButton({ setOrderList, item, drink }) {
	const testFunction = () => {
		setOrderList((orderList) => {
            if (item) {
			// Gör kopia av orderList
			// Lägg till item till nya orderList
			// Retunera nya orderList

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
		<button className="food-button" onClick={testFunction}>
			<span className="material-symbols-outlined">add_circle</span>
		</button>
	)
}

export default OrderPageButton