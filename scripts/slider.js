const ratingContent = document.querySelector("#ratingContent")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")
let pos = 1

nextBtn.addEventListener("click", () => {
    if(pos <= 2) {
        ratingContent.style = `transform: translateX(-${410 * pos}px);`
        pos++
    } else {
        pos = 1
        ratingContent.style = `transform: translateX(-0px);`
    }
})