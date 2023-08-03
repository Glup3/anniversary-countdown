import React, { useState } from 'react'
import { type Duration, add, format } from 'date-fns'
import { CountdownTimer } from './CountdownTimer'
import { TotalDaysCounter } from './TotalDaysCounter'

interface Milestone {
    text: string
    duration: Duration
}
const ANNIVERSARY_DATE = new Date('2022-10-20')
const ANNIVERSARY_MILESTONES: Milestone[] = [
    {
        text: '1 Tag',
        duration: { days: 1 },
    },
    {
        text: '10 Tage',
        duration: { days: 10 },
    },
    {
        text: '1 Monat',
        duration: { months: 1 },
    },
    {
        text: '3 Monate',
        duration: { months: 3 },
    },
    {
        text: '100 Tage',
        duration: { days: 100 },
    },
    {
        text: '6 Monate',
        duration: { months: 6 },
    },
    {
        text: '1 Jahr',
        duration: { years: 1 },
    },
    {
        text: '500 Tage',
        duration: { days: 500 },
    },
    {
        text: '2 Jahre',
        duration: { years: 2 },
    },
    {
        text: '3 Jahre',
        duration: { years: 3 },
    },
    {
        text: '1000 Tage',
        duration: { days: 1000 },
    },
]

function getLatestMilestone(date: Date): number {
    const today = new Date()
    const index = ANNIVERSARY_MILESTONES.findIndex((m) => today < add(date, m.duration))
    return index !== -1 ? index : ANNIVERSARY_MILESTONES.length - 1
}

export const AnnaversaryTimer = () => {
    const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(getLatestMilestone(ANNIVERSARY_DATE))
    const targetDate = add(ANNIVERSARY_DATE, ANNIVERSARY_MILESTONES[selectedMilestoneIndex].duration)

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
                    {format(ANNIVERSARY_DATE, 'dd.MM.yyyy')}
                </span>
                <select value={selectedMilestoneIndex} onChange={onMilestoneChange}>
                    {ANNIVERSARY_MILESTONES.map((option, index) => (
                        <option key={option.text} value={index}>
                            {option.text}
                        </option>
                    ))}
                </select>
                <span
                    style={{
                        marginLeft: '20px',
                        fontWeight: 'bold',
                    }}
                >
                    {format(targetDate, 'dd.MM.yyyy')}
                </span>
            </div>

            <CountdownTimer targetDate={targetDate} />

            <TotalDaysCounter startDate={ANNIVERSARY_DATE} />
        </div>
    )
}
