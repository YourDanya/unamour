import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {increment, selectCounterValue} from "../redux/counter/counter.slice";
import {wrapper} from "../redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async () => {
            // const response = await fetch(
            //     `https://reqres.in/api/users/${Math.floor(Math.random() * 10 + 1)}`
            // );
            // const {data} = await response.json();
            // store.dispatch(addUser(`${data.first_name} ${data.last_name}`));
            store.dispatch(increment())
            return {
                props: {
                    data: 'data'
                }
            }
        }
)

const Page = ({data}: any) => {
    const dispatch = useDispatch()
    const counter = useSelector(selectCounterValue)
    return (
        <div>
            {
                data
            }
            <button style={{width: '100px', height: '100px', display: 'block', fontSize: '50px'}} onClick={() => dispatch(increment())}>
                {counter}
            </button>
            <Link href={`/test2`}>
                <a style={{width: '100px', height: '100px', display: 'block', fontSize: '25px'}}>Switch</a>
            </Link>
        </div>
    )
}

export default Page