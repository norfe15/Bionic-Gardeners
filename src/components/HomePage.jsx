import burger from "../components/images/burger.jpeg"
import restaurant from "../components/images/restaurant.jpg"
import restauranttwo from "../components/images/restaurant2.jpg"
import burgertwo from "../components/images/burger2.jpeg"
import burgerthree from "../components/images/burger3.jpeg"
import cooks from "../components/images/kockar.jpg"

function HomePage() {
	return (
		<main>
			<div className="hero-image-box">
				<img
					src={burger}
					alt="Bild på hamburgare"
				/>
			</div>

			<div className="shop-info">
				<h1>Om våran restaurang</h1>
				<p>
					American Burgers är en väldigt ny restaurang som ligger på
					adressen <i>10 Old Street, London</i> i Sverige, men vi är
					redan världsledande inom amerikanska burgare i Norden. Vi
					kallar oss inte för en vanlig snabbmatskedja, utan en riktig
					kvalitets restaurang.
				</p>
			</div>

			<div className="hero-image-box">
				<img
					src={restauranttwo}
					alt="Bild för resturangen"
				/>
			</div>

			<div className="shop-info">
				<p>
					Vänligen kom till oss för att smaka på riktig amerikansk
					känsla och kärlek. Vi har klassiska burgare från nötkött
					till kyckling, fisk och vegetarianska burgare! Ingen ska
					vara utan!
				</p>
			</div>

			<div className="hero-image-box">
				<img
					src={cooks}
					alt="Bild på våra kockar"
				/>
			</div>

			<div className="shop-info">
				<h2>Brett utsprung i köket!</h2>
				<p>
					Många av våra kockar kommer egentligen ifrån Amerika, men
					som har flyttat till Sverige för att få ett lugnare liv och
					som vill ge sin kärlek till mat till oss i övriga världen.
				</p>
			</div>

			<div className="hero-image-box">
				<img
					src={burgertwo}
					alt="Bild på en hamburgare"
				/>
			</div>

			<div className="shop-info">
				<h2>Olika burgare</h2>
				<p>
					Vi har flera olika alternativ på burgare, från biff till
					plant beef! Kan du inte bestämma dig, så rekommenderar vi
					att du testar våran nya plant beef med chipotle smak.
				</p>
			</div>

			<div className="hero-image-box">
				<img
					src={burgerthree}
					alt="Bild på en hamburgare"
				/>
			</div>

			<div className="shop-info">
				<h2>Nytt nästa månad!</h2>
				<p>
					Nästa månad kommer vi servera våra besökare Korean fushion
					style hamburgare med gnutta amerikansk känsla. Den
					hamburgaren kommer bara finnas i våran meny i en begränsad
					tid, så passa på att skaffa den när den ändå finns!
				</p>
			</div>

			<div className="hero-image-box">
				<img
					src={restaurant}
					alt="Bild för resturangen"
				/>
			</div>

			<div className="shop-info">
				<h2>Kontakta oss</h2>
				<p>
					Kontakta oss gärna om du har nya idéer på vad vi skulle
					lägga till i våran meny. Eller kan du kontakta oss för att
					ge oss synpunkter på något. Vi är alltid glada att få nya
					meddelanden från våra fina besökare och kunder.
				</p>
			</div>
		</main>
	)
}

export default HomePage
