function $(elementId) {
    return document.getElementById(elementId)
}

const navButton = $('mobile-menu-button')
const mobileNav = $('mobile-nav')

navButton.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
})
