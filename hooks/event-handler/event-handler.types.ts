import {MouseEvent} from 'react'

export type UseSetActive = <TInitActive extends string | number> (initActive: TInitActive, attribute: string ) =>
    [active: TInitActive extends string? string : number, handleEvent: (event: MouseEvent<HTMLElement>) => void,
        setActive: (active: TInitActive extends string? string : number) => void]

export type UseToggle = () => [active: boolean, handleEvent: (event: any) => void, setActive: (active: boolean) => void]
