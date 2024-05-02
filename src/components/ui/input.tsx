import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'file:bg-transparent flex h-max w-full rounded-lg border border-blue-200 bg-blue-200 px-5 py-4 text-base text-white ring-offset-blue-400 file:border-0 file:text-sm file:font-medium placeholder:text-blue-900 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
