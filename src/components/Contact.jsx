

const ContactForm = () => {


    const [isValidName, notValidAddName] = isValid(name)
    const isValidClassName = wrongName ? isValidName ? "valid" : "invalid" : ""
    const [isValidLastname, notValidLastname] = isValid(lastname)
    const isValidClassLastname = wrongLastname ? isValidLastname ? "valid" : "invalid" : ""
    const [isValidPhoneNumber, notValidPhoneNumber] = isValidPhone(phone)
    const isValidClassPhone = wrongPhone ? isValidPhoneNumber ? "valid" : "invalid" : ""
    const [isValidMailAdress, notValidMailAdress] = isValidMail(mail)
    const isValidClassMail = wrongMail ? isValidMailAdress ? "valid" : "invalid" : ""

    const handleSubmit = (event) => {
        event.preventDefault()
        if (name == '' && lastname == '' && phone == '' && mail == '') {
            setIsVisible(true)
		}
		setTimeout(() => {
			setIsVisible(false)
		}, 2000)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleLastnameChange(e) {
        setLastname(e.target.value)
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value)
    }

    function handleMailChange(e) {
        setMail(e.target.value)
    }

    return (
        <div className="contact-box">
            <h2>Kontakt</h2>
            <form className="contact-form" onClick={handleSubmit}>
                {isVisible && <div className="popupInvalid">Vänligen fyll i alla fällten.</div>}
                <div className="order-container-contact">
                    <legend>Namn</legend>
                    <input type="text" placeholder="Namn"
                        value={name}
                        className={isValidClassName}
                        onChange={handleNameChange}
                        onBlur={() => setWrongName(true)}>
                    </input>
                    <span className="input-icon-order-contact">
                        {wrongName ? (isValidName ? "✔️" : "❌") : ""}
                    </span>
                    <span className="display-error-order-contact">{" "}{wrongName ? notValidAddName : ""}
                    </span>
                </div>

                
                <legend>Namn</legend>
                <input type="text" placeholder="Namn" />
                
                <legend>Efternamn</legend>
                <input type="text" placeholder="Efternamn" />

                <legend>Telefon</legend>
                <input type="tel" placeholder="Telefon" />

                <legend>E-mail</legend>
                <input type="email" placeholder="E-mail" />
               

                
                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button>
                    Kontakta oss
                </button>

            </form>
        </div>
    )
}

export default ContactForm