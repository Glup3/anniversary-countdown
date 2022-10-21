import React from 'react'
import { CountdownTimer } from './CountdownTimer'

const ANNIVERSARY = new Date(2022, 9, 20)

function addDays(date: Date, days: number): Date {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    return newDate
}

function App() {
    const targetDate = addDays(ANNIVERSARY, 10)

    return (
        <div>
            <h1>Countdown</h1>
            <CountdownTimer targetDate={targetDate} />
        </div>
    )
}

export default App
