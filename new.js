const slides = document.querySelectorAll('.slides')
const buttons = document.querySelectorAll('.carrousel-button')
buttons.forEach(element => element.addEventListener('click', ({target}) => move_slider(target)))

                /* card + gap */
const slide_width = 300 + 20
const margin = 120
let delta_scroll = []
let slides_view = parseInt((window.visualViewport.width - margin)/slide_width)

slides.forEach(element => {
    element.style.width = `${slide_width * slides_view}px`
    delta_scroll.push(0)
})

window.onresize = () => {
    slides_view = parseInt((window.visualViewport.width - margin)/slide_width)
    slides.forEach(element => element.style.width = `${slide_width * slides_view}px`)
}

const move_slider = (target) => {
    const move = target.dataset.type
    const container_id = target.parentNode.parentNode.dataset.id
    const container = document.querySelectorAll(`.slides-container`)
    let slides_container
    container.forEach(element => {
        if (element.dataset.id == container_id) slides_container = element
    })
    if (move === 'false') delta_scroll[container_id] -= slide_width
    else delta_scroll[container_id] += slide_width
    if ((delta_scroll[container_id] * -1) < 0) delta_scroll[container_id] = 0
    if ((delta_scroll[container_id] * -1) > ((slides_container.childElementCount - slides_view) * slide_width)) delta_scroll[container_id] = 0
    slides_container.style = `transform: translateX(${delta_scroll[container_id]}px)`
}