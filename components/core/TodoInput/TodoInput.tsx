import { useTodoStore } from '@/stores/todoStore'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { todos } from '@/utils/api/'
import { Input } from '../Input/Input'

export const TodoInput = () => {
  const [text, setText] = useState('')
  const addTodoStore = useTodoStore((state) => state.addTodo)

  const addTodo = async () => {
    const newTodo = await todos.addTodo({ name: text })

    setText('')
    addTodoStore(newTodo)
  }

  const keyUpHandler = async (event: KeyboardEvent) => {
    if (event.key === 'Enter' && text.length !== 0) {
      addTodo()
    }
  }

  const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    setText(target.value)
  }

  return (
    <div className="flex flex-row mb-7 border-b-2 pb-2">
      <Input
        className="w-full m-0 border-0"
        placeholder="Add a new todo"
        text={text}
        changeCallback={inputChange}
        keyUpCallback={keyUpHandler}
      />
      {text.length > 0 && (
        <button
          type="button"
          className="h-9 text-white bg-dark-sky-blue hover:bg-dark-blue-gray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addTodo}
        >
          <svg
            aria-hidden="true"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      )}
    </div>
  )
}
