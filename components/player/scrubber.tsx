'use client'
import { useEffect, useRef } from 'react'
import { useMouse } from 'react-use'
import { inRange } from '@/utils'
interface ScrubberProps {
    duration: number
    currentTime: number
    onChange?: (value: number) => void
}
export function Scrubber({ currentTime, duration, onChange }: ScrubberProps) {
    const slidePosition = ((currentTime / duration) * 100 - 100) * -1
    const scrubber = useRef<HTMLDivElement | null>(null)
    const { elX, elW } = useMouse(scrubber)
    const mouseX = inRange(elX, { end: elW })
    const handleDisablePress = () => {
        if (scrubber.current) {
            scrubber.current.setAttribute('data-pressed', 'false')
        }
        document.body.classList.remove('select-none')
    }
    useEffect(() => {
        if (scrubber.current && scrubber.current.dataset.pressed === 'true') {
            const slidePositionValue = (mouseX / elW) * 100 - 100
            onChange && onChange(slidePositionValue * -1)
        }
        document.addEventListener('mouseup', handleDisablePress)
        return () => {
            document.removeEventListener('mouseup', handleDisablePress)
        }
    }, [mouseX, elW, onChange])
    return (
        <div
            ref={scrubber}
            className="group/scrubber pt-3 w-full cursor-pointer h-6"
            data-pressed="false"
            onMouseDown={(e) => {
                e.currentTarget.setAttribute('data-pressed', 'true')
                document.body.classList.add('select-none')
            }}
            onClick={() => {
                const slidePositionValue = (mouseX / elW) * 100 - 100
                onChange && onChange(slidePositionValue * -1)
            }}
        >
            <div className="h-3">
                <div className="relative w-full bg-gray-300 h-1.5 transition-all group-hover/scrubber:h-2">
                    <div
                        className="absolute rounded-tl-none left-0 h-full bg-purple-500 transition-all group-[:not(.playing-control)]/controls:transition-none group-data-[pressed=true]/scrubber:transition-none ease-linear"
                        style={{ right: `${slidePosition}%` }}
                    >
                        <div className="absolute invisible w-3 aspect-square rounded-full top-1/2 -right-2 bg-purple-500 -translate-y-1/2 group-data-[pressed=true]/scrubber:visible group-hover/scrubber:w-4 group-hover/scrubber:visible transition-all"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
