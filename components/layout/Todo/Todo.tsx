import { Filters } from '@/components/core/Filters/Filters'
import { TodoInput } from '@/components/core/TodoInput/TodoInput'
import { TodoList } from '@/components/core/TodoList/TodoList'

export const Todo = () => {
  return (
    <>
      <h5 className="mb-7 text-2xl font-markpro-bold">Todo List</h5>
      <TodoInput />
      <TodoList />
      <Filters />
    </>
  )
}
