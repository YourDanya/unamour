import {ArrowProps} from 'app/_common/components/arrow/arrow.types'
import {CSSProperties} from 'react'

const useArrow = (props: ArrowProps) => {
    const {width} = props

    const diagonalWidth = Math.sqrt(2) * width
    const haldDiagonalWidth = diagonalWidth / 2

    const arrowStyles: CSSProperties = {}
    arrowStyles.width = `${haldDiagonalWidth}px`
    arrowStyles.height = `${diagonalWidth}px`

    const afterStyles: CSSProperties = {}
    afterStyles.width = `${width}px`
    afterStyles.height = `${width}px`

    return {arrowStyles, afterStyles}
}

export default useArrow