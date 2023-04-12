import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import HomePage from "./components/HomePage"
import LoginModal from "./components/LoginModal"
import ToTopBtn from "./components/ToTopBtn"
import Menu from "./components/Menu"
import FoodMenu from "./components/FoodMenu"
import Footer from "./components/Footer"


function App() {
	const [page, setPage] = useState("HomePage")
	const [sidePage, setSidePage] = useState("")
	const [orderList, setOrderList] = useState([])

	return (
		<div className="App">
			<LoginModal setPage={setPage} />
			<Header />
			{page === 'HomePage' && <HomePage />}
      		{page === 'FoodMenu' && <FoodMenu setSidePage={setSidePage} sidePage={sidePage} orderList={orderList} setOrderList={setOrderList} />}
			<ToTopBtn />
			<Menu setPage={setPage} setSidePage={setSidePage} />
			<Footer />
		</div>
	)
}

export default App
