import {NextPage} from 'next'
import Image from 'next/image'

const Test: NextPage = () => {

    return (
        <div className={'test'}>
            <div className={'image-container'}>
                <Image
                    src={'https://media.naked-woman.org/uploads/big_img/1136/1min.jpg'}
                />
            </div>
        </div>
    )
}

export default Test