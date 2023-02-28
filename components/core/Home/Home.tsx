import Head from 'next/head'
import Image from 'next/image'

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Todo App UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Image src="/logo.svg" alt="Todo Logo" width={40} height={32} priority />
      </main>
    </>
  )
}
