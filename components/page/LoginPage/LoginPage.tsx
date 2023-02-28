import { Card } from '@/components/core/Card/Card'
import { Login } from '@/components/layout/Login/Login'
import Head from 'next/head'

export const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Simpledo - Login</title>
        <meta name="description" content="Simpledo Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="flex justify-center">
        <Card>
          <Login />
        </Card>
      </main>
    </>
  )
}
