const COLLAPSING_NAME = 'collapsing'

export function toggleCollapsible(collapsible, isCollapsed) {
    if (collapsible.classList.contains(COLLAPSING_NAME)) {
        return
    }

    if (!isCollapsed) {
        hide(collapsible)
    } else {
        show(collapsible)
    }
}

function show(element) {
    const height = getAutoHeight(element)
    element.classList.add(COLLAPSING_NAME)
    animateHeightChange(element, '0px', `${height}px`)

    setTimeout(() => {
        element.classList.remove(COLLAPSING_NAME)
    }, 500)
}

function hide(element) {
    const height = getAutoHeight(element)
    element.classList.add(COLLAPSING_NAME)
    animateHeightChange(element, `${height}px`, '0px')

    setTimeout(() => {
        element.classList.remove(COLLAPSING_NAME)
    }, 500)
}

function animateHeightChange(element, fromHeight, toHeight) {
    element.style.height = fromHeight
    element.classList.add(COLLAPSING_NAME)
    forceReflow(element)
    element.style.height = toHeight
}

function forceReflow(element) {
    element.offsetHeight
}

function getAutoHeight(element) {
    element.style.height = 'auto'
    return element.getBoundingClientRect().height
}
