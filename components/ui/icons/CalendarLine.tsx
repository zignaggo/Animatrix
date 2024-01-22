import * as React from 'react'
import { IconProps } from './types'

export const CalendarLine = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', ...props }, forwardedRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                {...props}
                ref={forwardedRef}
            >
                <path
                    d="M16 3C16.2449 3.00003 16.4813 3.08996 16.6644 3.25272C16.8474 3.41547 16.9643 3.63975 16.993 3.883L17 4V5H19C19.5046 4.99984 19.9906 5.19041 20.3605 5.5335C20.7305 5.87659 20.9572 6.34684 20.995 6.85L21 7V19C21.0002 19.5046 20.8096 19.9906 20.4665 20.3605C20.1234 20.7305 19.6532 20.9572 19.15 20.995L19 21H5C4.49542 21.0002 4.00943 20.8096 3.63945 20.4665C3.26947 20.1234 3.04284 19.6532 3.005 19.15L3 19V7C2.99984 6.49542 3.19041 6.00943 3.5335 5.63945C3.87659 5.26947 4.34684 5.04284 4.85 5.005L5 5H7V4C7.00028 3.74512 7.09788 3.49997 7.27285 3.31463C7.44782 3.1293 7.68695 3.01777 7.94139 3.00283C8.19584 2.98789 8.44638 3.07067 8.64183 3.23426C8.83729 3.39786 8.9629 3.6299 8.993 3.883L9 4V5H15V4C15 3.73478 15.1054 3.48043 15.2929 3.29289C15.4804 3.10536 15.7348 3 16 3ZM19 12H5V19H19V12ZM19 7H5V10H19V7Z"
                    fill={color}
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
        )
    }
)
CalendarLine.displayName = 'CalendarLine'
export default CalendarLine
