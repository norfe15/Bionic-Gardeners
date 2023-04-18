import { useState } from "react"
import { isValid, isValidPhone, isValidMail } from "./validation"

const ContactForm = () => {
	const [name, setName] = useState("")
	const [lastname, setLastname] = useState("")
	const [phone, setPhone] = useState("")
	const [mail, setMail] = useState("")
	const [wrongName, setWrongName] = useState(false)
	const [wrongLastname, setWrongLastname] = useState(false)
	const [wrongPhone, setWrongPhone] = useState(false)
	const [wrongMail, setWrongMail] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [isEmptyName, setIsEmptyName] = useState(false)
	const [isEmptyLastName, setIsEmptyLastName] = useState(false)
	const [isEmptyPhone, setIsEmptyPhone] = useState(false)
	const [isEmptyMail, setIsEmptyMail] = useState(false)

	const [isValidName, notValidAddName] = isValid(name)
	const isValidClassName = wrongName
		? isValidName
			? "valid"
			: "invalid"
		: ""
	const [isValidLastname, notValidLastname] = isValid(lastname)
	const isValidClassLastname = wrongLastname
		? isValidLastname
			? "valid"
			: "invalid"
		: ""
	const [isValidPhoneNumber, notValidPhoneNumber] = isValidPhone(phone)
	const isValidClassPhone = wrongPhone
		? isValidPhoneNumber
			? "valid"
			: "invalid"
		: ""
	const [isValidMailAdress, notValidMailAdress] = isValidMail(mail)
	const isValidClassMail = wrongMail
		? isValidMailAdress
			? "valid"
			: "invalid"
		: ""

	function handleSubmit(event) {
		event.preventDefault()
		if (
			isValidName &&
			isValidLastname &&
			isValidPhoneNumber &&
			isValidMailAdress
		) {
			setName("")
			setLastname("")
			setPhone("")
			setMail("")
			setIsEmptyName(true)
			setIsEmptyLastName(true)
			setIsEmptyPhone(true)
			setIsEmptyMail(true)
		} else if (name == "" || lastname == "" || phone == "" || mail == "") {
			console.log("Ska synas")
			setIsVisible(true)
		}
		setTimeout(() => {
			setIsVisible(false)
		}, 2000)
	}

	function handleNameChange(e) {
		setName(e.target.value)
		if (e.target.value === "") {
			setIsEmptyName(true)
		} else {
			setIsEmptyName(false)
		}
	}

	function handleLastnameChange(e) {
		setLastname(e.target.value)
		if (e.target.value === "") {
			setIsEmptyLastName(true)
		} else {
			setIsEmptyLastName(false)
		}
	}

	function handlePhoneChange(e) {
		setPhone(e.target.value)
		if (e.target.value === "") {
			setIsEmptyPhone(true)
		} else {
			setIsEmptyPhone(false)
		}
	}

	function handleMailChange(e) {
		setMail(e.target.value)
		if (e.target.value === "") {
			setIsEmptyMail(true)
		} else {
			setIsEmptyMail(false)
		}
	}

	return (
		<div className="contact-box">
			<h2>Kontakt</h2>
			<form className="contact-form">
				{isVisible && (
					<div className="popupInvalid">
						Vänligen fyll i alla fälten.
					</div>
				)}
				<div className="order-container-contact">
					<legend>Namn</legend>
					<input
						type="text"
						placeholder="Namn"
						value={name}
						className={isValidClassName}
						onChange={handleNameChange}
						onBlur={() => setWrongName(true)}
					></input>
					<span className="input-icon-order-contact">
						{isEmptyName
							? ""
							: wrongName
							? isValidName
								? "✔️"
								: "❌"
							: ""}
					</span>
					<span className="display-error-order-contact">
						{" "}
						{isEmptyName ? "" : wrongName ? notValidAddName : ""}
					</span>
				</div>

				<div className="order-container-contact">
					<legend>Efternamn</legend>
					<input
						type="text"
						placeholder="Efternamn"
						value={lastname}
						className={isValidClassLastname}
						onChange={handleLastnameChange}
						onBlur={() => setWrongLastname(true)}
					></input>
					<span className="input-icon-order-contact">
						{isEmptyLastName
							? ""
							: wrongLastname
							? isValidLastname
								? "✔️"
								: "❌"
							: ""}
					</span>
					<span className="display-error-order-contact">
						{" "}
						{isEmptyLastName
							? ""
							: wrongLastname
							? notValidLastname
							: ""}
					</span>
				</div>

				<div className="order-container-contact">
					<legend>Telefon</legend>
					<input
						type="tel"
						placeholder="Telefon"
						maxLength="10"
						value={phone}
						className={isValidClassPhone}
						onChange={handlePhoneChange}
						onBlur={() => setWrongPhone(true)}
					></input>
					<span className="input-icon-order-contact">
						{isEmptyPhone
							? ""
							: wrongPhone
							? isValidPhoneNumber
								? "✔️"
								: "❌"
							: ""}
					</span>
					<span className="display-error-order-contact">
						{" "}
						{isEmptyPhone
							? ""
							: wrongPhone
							? notValidPhoneNumber
							: ""}
					</span>
				</div>

				<div className="order-container-contact">
					<legend>E-mail</legend>
					<input
						type="email"
						placeholder="E-mail"
						value={mail}
						className={isValidClassMail}
						onChange={handleMailChange}
						onBlur={() => setWrongMail(true)}
					></input>
					<span className="input-icon-order-contact">
						{isEmptyMail
							? ""
							: wrongMail
							? isValidMailAdress
								? "✔️"
								: "❌"
							: ""}
					</span>
					<span className="display-error-order-contact">
						{" "}
						{isEmptyMail ? "" : wrongMail ? notValidMailAdress : ""}
					</span>
				</div>

				<textarea name="" id="" cols="30" rows="10"></textarea>

				<button type="submit" onClick={handleSubmit}>
					Kontakta oss
				</button>
			</form>
		</div>
	)
}

export default ContactForm
