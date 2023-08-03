import React from 'react'
import { format } from 'date-fns'
import { CountdownTimer } from './CountdownTimer'

interface TimerBoxProps {
    style?: React.CSSProperties
    targetDate: Date
    title: string
}

export const TimerBox = ({ style, targetDate, title }: TimerBoxProps) => {
    return (
        <div
            style={{
                ...style,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h2>
                {title} {format(targetDate, 'dd.MM.yyyy')}
            </h2>

            <CountdownTimer targetDate={targetDate} />
        </div>
    )
}
