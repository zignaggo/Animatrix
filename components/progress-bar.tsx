'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export const ProgressProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <>
            {children}
            <ProgressBar
                color="#602DE7"
                height={'4px'}
                options={{ showSpinner: false, easing: 'ease-in-out' }}
                startPosition={0.3}
                shallowRouting
            />
        </>
    )
}
