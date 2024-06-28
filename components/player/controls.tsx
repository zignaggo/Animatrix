'use client'
import { ReactNode } from 'react'
import { Scrubber } from './scrubber'
import { Volume } from './volume'
import { secondsToHMS } from '@/utils'
import { cn } from '@/lib/utils'

type ControlsProps = {
    className?: string;
    currentTime: number
    duration: number
    children?: ReactNode
    defaultVolume: number
    onChangeScrubber?: (newCurrentTime: number) => void
    onChangeVolume?: (volume: number) => void
}
export function Controls({
    className,
    children,
    currentTime,
    duration,
    onChangeScrubber,
    onChangeVolume,
    defaultVolume,
}: ControlsProps) {
    const handleChanceScrubber = (value: number) => {
        const scrubberPercentage = (value - 100) * -1
        const newCurrentTime = duration * (scrubberPercentage / 100)
        onChangeScrubber && onChangeScrubber(newCurrentTime)
    }
    return (
        <div className={cn(className)}>
            <div className="flex items-center justify-center">
                <Scrubber
                    duration={duration}
                    currentTime={currentTime}
                    onChange={handleChanceScrubber}
                />
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex gap-1 ">
                    <p className="min-w-[34px] font-tabular-nums text-left textsize-p2">
                        {secondsToHMS(currentTime)}
                    </p>
                    <p>/</p>
                    <p className="min-w-[34px] font-tabular-nums text-left textsize-p2 text-black-400">
                        {secondsToHMS(duration)}
                    </p>
                </div>
                <Volume
                    variant="text"
                    size="sm"
                    max={1}
                    defaultValue={[defaultVolume]}
                    step={0.1}
                    onValueChange={onChangeVolume}
                    onValueCommit={onChangeVolume}
                />
                {children}
            </div>
        </div>
    )
}
