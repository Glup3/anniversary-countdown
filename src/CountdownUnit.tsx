import React, { FC } from 'react'

interface CountdownUnitProps {
    time: number
    text: string
}

export const CountdownUnit: FC<CountdownUnitProps> = ({ time, text }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                margin: '0px 4px',
                padding: '4px',
                borderRadius: '50%',
                borderColor: 'orange',
                borderStyle: 'dotted',
            }}
        >
            <div>{time.toString().padStart(2, '0')}</div>
            <div>{text}</div>
        </div>
    )
}
