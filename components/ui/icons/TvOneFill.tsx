import * as React from 'react'
import { IconProps } from './types'

export const TvOneFill = React.forwardRef<SVGSVGElement, IconProps>(
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
                    d="M16 19C16.2549 19.0003 16.5 19.0979 16.6854 19.2728C16.8707 19.4478 16.9822 19.687 16.9972 19.9414C17.0121 20.1958 16.9293 20.4464 16.7657 20.6418C16.6021 20.8373 16.3701 20.9629 16.117 20.993L16 21H8C7.74512 20.9997 7.49997 20.9021 7.31463 20.7272C7.1293 20.5522 7.01777 20.313 7.00283 20.0586C6.98789 19.8042 7.07067 19.5536 7.23426 19.3582C7.39786 19.1627 7.6299 19.0371 7.883 19.007L8 19H16ZM20 4C20.5046 3.99984 20.9906 4.19041 21.3605 4.5335C21.7305 4.87659 21.9572 5.34684 21.995 5.85L22 6V16C22.0002 16.5046 21.8096 16.9906 21.4665 17.3605C21.1234 17.7305 20.6532 17.9572 20.15 17.995L20 18H4C3.49542 18.0002 3.00943 17.8096 2.63945 17.4665C2.26947 17.1234 2.04284 16.6532 2.005 16.15L2 16V6C1.99984 5.49542 2.19041 5.00943 2.5335 4.63945C2.87659 4.26947 3.34684 4.04284 3.85 4.005L4 4H20Z"
                    fill={color}
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
        )
    }
)
TvOneFill.displayName = 'TvOneFill'
export default TvOneFill
