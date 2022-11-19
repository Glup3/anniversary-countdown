import React, { useState } from 'react'
import { CountdownTimer } from './CountdownTimer'
import { TotalDaysCounter } from './TotalDaysCounter'

const ANNIVERSARY_DATE = new Date(2022, 9, 20)
const ANNIVERSARY_MILESTONES: { days: number; text: string }[] = [
    {
        days: 1,
        text: '1 Tag',
    },
    {
        days: 10,
        text: '10 Tage',
    },
    {
        days: 31,
        text: '1 Monat',
    },
    {
        days: 100,
        text: '100 Tage',
    },
    {
        days: 200,
        text: '200 Tage',
    },
    {
        days: 300,
        text: '300 Tage',
    },
    {
        days: 365,
        text: '1 Jahr',
    },
    {
        days: 500,
        text: '500 Tage',
    },
    {
        days: 1000,
        text: '1000 Tage',
    },
]

function addDays(date: Date, days: number): Date {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days)
    return newDate
}

function getLatestMilestone(date: Date): number {
    const today = new Date()
    const index = ANNIVERSARY_MILESTONES.findIndex((m) => today < addDays(date, m.days))
    return index !== -1 ? index : ANNIVERSARY_MILESTONES.length - 1
}

function App() {
    const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(getLatestMilestone(ANNIVERSARY_DATE))
    const targetDate = addDays(ANNIVERSARY_DATE, ANNIVERSARY_MILESTONES[selectedMilestoneIndex].days)

    console.log('what')

    const onMilestoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMilestoneIndex(Number(e.target.value))
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1
                style={{
                    marginBottom: '20px',
                }}
            >
                Annaversary ❤️
            </h1>

            <div
                style={{
                    marginBottom: '20px',
                }}
            >
                <span
                    style={{
                        marginRight: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    {ANNIVERSARY_DATE.toLocaleDateString()}
                </span>
                <select value={selectedMilestoneIndex} onChange={onMilestoneChange}>
                    {ANNIVERSARY_MILESTONES.map((option, index) => (
                        <option key={option.days} value={index}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>

            <CountdownTimer targetDate={targetDate} />

            <TotalDaysCounter startDate={ANNIVERSARY_DATE} />
        </div>
    )
}

export default App
