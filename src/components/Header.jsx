function Header({setPage}) {

	const toTopofPage = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant",
		})
	}

    const toStartPage = () => {
        toTopofPage()
        setPage('HomePage')
    }


    return (
        <header>
            <button onClick={toStartPage} className="logo-box">
                American<span className="Logo-second-word">Burgers</span>
            </button>
        </header>
    )
}



export default Header