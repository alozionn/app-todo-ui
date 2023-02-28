import { useTodoStore } from '@/stores/todoStore'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = () => {
  const todoList = useTodoStore((state) => state.list)
  const filteredList = useTodoStore((state) => state.filteredList)
  const filter = useTodoStore((state) => state.filter)

  const list = filter ? filteredList : todoList
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
