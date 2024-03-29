import {Fragment} from 'react'
import {UseMapArrToNode} from 'app/_common/hooks/mappers/map-arr-to-node/map-arr-to-node.types'
import {NodeObj} from 'app/_common/hooks/mappers/map-arr-to-node/map-arr-to-node.types'
import {ReactNode} from 'react'
import {createElement} from 'react'

const useMapArrToNode: UseMapArrToNode = (nodeArr) => {
    const stack = [nodeArr]

    let node: ReactNode = (
        <></>
    )

    while (stack.length !== 0) {
        const elem = stack[stack.length - 1] as NodeObj
        if (!elem.children) {
            stack[stack.length-2].node = (
                <>
                    {stack[stack.length-2].node}
            {createElement(Fragment, null, elem.value)}
            </>
        )
            stack.pop()
        } else if (elem.count === undefined) {
            elem.count = 0
            elem.node = <></>
            stack.push(elem.children[0])
        } else if (elem.count < elem.children?.length - 1) {
            elem.count++
            stack.push(elem.children[elem.count])
        } else if (stack.length > 1){
            stack[stack.length -2].node = (
                <>
                    {stack[stack.length -2].node}
            {createElement(elem.type, elem.attributes, elem.node)}
            </>
        )
            stack.pop()
        } else {
            node = (
                <>
                    {createElement(elem.type, elem.attributes, elem.node)}
            </>
        )
            stack.pop()
        }
    }

    return node
}

export default useMapArrToNode