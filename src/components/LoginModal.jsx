function LoginModal() {
    return (
        <section className="overlay hidden">
            <section className="modal">
                <h1>Logga in</h1>
                <form>
                    <legend><span className="material-symbols-outlined">face_6</span> Användarnamn</legend>
                    <input type='text' placeholder="Namn"></input>
                    <legend><span className="material-symbols-outlined">password</span> Lösenord</legend>
                    <input type='password' placeholder="Lösenord"></input>
                    <legend>Har du glömt bort ditt lösenord? Lösenordet är <span>mums</span>.</legend>
                    <button>Logga in</button>
                </form>

            </section>
        </section>
    )
}

export default LoginModal