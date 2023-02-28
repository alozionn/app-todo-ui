import { Card } from '@/components/core/Card/Card'
import { SignUp } from '@/components/layout/SignUp/SignUp'
import Head from 'next/head'

export const SignUpPage = () => {
  return (
    <>
      <Head>
        <title>Simpledo - SignUp</title>
        <meta name="description" content="Simpledo SignUp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className="flex justify-center">
        <Card>
          <SignUp />
        </Card>
      </main>
    </>
  )
}
