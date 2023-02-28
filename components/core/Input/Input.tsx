import { ChangeEvent, KeyboardEvent } from 'react'

interface InputProps {
  placeholder: string
  text: string
  changeCallback?: (event: ChangeEvent<HTMLInputElement>) => void
  keyUpCallback?: (event: KeyboardEvent) => void
}
export const Input = ({
  placeholder = 'placeholder',
  text,
  changeCallback,
  keyUpCallback,
}: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      className="input"
      value={text}
      onChange={changeCallback}
      onKeyUp={keyUpCallback}
    ></input>
  )
}
