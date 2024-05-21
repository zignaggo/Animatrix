import * as React from 'react'
import { IconProps } from './types'

export const LogoLoading = React.forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', ...props }, ref) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={178}
                height={178}
                fill="none"
                ref={ref}
                {...props}
            >
                <g clipPath="url(#a)">
                    <rect
                        width={177}
                        height={177}
                        x={0.5}
                        y={0.5}
                        fill="#1B1A1F"
                        rx={19.667}
                    />
                    <path
                        fill="url(#b)"
                        d="M0 0h280.971v71H0z"
                        transform="rotate(46.035 -130.59 -73.564)"
                    />
                    <path
                        fill={color}
                        stroke="#27252C"
                        strokeWidth={5.728}
                        d="m138.126 146.584-22.908-36.078h13.244l-1.345-3.816-10.865-30.82 21.345-33.326 2.824-4.409h-28.977l-.835 1.383-4.529 7.499-6.377-18.089-.674-1.912H77.583l-.673 1.913-5.866 16.663-3.65-6.069-.835-1.388H37.548l2.732 4.38L60.64 75.147l-11.105 31.544-1.343 3.815H62.128l-22.274 36.11-2.694 4.368h29.123l.838-1.369 21.827-35.66 21.826 35.66.838 1.369H140.919l-2.793-4.4ZM88.297 53.679l5.013 14.48-4.358 7.215-5.203-8.654 4.548-13.04Z"
                    />
                </g>
                <defs>
                    <linearGradient
                        id="b"
                        x1={140.485}
                        x2={140.485}
                        y1={0}
                        y2={71}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor={color} stopOpacity={0} />
                        <stop offset={0.495} stopColor={color} />
                        <stop offset={1} stopColor={color} stopOpacity={0} />
                    </linearGradient>
                    <clipPath id="a">
                        <rect
                            width={177}
                            height={177}
                            x={0.5}
                            y={0.5}
                            fill="#fff"
                            rx={19.667}
                        />
                    </clipPath>
                </defs>
            </svg>
        )
    }
)
LogoLoading.displayName = 'LogoLoading'
export default LogoLoading
