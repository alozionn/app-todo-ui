import { ChangeEvent, KeyboardEvent } from 'react'

interface InputProps {
  placeholder: string
  text: string
  className: string
  changeCallback?: (event: ChangeEvent<HTMLInputElement>) => void
  keyUpCallback?: (event: KeyboardEvent) => void
}
export const Input = ({
  placeholder = 'placeholder',
  text,
  className,
  changeCallback,
  keyUpCallback,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={'input ' + className}
      value={text}
      onChange={changeCallback}
      onKeyUp={keyUpCallback}
    ></input>
  )
}
