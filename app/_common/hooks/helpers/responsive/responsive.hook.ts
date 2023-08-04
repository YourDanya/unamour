import {useState} from 'react'
import {useRef} from 'react'
import {useLayoutEffect} from 'react'
import {Device} from 'app/_common/content/responsive/responsive.types'
import {devices} from 'app/_common/content/responsive/responsive.content'
import {breakpoints} from 'app/_common/content/responsive/responsive.content'
import {Breakpoint} from 'app/_common/content/responsive/responsive.types'
import {ResponsiveData} from 'app/_common/hooks/helpers/responsive/responsive.types'

export const useResponsive = () => {

    const calcDevice = (): ResponsiveData => {
        const width = window.innerWidth

        let device: Device = 'large'
        let breakpoint: Breakpoint = 40000

        for (let i = breakpoints.length - 1; i >= 0; i--) {
            if (width < breakpoints[i]) {
                device = devices[i]
                breakpoint = breakpoints[i]
                break
            }
        }

        return {device, breakpoint, width}
    }

    const [state, setState] = useState<ResponsiveData | null>(null)
    const deviceRef = useRef<Device | null>(null)

    const resize = () => {
        const newState = calcDevice()
        if (newState.device !== deviceRef.current) {
            setState(newState)
            deviceRef.current = newState.device
        }
    }

    useLayoutEffect(() => {
        resize()
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return state
}