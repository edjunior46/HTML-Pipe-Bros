const ratingContent = document.querySelector("#ratingContent")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
let pos = 0

nextBtn.addEventListener("click", () => {
    if(pos < 2) {
        pos++
        ratingContent.style = `transform: translateX(-${410 * pos}px);`
    } else {
        pos = 0
        ratingContent.style = `transform: translateX(-0px);`
    }
})

prevBtn.addEventListener("click", () => {
    if(pos <= 2 && pos >= 1) {
        pos--
        ratingContent.style = `transform: translateX(-${410 * pos}px);`
    } else {
        pos = 2
        ratingContent.style = `transform: translateX(-${410 * pos}px);`
    }
})