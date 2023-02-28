import { useTodoStore } from '@/stores/todoStore'
import { MouseEvent } from 'react'
import { TodoItem } from '../TodoItem/TodoItem'

const todos = [
  { id: '1', name: 'asd1', completed: false },
  { id: '2', name: 'asd2', completed: false },
  { id: '3', name: 'asdasdadadhfahjgsdggasdjhasgdgahjsdjhasdjhagsd3', completed: false },
  { id: '4', name: 'asd4', completed: false },
  { id: 5, name: 'asd5', completed: false },
  { id: 1, name: 'asd1', completed: false },
  { id: 2, name: 'asd2', completed: false },
  { id: 3, name: 'asd3', completed: false },
  { id: 4, name: 'asd4', completed: false },
  { id: 5, name: 'asd5', completed: false },
]

export const TodoList = () => {
  const todoList = useTodoStore((state) => state.list)
  const filteredList = useTodoStore((state) => state.filteredList)

  const list = filteredList.length === 0 ? todoList : filteredList
  return (
    <div>
      <ul className="overflow-x-hidden h-40 pr-2">
        {list.length !== 0 &&
          list.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />
          })}
      </ul>
    </div>
  )
}
