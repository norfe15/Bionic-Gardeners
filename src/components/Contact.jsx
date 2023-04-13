

const ContactForm = () => {


    return (
        <div className="contact-box">
            <h2>Kontakt</h2>
            <form className="contact-form">

                
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