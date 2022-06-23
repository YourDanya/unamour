import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {increment, selectCounterValue} from "../redux/counter/counter.slice";
import {wrapper} from "../redux/store";
import CustomSlider from "../components/custom-slider/custom-slider.component";

const Page = ({data}: any) => {

    const images: any[] = []
    for (let i=0; i<5; i++) {
        images.push(<img src={'https://static.tildacdn.com/tild3730-3961-4634-b564-303730383636/W-95.jpg'} alt={'no'}/>)
    }

    return (
        <div className={'slider-page'}>
            <CustomSlider elements={images}/>
        </div>
    )
}

export default Page