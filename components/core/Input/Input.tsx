import { useTodoStore } from '@/stores/todoStore'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { todos } from '@/utils/api/'
export const Input = () => {
  const [text, setText] = useState('')
  const addTodoStore = useTodoStore((state) => state.addTodo)

  const addTodo = async (event: KeyboardEvent) => {
    if (event.key === 'Enter' && text.length !== 0) {
      const newTodo = await todos.addTodo({ name: text })

      setText('')
      addTodoStore(newTodo)
    }
  }

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    if (target.value.length !== 0) setText(target.value)
  }
  return (
    <input
      placeholder="Add a new todo"
      className="w-full pb-3 mb-7 border-b-2 outline-none text-lg focus:border-dark-sky-blue"
      value={text}
      onChange={inputChange}
      onKeyUp={addTodo}
    ></input>
  )
}
