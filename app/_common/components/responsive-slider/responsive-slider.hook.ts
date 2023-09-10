import {useResponsive} from 'app/_common/hooks/helpers/responsive/responsive.hook'
import {ResponsiveSliderProps} from 'app/_common/components/responsive-slider/responsive-slider.types'
import getEntries from 'app/_common/utils/typescript/get-entries/get-entries.util'
import {SliderProps} from 'app/_common/components/slider/slider.types'
import {ResponsiveData} from 'app/_common/hooks/helpers/responsive/responsive.types'
import getValues from 'app/_common/utils/typescript/get-values/get-values.utils'
import {Breakpoint} from 'app/_common/content/responsive/responsive.types'

const useResponsiveSlider = (props: ResponsiveSliderProps) => {
    const {defaultProps} = props
    const state = useGetState(props)
    const {respData} = state

    const {breakpoints} = props
    breakpoints['40000'] = defaultProps

    const sliderArr = getEntries(breakpoints)
        .sort(([breakpoint1], [breakpoint2]) => +breakpoint2 - +breakpoint1)
        .filter((value, index, arr) => {
            return filterSliderElem({...state, value, index, arr})
        }).map((value, index, arr) =>
            getSliderProps({...state, value, index, arr}))

    return {sliderArr}
}

export default useResponsiveSlider

const useGetState = (props: ResponsiveSliderProps) => {
    const respData = useResponsive()

    return {respData, props}
}

const filterSliderElem = (state: ReturnType<typeof useGetState>
    & { value: ReturnType<typeof getEntries<ResponsiveSliderProps['breakpoints']>>[number] }
    & { index: number }
    & { arr: ReturnType<typeof getEntries<ResponsiveSliderProps['breakpoints']>> }
) => {
    const {props, value, respData, arr, index} = state
    const [breakpoint, sliderProps] = value as [Breakpoint, SliderProps]

    let leftLimit = false

    if (respData && respData.breakpoint <= +breakpoint) {
        leftLimit = true
    }

    let rightLimit = false

    let nextBreakPoint
    if (!arr[index + 1]) {
        rightLimit = true
    } else {
        nextBreakPoint = +arr[index + 1][0]
    }
    if (respData && nextBreakPoint && respData.breakpoint > nextBreakPoint) {
        rightLimit = true
    }

    return !respData || (leftLimit && rightLimit)
}

const getSliderProps = (state: ReturnType<typeof useGetState>
    & { value: ReturnType<typeof getEntries<ResponsiveSliderProps['breakpoints']>>[number] }
    & { index: number }
    & { arr: ReturnType<typeof getEntries<ResponsiveSliderProps['breakpoints']>> }
) => {
    const {props, value, respData, arr, index} = state
    const [breakpoint, sliderProps] = value as [Breakpoint, SliderProps]
    const newProps = {...props.defaultProps, ...sliderProps}

    let showClass = `responsive-slider-shown-${breakpoint}`

    let hideClass = ''
    if (arr[index + 1]) {
        hideClass = `responsive-slider-hidden-${arr[index + 1][0]}`
    }

    if (arr[index - 1]) {
        hideClass = `responsive-slider-hidden-40000 ${hideClass}`
    }

    newProps.className = `${showClass} ${hideClass} ${newProps.className}`

    return newProps
}