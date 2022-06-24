import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {increment, selectCounterValue} from "../redux/counter/counter.slice";
import {wrapper} from "../redux/store";
import CustomSlider from "../components/custom-slider/custom-slider.component";

const Page = ({data}: any) => {

    const links = ['https://static.tildacdn.com/tild3366-3331-4166-b863-326336643934/W-80.jpg', 'https://static.tildacdn.com/tild3730-3961-4634-b564-303730383636/W-95.jpg', 'https://static.tildacdn.com/tild6131-6635-4538-a137-363037636235/W-37.jpg', 'https://static.tildacdn.com/tild6138-3338-4863-b232-373630323833/W-14.jpg', 'https://static.tildacdn.com/tild6339-3930-4439-b638-636662613932/W-10.jpg']

    const images: any[] = links.map(link => <img src={link} alt={'no'}/>)

    return (
        <div className={'slider-page'}>
            <CustomSlider elements={images}/>
        </div>
    )
}

export default Page