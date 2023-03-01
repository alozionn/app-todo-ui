import axios from 'axios'
import { API_URL } from '../constants'

const getTodos = async () => {
  const response = await axios.get(API_URL + '/listTodos')

  return response.data
}

const addTodo = async (data: { name: string }) => {
  console.log(API_URL)

  const response = await axios.post(API_URL + '/createTodo', {
    ...data,
  })

  return response.data
}

const deleteTodo = async (id: number) => {
  const response = await axios.delete(API_URL + '/todo/' + id)
}

const checkTodo = async (id: number, completed: boolean) => {
  const response = await axios.patch(API_URL + '/todo', {
    id,
    completed,
  })
}

const markTodoCompleted = async (id: number) => {
  const response = await axios.patch(API_URL + '/markTodoCompleted', {
    id,
  })
}

const markTodoUncompleted = async (id: number) => {
  const response = await axios.patch(API_URL + '/markTodoUncompleted', {
    id,
  })
}

export { getTodos, addTodo, deleteTodo, checkTodo, markTodoCompleted, markTodoUncompleted }
