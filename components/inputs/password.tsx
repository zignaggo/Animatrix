'use client'
import { forwardRef, useState } from 'react'
import { Input, InputProps } from '../ui/input'
import { Eye, EyeOff } from 'lucide-react'

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const [visible, setVisible] = useState(false)
        return (
            <Input
                ref={ref}
                className={className}
                type={!visible ? 'password' : 'text'}
                {...props}
                rightIcon={
                    visible ? (
                        <Eye onClick={() => setVisible(!visible)} />
                    ) : (
                        <EyeOff onClick={() => setVisible(!visible)} />
                    )
                }
            />
        )
    }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
