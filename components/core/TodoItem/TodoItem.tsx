import { useTodoStore } from '@/stores/todoStore'
import { todos } from '@/utils/api'
import { Todo } from '@/utils/types'
import Image from 'next/image'
import { MouseEvent, useState } from 'react'

interface TodoProps {
  todo: Todo
}
export const TodoItem = ({ todo }: TodoProps) => {
  const [showDelete, setShowDelete] = useState(false)
  const removeTodo = useTodoStore((state) => state.removeTodo)
  const checkTodo = useTodoStore((state) => state.checkTodo)

  const handleDelete = async (event: MouseEvent) => {
    event.stopPropagation()

    removeTodo(todo.id)
    await todos.deleteTodo(todo.id)
  }

  const handleCheck = () => {
    checkTodo(todo.id)
    todos.checkTodo(todo.id, !todo.completed)
  }

  return (
    <li
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      onClick={handleCheck}
      className="flex items-center hover:cursor-pointer mb-3 justify-between"
    >
      <input
        type="checkbox"
        className="rounded-md mr-3 border-[##00000040] w-5 h-5"
        readOnly
        checked={todo.completed}
      />
      <span className="w-5/6 text-lg truncate">{todo.name}</span>
      <span
        className={`w-1/6 flex justify-end ${showDelete ? 'hover:cursor-pointer' : 'opacity-0 '}`}
        onClick={(event) => handleDelete(event)}
      >
        <Image src="/delete-button.svg" alt="Delete todo" width={11} height={11} />
      </span>
    </li>
  )
}
