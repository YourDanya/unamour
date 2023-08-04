const getValues = <ObjT extends object>(obj: ObjT) => {
    return Object.values(obj) as (ObjT[keyof ObjT])[]
}

export default getValues