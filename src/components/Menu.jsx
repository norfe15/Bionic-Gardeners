import React, { useState } from "react"
function Menu({setPage, setSidePage}) {
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
        setSidePage('')
    }

    const orderPage = () => {

        console.log('orderPage klickad');
        setPage('FoodMenu')
        setSidePage('OrderPage')
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
            <button className="menu-btn" onClick={orderPage}>
                <span className="material-symbols-outlined">order_play</span>
                <legend>Beställningar</legend>
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
