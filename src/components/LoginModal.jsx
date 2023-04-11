import { useState } from "react";

function LoginModal() {

const handleSubmit = (event) => {
    event.preventDefault();
}

const [password, setPassword] = useState('')

    return (
        <section className="overlay hidden">
            <section className="modal">
                <h1>Logga in</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <legend><span className="material-symbols-outlined">face_6</span> Användarnamn</legend>
                    <legend><span className="material-symbols-outlined">password</span> Lösenord</legend>
                    <input type='password' placeholder="Lösenord"></input>
                    <button className="login-btn" >Logga in</button>
                </form>

            </section>
        </section>
    )
}

export default LoginModal