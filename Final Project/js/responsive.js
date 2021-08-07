const burger = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


burger.addEventListener('click', () => {

    navbarLinks.classList.toggle('active')
    console.log("This JavaSrcipt has been fired ! ");
})


