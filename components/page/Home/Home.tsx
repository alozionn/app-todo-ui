import { Card } from '@/components/core/Card/Card'
import { Header } from '@/components/core/Header/Header'
import { useTodoStore } from '@/stores/todoStore'
import Head from 'next/head'
import { useEffect } from 'react'

interface HomeProps {
  data: any
}

export const HomePage = ({ data }: HomeProps) => {
  const setTodos = useTodoStore((state) => state.setTodos)

  useEffect(() => {
    setTodos(data)
  })

  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Header />
      <main className="flex justify-center">
        <Card />
      </main>
    </>
  )
}
