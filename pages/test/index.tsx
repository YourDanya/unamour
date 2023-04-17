import {NextPage} from 'next'



const Test: NextPage = () => {
    const test = []

    return (
        <div className={'test'}>

        </div>
    )
}

export default Test

// const testObj = {
//     type: 'div',
//     attributes: {
//         className: 'div-1'
//     },
//     children: [
//         {
//             type: 'div',
//             attributes: {
//                 className: 'div-2'
//             },
//             children: [
//                 {
//                     type: 'text',
//                     value: 'baebrge'
//                 },
//                 {
//                     type: 'div',
//                     children: [
//                         {
//                             type: 'text',
//                             value: 'babalaba'
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             type: 'text',
//             value: 'gerkgregre'
//         }
//     ]
// }