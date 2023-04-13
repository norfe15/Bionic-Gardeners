import { useState } from "react"

function OrderPage({orderList, setOrderList}) {

    const [completeOrder, setCompleteOrder] = useState('')

    const noSelectedFoodInBasket = <section className="order-error"><span className="material-symbols-outlined">problem</span><h1>Du har inget i beställningar!</h1></section>


    const deleteDish = (orderName) => {
        let copy = orderList.filter(dish => (dish.name !== orderName))
        setOrderList(copy)
        console.log('Copy', copy, 'orderList', orderList );
    }

    const orderCompleteTrigger = () => {
      setCompleteOrder(`Du har nu slutfört din beställning. Ditt ordernummer: #  ${Math.floor(Math.random() * 100)}`)
    }

    return (
        <div className="order-page">
            <h1 className="order-heading">Beställningar</h1>
            {orderList.length == 0 ? "" : <section className="order-total">
                    <span>Totala priset: {orderList.reduce((delsumma, order) => delsumma + Number(order.price.replace('kr', '')), 0)} kr
                    </span>
                </section>}
            <ul className="order-list">
                {orderList.length == 0 ? noSelectedFoodInBasket : orderList.map(order  => (
                    <>
                    <li className="order-box" key={order.name}>
                            <div className="order-container">
                                <h2 className="order-name">{order.name}</h2>
                                <img
                                    className="order-img"
                                    src={order.img}
                                    alt={order.name}
                                />
                                <p className="order-price">{order.price}</p>
                            </div>
                            <p className="order-ingredients">{order.ingredients}</p>
                            <div className="food-button-bar">
                                <button onClick={() => deleteDish(order.name)}><span className="material-symbols-outlined">cancel</span></button>
                            </div>
                        </li>
                    </> 
                ))}
            </ul>
            {orderList.length == 0 ? "" : <section className="order-complete">
                    <button onClick={orderCompleteTrigger}>Slutför beställning
                    </button>
                    {completeOrder}
                    </section>}
        </div>

    )
}

export default OrderPage