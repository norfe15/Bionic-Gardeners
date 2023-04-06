
function OrderPageButton({addFoodToOrder, setAddFoodToOrder}) {

    const testFunction = () => {
        const orderBox = document.querySelector('.order-box')

        const orderContainer = document.createElement('section'), orderName = document.createElement('h3'), orderPrice = document.createElement('p'), orderImg = document.createElement('img'), orderIngredients = document.createElement('p')

        orderContainer.classList.add('order-container')

        orderName.textContent = addFoodToOrder.name

        orderName.classList.add('order-name')

        orderImg.src = addFoodToOrder.img

        orderImg.classList.add('order-img')

        orderPrice.textContent = addFoodToOrder.price

        orderPrice.classList.add('order-price')

        orderIngredients.textContent = addFoodToOrder.ingredients

        orderContainer.append(orderName, orderImg, orderPrice)

        orderIngredients.classList.add('order-ingredients')

        orderBox.append(orderContainer, orderIngredients)

    }

    return (
        <button onClick={testFunction}>
            <span className="material-symbols-outlined">add_circle</span>
        </button>
    )
}

export default OrderPageButton