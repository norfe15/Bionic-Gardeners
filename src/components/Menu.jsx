import React from "react"
function Menu({setPage}) {

    const toTopofPage = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // Modal

    const loginModal = () => {
        const overlay = document.querySelector('.overlay')
        overlay.classList.toggle('hidden')

        toTopofPage()

        overlay.addEventListener('click', event => {
            event.stopPropagation()
            overlay.classList.add('hidden')
        })

        overlay.children[0].addEventListener('click', event => {
            event.stopPropagation()
        })

    }

    // Pages

    const homePage = () => {
            setPage('HomePage')
            toTopofPage()
    }

    const foodMenu = () => {
        setPage('FoodMenu')
        toTopofPage()
    }

    return (
    <menu>
        <li>
            <button className="menu-btn" onClick={homePage} >
                <span className="material-symbols-outlined">home</span>
                <legend>Hem</legend>
                </button>
        </li>
        <li>
            <button className="menu-btn" onClick={foodMenu}>
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
