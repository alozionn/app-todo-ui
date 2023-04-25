import { Card } from '@/components/core/Card/Card'
import { Header } from '@/components/core/Header/Header'
import { Todo } from '@/components/layout/Todo/Todo'
import { useTodoStore } from '@/stores/todoStore'
import Head from 'next/head'

interface HomeProps {
  data: any
}

export const HomePage = ({ data }: HomeProps) => {
  const setTodos = useTodoStore((state) => state.setTodos)
  setTodos(data)

  return (
    <>
      <Head>
        <title>Simpledo - Home</title>
        <meta name="description" content="Simpledo UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="flex justify-center">
        <Card>
          <Todo />
        </Card>
      </main>
    </>
  )
}
