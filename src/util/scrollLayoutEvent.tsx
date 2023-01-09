import { Aliases } from "./Client"

const scrollLayoutEvent = (): void => {
    const [nav,,,arrow] = [...document.body.children[1].children[0].children as Aliases.Elems]

    let scrolled: boolean = false
    window.addEventListener('scroll', () => {
        if(!scrolled && window.scrollY >= 400) {
            arrow.style.opacity = '1'
            arrow.style.pointerEvents = 'all'
            nav.style.position = 'fixed'
            nav.style.background = '#151515'

            scrolled = true
        }
        else if(scrolled && window.scrollY < 400) {
            arrow.style.opacity = '0'
            arrow.style.pointerEvents = 'none'
            nav.style.position = 'absolute'
            nav.style.background = 'transparent'

            scrolled = false
        }
    })
}

export default scrollLayoutEvent