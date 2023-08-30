import {SliderProps} from 'app/_common/components/slider/slider.types'
import {Breakpoint} from 'app/_common/content/responsive/responsive.types'
import {ReactNode} from 'react'

export type SliderItemProps = Omit<SliderProps, 'children'>

export type ResponsiveSliderProps = {defaultProps: SliderItemProps}
    & {breakpoints: {[key in Breakpoint]?: SliderItemProps}}
    & {children?: ReactNode}