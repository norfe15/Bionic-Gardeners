function OrderPage({orderList}) {
    let noFoodInBasket = 'Du har inget i beställningar!'

    console.log('OrderPage renderas', orderList);
    return (
        <div className="order-page">
            <ul className="order-box">
                {orderList == "" ? noFoodInBasket : orderList.map(order  => (
                    <>
                        <li className="order-name" key={order.name}>{order.name}</li>
                        <li className="order-img"key={order.img} ><img src={order.img} /></li>
                        <li className="order-price" key={order.price}>{order.price}</li>
                        <li className="order-ingredients" key={order.ingredients}>{order.ingredients}</li>
                    </>
                ))}
            </ul>
        </div>

    )
}

export default OrderPage