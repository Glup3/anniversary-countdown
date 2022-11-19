import React, { FC } from 'react'
import './TotalDaysCounter.css'

interface TotalDaysCounterProps {
    startDate: Date
}

const daysTogether = (startDate: Date) => (new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)

export const TotalDaysCounter: FC<TotalDaysCounterProps> = ({ startDate }) => {
    return (
        <div
            style={{
                marginTop: '24px',
                textAlign: 'center',
            }}
            className="rainbow"
        >
            <span>We have been {Math.floor(daysTogether(startDate))} days together already.</span>
            <div>
                <span>Still going strong 🚢</span>
            </div>
        </div>
    )
}
