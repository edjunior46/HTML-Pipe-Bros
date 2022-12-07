const navItens = document.querySelectorAll('.navItem')

navItens.forEach((navItem) => {
    navItem.addEventListener('mouseenter', () => {
        navItem.children[0].style = 'animation: nav-icon 1s linear infinite;'
    })

    navItem.addEventListener('mouseout', () => {
        navItem.children[0].style = 'animation: none;'
    })
})

