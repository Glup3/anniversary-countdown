import React from 'react'
import { TimerBox } from './TimerBox'
import { AnnaversaryTimer } from './AnnaversaryTimer'

const OTHER_DATES = [
    { title: 'Disneyland', targetDate: new Date('2023-09-10') },
    { title: 'London', targetDate: new Date('2023-11-02') },
]

function App() {
    console.log('I Love You Anna ❤️')

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
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
