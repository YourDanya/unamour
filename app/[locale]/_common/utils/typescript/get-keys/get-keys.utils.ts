const getKeys = <ObjT extends object>(obj: ObjT) => {
    return Object.keys(obj) as (keyof ObjT) []
}

export default getKeys