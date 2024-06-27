'use client'
import { ReactNode } from 'react'
import { Scrubber } from './scrubber'

type ControlsProps = {
    currentTime: number
    duration: number
    children?: ReactNode
    onChangeScrubber?: (newCurrentTime: number) => void
}
export function Controls({
    children,
    currentTime,
    duration,
    onChangeScrubber,
}: ControlsProps) {
    const handleChanceScrubber = (value: number) => {
        const scrubberPercentage = (value - 100) * -1
        const newCurrentTime = duration * (scrubberPercentage / 100)
        onChangeScrubber && onChangeScrubber(newCurrentTime)
    }
    return (
        <div className="controls">
            <div className="flex items-center justify-center h-4">
                <Scrubber
                    duration={duration}
                    currentTime={currentTime}
                    onChange={handleChanceScrubber}
                />
            </div>
            <div className="flex">
                <div className="time"></div>
                <div className="volume"></div>
                {children}
            </div>
        </div>
    )
}
