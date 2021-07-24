const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


// Handle arrow
const arrows = $$('.arrow')
const movieLists = $$('.movie-list')

arrows.forEach((arrow, index) => {
    const itemNumber = movieLists[index].querySelectorAll('img').length
    let clickCounter = 0
    arrow.onclick = () => {
        const ratio = Math.floor(window.innerWidth / 270)
        if(itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
            clickCounter++
            movieLists[index].style.transform = `translateX(${
                movieLists[index].computedStyleMap().get("transform")[0].x.value
                - 300}px)`
        }
        else {
            movieLists[index].style.transform = 'translateX(0)'
            clickCounter = 0;
        }
    }
})

// Toggle ball
const ball = $('.toggle')
const items = $$('.container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle-ball')

ball.onclick = () => {
    items.forEach(item => {
        item.classList.toggle('active')
    })
    ball.classList.toggle('active')
}
