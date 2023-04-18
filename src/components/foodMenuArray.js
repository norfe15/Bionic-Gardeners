import fiskburgare from "../components/images/fisk.webp"
import spicy from "../components/images/spice.jpg"
import green from "../components/images/quornburger.webp"
import big from "../components/images/juiciest.jpg"
import mack from "../components/images/burger_1.jpg"

const foodMenuArray = [
	{
		name: "Fisherman’s Burger",
		ingredients: "Grovt bröd, 400g torskfilé, gräslök, tomat, romsås",
		price: "115kr",
		img: fiskburgare,
	},
	{
		name: "The Spice Grills",
		ingredients:
			"Briochebröd, 700g högrevsfärs, pepperjackost, dijonsenap, rökt paprikapulver, jalapeno",
		price: "119kr",
		img: spicy,
	},
	{
		name: "Greenie Burger",
		ingredients:
			"Surdegsbröd, 400g Quorn, goudaost, cheddarost, philadelphia, jalapeno, chilisås",
		price: "119kr",
		img: green,
	},
	{
		name: "Bigfoot Burger",
		ingredients:
			"Briochebröd, 800g högrevsfärs, guacamole pepperjackost, chilisås, tomat, sallad",
		price: "139kr",
		img: big,
	},
	{
		name: "Mack Patty",
		ingredients:
			"Surdegsbröd, 450g nötfärs, bacon, cheddarost, tomat, rödlök",
		price: "129kr",
		img: mack,
	},
]

export { foodMenuArray }
