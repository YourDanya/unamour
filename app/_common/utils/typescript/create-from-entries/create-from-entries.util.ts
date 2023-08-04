import {
    FromEntriesWithReadOnly
} from 'app/_common/utils/typescript/create-from-entries/create-from-entries.types'

const createFromEntries = <ArrT extends ReadonlyArray<readonly[PropertyKey, any]>>(arr: ArrT) => {
    return Object.fromEntries(arr) as FromEntriesWithReadOnly<ArrT>
}

export default createFromEntries