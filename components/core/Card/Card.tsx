import Image from 'next/image'
import { Filters } from '../Filters/Filters'
import { Input } from '../Input/Input'
import { TodoList } from '../TodoList/TodoList'

export const Card = () => {
  return (
    <div className="w-card h-card p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 ">
      <Image src="/logo.svg" alt="Todo Logo" width={40} height={32} priority />
      <h5 className="mb-6 text-2xl font-bold font-markpro">Todo List</h5>
      {/* input */}
      <Input />
      {/* todos */}
      <TodoList />
      {/* filters */}
      <Filters />
    </div>
  )
}
