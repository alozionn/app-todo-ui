import { useTodoStore } from '@/stores/todoStore'
import { ChangeEvent, KeyboardEvent, useState } from 'react'

export const Input = () => {
  const [text, setText] = useState('')
  const addTodoStore = useTodoStore((state) => state.addTodo)

  const addTodo = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(text)
      setText('')
      addTodoStore({
        id: crypto.randomUUID(),
        name: text,
        completed: false,
      })
    }
  }

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    setText(target.value)
  }
  return (
    <input
      placeholder="Add a new todo"
      className="w-full pb-3 mb-7 border-b-2 outline-none text-lg"
      value={text}
      onChange={inputChange}
      onKeyUp={addTodo}
    ></input>
  )
}
