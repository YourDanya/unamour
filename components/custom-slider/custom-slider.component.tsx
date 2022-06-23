import React, {ReactNode} from "react";
import {element} from "prop-types";

type customSliderProps = {
    elements: ReactNode[]
}

const CustomSlider: React.FC<customSliderProps> = ({elements}) => {

    const handleButtonClick = () => {

    }

    return (
        <div className={'slider'}>
            <div className={'slider__track'}>
                {/*{elements.map((element, index) =>*/}
                {/*    <div className={'slider__element'} key={index}>*/}
                {/*        <>{element}</>*/}
                {/*    </div>*/}
                {/*)}*/}
                <button className={'slider__button slider__back'}>
                    <div className={'slider__arrow slider__arrow--back'}/>
                </button>
                <div className={'slider__element'} style={{backgroundColor: 'red'}}>1</div>
                <div className={'slider__element'} style={{backgroundColor: 'blue', left: '100%'}}>2</div>
                <div className={'slider__element'} style={{backgroundColor: 'pink', left: '200%'}}>3</div>
                <button className={'slider__button slider__forward'}>
                    <div className={'slider__arrow slider__arrow--forward'}/>
                </button>
            </div>
        </div>
    )
}

export default CustomSlider