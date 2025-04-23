import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded bg-brand-primary text-white hover:bg-brand-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}