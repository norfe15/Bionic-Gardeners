import React, { useState } from 'react';
import { isValid, isValidPassword } from "./validation";

function LoginModal({setIsLoggedIn, setPage}) {
    const [userName, setUserName] = useState('')
    const [wrongUserName, setWrongUserName] = useState(false)
    const [userPassword, setUserPassword] = useState('')
    const [wrongUserPassword, setWrongUserPassword] = useState(false)

    const [isValidName, notValidName] = isValid(userName)
    const isValidClassName = wrongUserName ? (isValidName ? 'correct' : 'incorrect') : ''

    const [isValidUserPassword, notValidUserPassword] = isValidPassword(userPassword)
    const isValidClassPassword = wrongUserPassword ? (isValidUserPassword ? 'correct-password' : 'incorrect-password') : ''

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userName === "Admin" && userPassword === "mums") {
            setIsLoggedIn(true)
            const overlay = document.querySelector(".overlay")
            overlay.classList.toggle("hidden")
			document.body.classList.remove("no-overflow")
        }
    }

    return (
        <section className="overlay hidden">
            <section className="modal">
                <h1>Logga in</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-input-container">
                        <legend className="login-guide-text"> Användarnamn <span className="material-symbols-outlined">face_6</span></legend>
                        <input type='text'
                            className={isValidClassName}
                            placeholder="Namn"
                            value={userName}
                            onChange={event => setUserName(event.target.value)}
                            onBlur={() => setWrongUserName(true)}>
                        </input>
                        <span className='input-icon'>{wrongUserName ? (isValidName ? '✔️' : '❌') : ''}</span>
                        <span className='display-error'> {wrongUserName ? notValidName : ''}</span>
                    </div>
                    <div className="login-input-container">
                        <legend className="login-guide-text">Lösenord <span className="material-symbols-outlined">password</span></legend>
                        <input type='password'
                            className={isValidClassPassword}
                            placeholder="Minst 4 tecken"
                            value={userPassword}
                            onChange={event => setUserPassword(event.target.value)}
                            onBlur={() => setWrongUserPassword(true)}>
                        </input>
                        <span className='input-icon'>{wrongUserPassword ? (isValidUserPassword ? '✔️' : '❌') : ''}</span>
                        <span className='display-error'> {wrongUserPassword ? notValidUserPassword : ''}</span>
                    </div>
                    <button className="login-btn" onClick={event => setUserPassword(event.target.value)}>Logga in</button>
                </form>

            </section>
        </section>
    )
}

export default LoginModal