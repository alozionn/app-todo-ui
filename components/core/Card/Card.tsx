import React from 'react'
import { Logo } from '../Logo/Logo'

interface CardProps {
  children: React.ReactNode
}
export const Card = ({ children }: CardProps) => {
  return (
    <div className="w-card max-h-card px-card-x py-card-y bg-white rounded-xl shadow-card flex flex-col">
      <Logo />
      {children}
    </div>
  )
}
