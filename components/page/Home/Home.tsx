import { Card } from '@/components/core/Card/Card'
import { Header } from '@/components/core/Header/Header'
import Head from 'next/head'

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      {/* header */}
      <Header />
      {/* card */}
      <main className="flex justify-center">
        <Card />
      </main>
    </>
  )
}
