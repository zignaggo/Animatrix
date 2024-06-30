'use client'
import { useEffect, useRef, useState } from 'react'
import { Controls } from './controls'
import ReactPlayer from 'react-player'
import { Button } from '../ui/button'
import { Header } from './header'
import { InnerControls } from './inner-controls'

type PlayerProps = {
    title?: string
    subtitle?: string
}
export function Player({ title, subtitle }: PlayerProps) {
    const [hasWindow, setHasWindow] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.5)
    const [duration, setDuration] = useState(1)
    const player = useRef<ReactPlayer | null>(null)
    const setNewTime = (newTime: number) => {
        let newTimeValidated = newTime > duration ? duration : newTime
        if (newTime < 0) {
            newTimeValidated = 0
        }
        player.current?.seekTo(newTimeValidated, 'seconds')
        setCurrentTime(newTimeValidated)
    }
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHasWindow(true)
        }
    }, [])
    return (
        <div
            className={`w-[1080px] h-[720px] group/player relative bg-[#000] ${
                playing ? 'playing' : ''
            }`}
        >
            {hasWindow && (
                <ReactPlayer
                    ref={player}
                    className="react-player"
                    url={'content_warning_kkkkkkkkkkkkkk.mp4'}
                    width="100%"
                    height="100%"
                    onProgress={(state) => setCurrentTime(state.playedSeconds)}
                    onDuration={(value) => setDuration(value)}
                    onEnded={() => setPlaying(false)}
                    volume={volume}
                    playing={playing}
                    progressInterval={100}
                />
            )}
            <div className="group-[:not(.playing)]/player:flex group-has-[.playing]/player:hidden group-hover/player:flex group-[:not(:hover)&.playing]/player:hidden flex-col p-6 absolute top-0 left-0 w-full bg-gradient-to-b h-full from-[#0008] via-[#0000] to-[#0008]">
                <Header
                    className="min-h-[76px]"
                    title={title}
                    subtitle={subtitle}
                    noClose
                    noFullscreen
                    noSettings
                />
                <InnerControls
                    className="w-full h-full"
                    playing={playing}
                    onPlay={(value) => setPlaying(value)}
                    onSkip={() => setNewTime(currentTime + 10)}
                    onPrev={() => setNewTime(currentTime - 10)}
                />
                <Controls
                    className={`w-full group/controls  ${
                        playing ? 'playing-control' : ''
                    }`}
                    currentTime={currentTime}
                    duration={duration}
                    onChangeScrubber={(newCurrentTime) =>
                        setNewTime(newCurrentTime)
                    }
                    onChangeVolume={(volume) => setVolume(volume)}
                    defaultVolume={volume}
                >
                    <Button variant="text" className="ml-auto">
                        Voltar episódio
                    </Button>
                    <Button variant="text">Proximo episódio</Button>
                </Controls>
            </div>
        </div>
    )
}
