import { useState } from "react"
import { v4 as uuid } from "uuid"

function OrderPage({ orderList, setOrderList }) {
	const [completeOrder, setCompleteOrder] = useState("")

	const noSelectedFoodInBasket = (
		<section className="order-error">
			<span className="material-symbols-outlined">problem</span>
			<h1>Du har inget i beställningar!</h1>
		</section>
	)

	const deleteDish = (index) => {
		let copy = orderList.filter((dish, i) => i !== index)
		setOrderList(copy)
		console.log("Copy", copy, "orderList", orderList)
	}

	const orderCompleteTrigger = () => {
		setCompleteOrder(
			`Du har nu slutfört din beställning. Ditt ordernummer: #  ${Math.floor(
				Math.random() * 100
			)}`
		)
	}

	return (
		<div className="order-page">
			<h1 className="order-heading">Beställningar</h1>
			{orderList.length == 0 ? (
				""
			) : (
				<section className="order-total">
					<span>
						Totala priset:{" "}
						{orderList.reduce(
							(delsumma, order) =>
								delsumma +
								Number(order.price.replace("kr", "")),
							0
						)}{" "}
						kr
					</span>
				</section>
			)}
			<ul className="order-list">
				{orderList.length == 0
					? noSelectedFoodInBasket
					: orderList.map((order, index) => (
								!order.ingredients ? <li className="order-listelem order-drink" key={uuid}>
								<div className="order-box">
									<h2 className="order-name">{order.name}</h2>
									<p className="order-price">{order.price}</p>
								</div>
								<label className="food-button-bar">
									<button
										className="food-button"
										onClick={() => deleteDish(index)}
									>
										<span className="material-symbols-outlined">
											cancel
										</span>
									</button>
								</label>
							</li>
							: <li className="order-listelem order-dish" key={uuid}>
								<div className="order-box">
									<h2 className="order-name">{order.name}</h2>
										<img
										className="order-img"
										src={order.img}
										alt={order.name}
									/>
									
									<p className="order-price">{order.price}</p>
								</div>
									<p className="order-ingredients">
									{order.ingredients}
								</p>
								
								<label className="food-button-bar">
									<button className='food-button' onClick={() => deleteDish(index)}>
										<span className="material-symbols-outlined">
											cancel
										</span>
									</button>
								</label>
							</li>
							))}
			</ul>
			{orderList.length == 0 ? (
				""
			) : (
				<section className="order-complete">
					<button
						className="finish-order"
						onClick={orderCompleteTrigger}
					>
						Slutför beställning
					</button>
					<p>{completeOrder}</p>
				</section>
			)}
		</div>
	)
}

export default OrderPage
