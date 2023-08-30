import {ResponsiveSliderProps} from 'app/_common/components/responsive-slider/responsive-slider.types'
import {FC} from 'react'
import useResponsiveSlider from 'app/_common/components/responsive-slider/responsive-slider.hook'
import Slider from 'app/_common/components/slider/slider.component'
import getValues from 'app/_common/utils/typescript/get-values/get-values.utils'

const ResponsiveSlider: FC<ResponsiveSliderProps> = (props) => {
    const {children} = props
    const {sliderArr} = useResponsiveSlider(props)

    return (<>
        {sliderArr.map((props, index) => (
            <Slider {...props} key={index}>
                {children}
            </Slider>
        ))}
    </>)
}

export default ResponsiveSlider
