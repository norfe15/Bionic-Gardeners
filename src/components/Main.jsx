import LoginModal from "./LoginModal"

function Main() {
    return (
        <main>
            <>
                <LoginModal/>
                <div className="hero-image-box">
                    <img src="./src/images/burger.jpeg" alt="Bild på hamburgare" />
                </div>

                <div className="shop-info">
                    <p>American Burgers är världsledande inom
                    amerikanska burgare. 
                    Vi är inte en snabbmatskedja, utan
                    en kvalitets restaurang.
                    Kom till oss för att smaka på riktig 
                    amerikansk känsla och
                    kärlek. Vi har både vanliga burgare och
                    vegetarianska burgare för alla våra kunder.
                    Ingen ska vara utan!</p>
                </div>

                <div className="hero-image-box">
                    <img src="./src/images/burger2.jpeg" alt="Bild på en hamburgare" />
                </div>

                <div className="shop-info">
                    <p>Vi har flera olika alternativ på kött, från biff
                    till plant beef! Kan du inte bestämma dig,
                    så rekommenderar vi att du testar våran nya
                    plant beef med chipotle smak. </p>
                </div>
            </>
        </main>
    )
}

export default Main