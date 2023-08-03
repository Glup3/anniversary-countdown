import React from 'react'
import { format } from 'date-fns'
import { CountdownTimer } from './CountdownTimer'

const DISNEYLAND_DATE = new Date('2023-09-10')

interface DisneylandTimerProps {
    style?: React.CSSProperties
}

export const DisneylandTimer = ({ style }: DisneylandTimerProps) => {
    return (
        <div
            style={{
                ...style,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>Disneyland {format(DISNEYLAND_DATE, 'dd.MM.yyyy')}</h2>

            <CountdownTimer targetDate={DISNEYLAND_DATE} />
        </div>
    )
}
