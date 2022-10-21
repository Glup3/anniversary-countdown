import React, { FC } from 'react'
import { useCountdown } from './useCountdown'

interface CountdownTimerProps {
    targetDate: Date
}

export const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate)

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />
    } else {
        return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
    }
}

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    )
}

interface ShowCounterProps {
    days: number
    hours: number
    minutes: number
    seconds: number
}

const ShowCounter: FC<ShowCounterProps> = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
            <p>:</p>
            <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
            <p>:</p>
            <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
        </div>
    )
}

interface DateTimeDisplayProps {
    value: number
    type: string
    isDanger: boolean
}

const DateTimeDisplay: FC<DateTimeDisplayProps> = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    )
}
