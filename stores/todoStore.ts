import { Todo } from '@/utils/types'
import { create } from 'zustand'

interface TodoState {
  list: Todo[]
  filteredList: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: string) => void
  checkTodo: (id: string) => void
  fullList: () => void
  completedList: () => void
  uncompletedList: () => void
}

export const useTodoStore = create<TodoState>()((set) => ({
  list: [],
  filteredList: [],
  addTodo: (todo: Todo) => {
    set((state) => ({
      list: [...state.list, todo],
    }))
  },
  removeTodo: (id: string) => {
    set((state) => ({
      list: state.list.filter((todo) => todo.id !== id),
    }))
  },
  checkTodo: (id: string) => {
    set((state) => ({
      list: state.list.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed,
          }

        return todo
      }),
    }))
  },
  fullList: () => {
    set((state) => ({
      filteredList: state.list,
    }))
  },
  completedList: () => {
    set((state) => ({
      filteredList: state.list.filter((todo) => todo.completed === true),
    }))
  },
  uncompletedList: () => {
    set((state) => ({
      filteredList: state.list.filter((todo) => todo.completed === false),
    }))
  },
}))
