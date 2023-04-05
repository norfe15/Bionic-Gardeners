function ToTopBtn() {

    window.onscroll = function (event) {
        const topBtn = document.querySelector('.to-top-btn')

        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            topBtn.classList.remove('hidden')
        } else {
            topBtn.classList.add('hidden')
        }
    }

    const top = () => {
        window.scrollTo(0, 0)
    }

    return (
        <button className="to-top-btn hidden" onClick={top}><span className="material-symbols-outlined">
        arrow_upward
        </span></button>
    )
}

export default ToTopBtn