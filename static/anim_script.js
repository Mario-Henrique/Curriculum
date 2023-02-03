const itemAnim = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * .85

    itemAnim.forEach(element => {
        if (windowTop > element.offsetTop) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    })
}

window.addEventListener("scroll", () => {
    animeScroll()
})