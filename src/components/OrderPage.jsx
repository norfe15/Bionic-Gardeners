function OrderPage({orderList}) {
    const noSelectedFoodInBasket = <section className="order-error"><span className="material-symbols-outlined">problem</span><h1>Du har inget i beställningar!</h1></section>

    console.log('OrderPage renderas', orderList);
    return (
        <div className="order-page">
            <h1 className="order-heading">Beställningar</h1>
            {orderList == "" ? "" : <section className="order-total">
                    <span>Totala priset: {orderList.reduce((delsumma, order) => delsumma + Number(order.price.replace('kr', '')), 0)} kr
                    </span>
                </section>}
            <ul className="order-list">
                {orderList == "" ? noSelectedFoodInBasket : orderList.map(order  => (
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
                            <button onClick={removeSpecificOrder}>Ta bort</button>
                        </li>
                    </> 
                ))}
            </ul>
        </div>

    )
}

export default OrderPage