import {NextPage} from 'next'
import {useMapArrToNode} from 'hooks/mappers/mappers.hooks'

const Test: NextPage = () => {

    const testObj = {
        type: 'div',
        attributes: {
            className: 'div-1'
        },
        children: [
            {
                type: 'div',
                attributes: {
                    className: 'div-2'
                },
                children: [
                    {
                        type: 'text',
                        value: 'baebrge'
                    },
                    {
                        type: 'div',
                        children: [
                            {
                                type: 'text',
                                value: 'babalaba'
                            }
                        ]
                    }
                ]
            },
            {
                type: 'text',
                value: 'gerkgregre'
            }
        ]
    }

    const something = useMapArrToNode(testObj)

    return (
        <>
            {something}
        </>
    )
}

export default Test