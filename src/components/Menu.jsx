import React from "react"
function Menu({setPage}) {

    const loginModal = () => {
        const overlay = document.querySelector('.overlay')
        overlay.classList.toggle('hidden')

        overlay.addEventListener('click', event => {
            event.stopPropagation()
            overlay.classList.add('hidden')
        })

        overlay.children[0].addEventListener('click', event => {
            event.stopPropagation()
        })

    }

    return (
    <menu>
        <li>
            <button className="menu-btn" onClick={() => {setPage('HomePage')}} >
                <span className="material-symbols-outlined">home</span>
                <legend>Hem</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn" onClick={() => {setPage('FoodMenu')}}>
                <span className="material-symbols-outlined">menu_book</span>
                <legend>Meny</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn" /*onClick={{() => {setPage('Order')}} }*/ >
                <span className="material-symbols-outlined">order_play</span>
                <legend>Order</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn" onClick={loginModal}>
                <span className="material-symbols-outlined">login</span>
                <legend>Logga in</legend>
                </button>
        </li>
    </menu>
    )
}

export default Menu
