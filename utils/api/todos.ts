import axios from 'axios'

const API_URL = process.env.API_URL ?? 'http://localhost:3001'

const getTodos = async () => {
  const response = await axios.get(API_URL + '/todos')

  return response.data
}

const addTodo = async (data: { name: string }) => {
  const response = await axios.post(API_URL + '/todo', {
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

export { getTodos, addTodo, deleteTodo, checkTodo }
