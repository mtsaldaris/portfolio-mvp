import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-2.5 rounded-lg bg-brand-primary text-white shadow-md hover:shadow-lg hover:bg-brand-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}