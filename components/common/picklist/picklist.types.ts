
export type PicklistProps = {
    values: string[] | number[],
    active: string | number,
    name?: string,
    setValues?: (values: Record<string, string | number>) => void,
    setValue?: (value: string) => void
}