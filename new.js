const slides = document.querySelector('.slides')
const slides_container = document.querySelector('.slides-container')

const slide_width = 300
const slide_gap = 20
const margin = 120
let delta_scroll = 0
let slides_view = parseInt((window.visualViewport.width - margin)/(slide_width + slide_gap))

slides.style.width = `${(slide_width + slide_gap) * slides_view}px`

console.log (slides_view)
window.onresize = () => {
    let slides_view = parseInt((window.visualViewport.width - margin)/(slide_width + slide_gap))
    slides.style.width = `${(slide_width + slide_gap) * slides_view}px`
}

const button_right = document.querySelector('.button_right')
const button_left = document.querySelector('.button_left')

button_right.addEventListener('click', () => move_slider(true))
button_left.addEventListener('click', () => move_slider(false))

const move_slider = (move) => {
    if (move) delta_scroll -= (slide_width + slide_gap)
    else delta_scroll += (slide_width + slide_gap)
    if ((delta_scroll * -1) < 0) delta_scroll = 0
    if ((delta_scroll * -1) > (slides_container.childElementCount - slides_view) * (slide_width + slide_gap)) delta_scroll = 0
    slides_container.style = `transform: translateX(${delta_scroll}px)`
}