import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {increment, selectCounterValue} from "../../redux/counter/counter.slice";
import {wrapper} from "../../redux/store";
import Slider from "../../components/common/slider/slider.component";

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async () => {
        const value = store.getState().counter.value
        console.log(value)
            store.dispatch(increment())
            return {
                props: {
                    data: 'data'
                }
            }
        }
)

const Page = ({data}: any) => {

    const links = ['https://static.tildacdn.com/tild3366-3331-4166-b863-326336643934/W-80.jpg', 'https://static.tildacdn.com/tild3730-3961-4634-b564-303730383636/W-95.jpg', 'https://static.tildacdn.com/tild6131-6635-4538-a137-363037636235/W-37.jpg', 'https://static.tildacdn.com/tild6138-3338-4863-b232-373630323833/W-14.jpg', 'https://static.tildacdn.com/tild6339-3930-4439-b638-636662613932/W-10.jpg']

    const images: any[] = links.map(link => <img src={link} alt={'no'} key={link}/>)
    // const dispatch= useDispatch()
    // const counter = useSelector(selectCounterValue)
    return (
        // <div>
        //     {data}
        //     <button style={{width: '100px', height: '100px', display: 'block', fontSize: '50px'}} onClick={() => dispatch(increment())}>
        //         {counter}
        //     </button>
        //     <Link href={`/test/test2`}>
        //         <a style={{width: '100px', height: '100px', display: 'block', fontSize: '25px'}}>Switch</a>
        //     </Link>
        // </div>
        <div className={'slider-page'}>
            <div className='slider-div'>
                <Slider elements={images}/>
            </div>
        </div>
    )
}

export default Page