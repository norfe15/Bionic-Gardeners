import Header from "./header"
import React from "react"
function Menu() {

    const login = () => {
        const overlay = document.querySelector('.overlay')
        overlay.classList.toggle('hidden')
    }

    const meny = () => {
    }

    return (
    <menu>
        <li>
            <button className="menu-btn" >
                <span className="material-symbols-outlined">home</span>
                <legend>Hem</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn" onClick={meny}>
                <span className="material-symbols-outlined">menu_book</span>
                <legend>Meny</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn">
                <span className="material-symbols-outlined">order_play</span>
                <legend>Order</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn" onClick={login}>
                <span className="material-symbols-outlined">login</span>
                <legend>Logga in</legend>
                </button>
        </li>
    </menu>
    )
}

export default Menu
