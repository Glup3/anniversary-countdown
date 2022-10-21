import React, { FC } from 'react'
import { CountdownUnit } from './CountdownUnit'
import { HeartMessage } from './HeartMessage'

import { useCountdown } from './useCountdown'

interface CountdownTimerProps {
    targetDate: Date
}

export const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return <HeartMessage />
    }

    return (
        <div
            style={{
                display: 'flex',
            }}
        >
            <CountdownUnit time={days} text="Days" />
            <CountdownUnit time={hours} text="Hours" />
            <CountdownUnit time={minutes} text="Mins" />
            <CountdownUnit time={seconds} text="Sec" />
        </div>
    )
}
