import React from 'react'
import { TimerBox } from './TimerBox'
import { AnnaversaryTimer } from './AnnaversaryTimer'
import { add, isBefore } from 'date-fns'

function calculateNextBirthday(birthday: string): Date {
    const today = new Date()
    const newBirthday = new Date(birthday)
    newBirthday.setFullYear(today.getFullYear())

    if (isBefore(newBirthday, today)) {
        return add(newBirthday, { years: 1 })
    }

    return newBirthday
}

const OTHER_DATES = [
    { title: 'Singapore', targetDate: new Date('2024-09-04) },
    { title: 'Disneyland', targetDate: new Date('2023-09-10') },
    { title: 'London', targetDate: new Date('2023-11-02') },
    { title: 'Kreuzfahrt', targetDate: new Date('2023-12-23') },
    { title: 'Anna', targetDate: calculateNextBirthday('2022-11-04') },
    { title: 'Phuc', targetDate: calculateNextBirthday('2023-08-23') },
    { title: 'Ditto', targetDate: calculateNextBirthday('2024-04-11') },
]

function App() {
    console.log('I Love You Anna ❤️')

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: '20px',
            }}
        >
            <AnnaversaryTimer />

            {OTHER_DATES.map((v) => (
                <TimerBox
                    key={v.title}
                    style={{
                        marginTop: '10px',
                    }}
                    {...v}
                />
            ))}
        </div>
    )
}

export default App
