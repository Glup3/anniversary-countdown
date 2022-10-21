import React from 'react'
import { CountdownTimer } from './CountdownTimer'

const ANNIVERSARY_DATE = new Date(2022, 9, 20)

function addDays(date: Date, days: number): Date {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    return newDate
}

function App() {
    const targetDate = addDays(ANNIVERSARY_DATE, 10)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '16px',
            }}
        >
            <h1
                style={{
                    marginBottom: '20px',
                }}
            >
                Anniversary ❤️
            </h1>
            <CountdownTimer targetDate={targetDate} />
        </div>
    )
}

export default App
