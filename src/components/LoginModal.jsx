import { useState } from "react"
import { isValid, isValidPassword } from "./validation"

function LoginModal({ setIsLoggedIn, setPage }) {
	const [userName, setUserName] = useState("")
	const [wrongUserName, setWrongUserName] = useState(false)
	const [userPassword, setUserPassword] = useState("")
	const [wrongUserPassword, setWrongUserPassword] = useState(false)
    const [isEmptyName, setIsEmptyName] = useState(false)
    const [isEmptyPassword, setIsEmptyPassword] = useState(false)

	const [isValidName, notValidName] = isValid(userName)
	const isValidClassName = wrongUserName
		? isValidName
			? "correct"
			: "incorrect"
		: ""

	const [isValidUserPassword, notValidUserPassword] =
		isValidPassword(userPassword)
	const isValidClassPassword = wrongUserPassword
		? isValidUserPassword
			? "correct-password"
			: "incorrect-password"
		: ""

	const handleSubmit = (event) => {
		event.preventDefault()
		if (userName === "Admin" && userPassword === "mums") {
			setIsLoggedIn(true)
			const overlay = document.querySelector(".overlay")
			overlay.classList.toggle("hidden")
			document.body.classList.remove("no-overflow")
			setPage("HomePage")
            setUserName('')
            setUserPassword('')
            setIsEmptyName(true)
            setIsEmptyPassword(true)
		}
	}

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
        if (e.target.value === "") {
			setIsEmptyName(true);
		} else {
			setIsEmptyName(false);
		}
    }

    const handleUserPassword = (e) => {
        setUserPassword(e.target.value)
        if (e.target.value === "") {
			setIsEmptyPassword(true);
		} else {
			setIsEmptyPassword(false);
		}
    }
 
	return (
		<section className="overlay hidden">
			<section className="modal">
				<h1>Logga in</h1>
				<form onSubmit={handleSubmit} className="login-form">
					<div className="login-input-container">
						<legend className="login-guide-text">
							{" "}
							Användarnamn{" "}
							<span className="material-symbols-outlined">
								face_6
							</span>
						</legend>
						<input
							type="text"
							className={isValidClassName}
							placeholder="Namn"
							value={userName}
							onChange={handleUserNameChange}
							onBlur={() => setWrongUserName(true)}
						></input>
						<span className="input-icon">
							{isEmptyName ? '' : wrongUserName ? (isValidName ? "✔️" : "❌") : ""}
						</span>
						<span className="display-error">
							{" "}
							{isEmptyName ? '' : wrongUserName ? notValidName : ""}
						</span>
					</div>
					<div className="login-input-container">
						<legend className="login-guide-text">
							Lösenord{" "}
							<span className="material-symbols-outlined">
								password
							</span>
						</legend>
						<input
							type="password"
							className={isValidClassPassword}
							placeholder="Minst 4 tecken"
							value={userPassword}
							onChange={handleUserPassword}
							onBlur={() => setWrongUserPassword(true)}
						></input>
						<span className="input-icon">
							{isEmptyPassword ? '' : wrongUserPassword
								? isValidUserPassword
									? "✔️"
									: "❌"
								: ""}
						</span>
						<span className="display-error">
							{" "}
							{isEmptyPassword ? '' : wrongUserPassword ? notValidUserPassword : ""}
						</span>
					</div>
					<button
						className="login-btn"
						onClick={(event) => setUserPassword(event.target.value)}
					>
						Logga in
					</button>
				</form>
			</section>
		</section>
	)
}

export default LoginModal
