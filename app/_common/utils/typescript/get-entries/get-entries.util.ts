const getEntries = <ObjT extends object>(obj: ObjT) => {
    return Object.entries(obj) as {
        [KeyT in keyof ObjT]-?: [KeyT, ObjT[KeyT]]
    }[keyof ObjT][]
}

export default getEntries
