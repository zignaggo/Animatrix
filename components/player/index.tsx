'use client'
import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { Controls } from './controls'
export function Player() {
    const [hasWindow, setHasWindow] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(1)
    const player = useRef<ReactPlayer | null>(null)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true)
        }
    }, [])
    return (
        <div className="w-[1080px] h-[720px] p-2">
            {hasWindow && (
                <ReactPlayer
                    ref={player}
                    className="react-player"
                    url="https://www.youtube.com/watch?v=2j0HFjPmCWc"
                    width="100%"
                    height="100%"
                    onProgress={(state) => {
                        setCurrentTime(state.playedSeconds)
                    }}
                    onDuration={(value) => setDuration(value)}
                    volume={0.5}
                    progressInterval={100}
                />
            )}
            <Controls
                currentTime={currentTime}
                duration={duration}
                onChangeScrubber={(newCurrentTime) => {
                    player.current?.seekTo(newCurrentTime, 'seconds')
                    setCurrentTime(newCurrentTime)
                }}
            />
        </div>
    )
}
