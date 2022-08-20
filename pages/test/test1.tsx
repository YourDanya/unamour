import {wrapper} from "../../redux/store"
import Link from "next/link"
import global from "../../utils/global.utils"


export const getServerSideProps = wrapper.getServerSideProps(
    (store) =>

        async (context) => {
            let date = global.get('date')
            console.log(global)
            console.log(global.date)
            if (!date) date = global.set('date', new Date().getMilliseconds())
            return {
                props: {
                    date
                }
            }
        }
)

const Page = ({date}: any) => {
    return (
        <div>
            <div>test1</div>
            <div>date: {date}</div>
            <Link href={'/test/test2'}>
                <a>switch to test2</a>
            </Link>
        </div>
    )
}

export default Page