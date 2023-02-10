/* Controle do Menu Lateral */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', () =>{
    menuMobile.classList.contains("bi-list") ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list")

    body.classList.toggle("menu-nav-active")
})

/* Fechar o menu ao escolher um item */
const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")){
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})

/* Selecionar seção do site */
const secoes = Array.prototype.slice.call(document.querySelectorAll('section'))

const activeSection = () => {
    const windowTop = window.pageYOffset + window.innerHeight * .85

    secoes.forEach(element => {
        if (windowTop > element.offsetTop && element.offsetTop > windowTop - 1000){
            activeMenu(secoes.indexOf(element))
        }
    })
}

window.addEventListener("scroll", () => {
    activeSection()
})

/* Selecionar item ativo do menu */
const linksMenu = document.getElementsByClassName('nav-link')

function activeMenu(elementIndex){
    for (var i=0; i < linksMenu.length; i++)
        linksMenu[i].classList.remove('active')

    linksMenu[elementIndex].classList.add('active')
}