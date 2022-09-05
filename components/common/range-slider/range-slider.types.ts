export type SliderStateRef = {
    left: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number,
        // zIndex: number
    },
    right: {
        x: number,
        translate: number,
        limit: boolean,
        diff: number,
        // zIndex: number
    },
    active: 'left' | 'right' | 'none'
}

export type SliderState = {
    left: {
        translate: number,
        zIndex: number
    },
    right: {
        translate: number
        zIndex: number
    },
    gradient: string
}