import {NextPage} from "next";
import {wrapper} from "../../redux/store";
import {increment, selectCounterValue} from "../../redux/counter/counter.slice";
import {NextPageWithLayout} from "../../types/types";
import {getShopItemsLayout} from "../../components/shop-items/shop-items.component";
import {useDispatch, useSelector} from "react-redux";

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async () => {
        // let res
        // store.dispatch(increment())
        // res=store.getState().counter.value
        // console.log(res)
        // store.dispatch(increment())
        // res=store.getState().counter.value
        // console.log(res)
        // store.dispatch(increment())
        // res=store.getState().counter.value
        // console.log(res)
        return {
            props: {
                data: 'data'
            }
        }
    }
)

// export async function getServerSideProps() {
//     return {
//         props: {},
//     }
// }

// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: {
//                     id: 'all'
//                 }
//             }
//         ],
//         fallback: true
//     };
// }

type shopItemsProps = {
    test: string
}

const ShopItemsPage: NextPageWithLayout<shopItemsProps> = ({test}) => {
    const dispatch = useDispatch()
    const counterValue = useSelector(selectCounterValue)
    console.log(counterValue)
    return (
        <div>
            <button onClick={() =>dispatch(increment())}>
                click here {counterValue}
            </button>
        </div>
    )
}

ShopItemsPage.getLayout = getShopItemsLayout

export default ShopItemsPage