const profiles = document.querySelectorAll('.ratingImg')
let imgCount = 1

profiles.forEach((profile) => {
    profile.style = `background-image: url(./style/img/rating-imgs/profile${imgCount++}.webp); background-size: cover; background-position: center;`
})