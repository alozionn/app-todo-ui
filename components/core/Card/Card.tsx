import { Filters } from '../Filters/Filters'
import { Input } from '../Input/Input'
import { Logo } from '../Logo/Logo'
import { TodoList } from '../TodoList/TodoList'

export const Card = () => {
  return (
    <div className="w-card h-card px-card-x py-card-y bg-white rounded-xl shadow-card flex flex-col">
      <Logo />
      <h5 className="mb-7 text-2xl font-markpro-bold">Todo List</h5>
      <Input />
      <TodoList />
      <Filters />
    </div>
  )
}
