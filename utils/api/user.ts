import axios from 'axios'
import { API_URL } from '../constants'

const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await axios.post(API_URL + '/login', {
    email,
    password,
  })

  return response.data
}

const singup = async ({
  name,
  email,
  password,
}: {
  name: string
  email: string
  password: string
}) => {
  const response = await axios.post(API_URL + '/signup', {
    name,
    email,
    password,
  })

  return response.data
}

export { login, singup }
