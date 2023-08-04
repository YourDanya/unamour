import {useGetState} from 'app/_common/components/slider-v2/slider.hook'
import React from 'react'

export type EventState = ReturnType<typeof useGetState> & { event: MouseEvent | TouchEvent }

export type ReactEventState = ReturnType<typeof useGetState> & {event: React.MouseEvent | React.TouchEvent}