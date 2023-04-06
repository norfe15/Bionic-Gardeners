import React from "react"
function Menu({setPage}) {

    const toTopofPage = () => {
       window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
          });
    }

    // Modal

    const loginModal = () => {
        const overlay = document.querySelector('.overlay')
        overlay.classList.toggle('hidden')

        toTopofPage()
        document.body.classList.toggle('no-overflow')

        overlay.addEventListener('click', event => {
            event.stopPropagation()
            overlay.classList.add('hidden')
            document.body.classList.remove('no-overflow')
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
