const calculateDiff = (iw: number, i: number, scrl: number): number => (iw * (i + 1) + i * 10) - scrl


const moveHorizontal = (iw: number, i: number, container: HTMLElement) => {
    const diff: number = calculateDiff(iw, i, container.scrollLeft)

    if (diff < iw) 
        container.scrollLeft -= iw
    
    else if (diff > container.clientWidth) 
        container.scrollLeft += iw
}

const moveVertical = (iw: number, i: number, container: HTMLElement) => {
    const diff: number = calculateDiff(iw, i, container.scrollTop)

    if (diff < iw) 
        container.scrollTop -= iw
    
    else if(diff > container.clientHeight) 
        container.scrollTop += iw
}

const handleTileIndex = (parent: HTMLElement, total: number, dir: 'top' | 'btm'): number => {
    const mod: number = dir === 'top'
        ? -1
        : 1


    let i: number = parseInt(parent.getAttribute('ix') ?? '0') + mod


    if (i > total - 1)
        i = 0

    else if (i < 0)
        i = total - 1
    

    parent.setAttribute('ix', i.toString())

    return i
}


export {
    moveHorizontal,
    moveVertical,
    handleTileIndex
}