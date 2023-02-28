import { useTodoStore } from '@/stores/todoStore'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { todos } from '@/utils/api/'
import { Input } from '../Input/Input'

export const TodoInput = () => {
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
    <Input
      placeholder="Add a new todo"
      text={text}
      changeCallback={inputChange}
      keyUpCallback={addTodo}
    />
  )
}
