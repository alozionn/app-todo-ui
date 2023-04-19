import { HomePage } from '@/components/page/HomePage/HomePage'
import { todos } from '@/utils/api'
import { ROUTES } from '@/utils/constants'
import { QueryClient, useQuery, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

export default function Home() {
  const { data } = useQuery({ queryKey: ['todos'], queryFn: todos.getTodos })

  return <HomePage data={data} />
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['todos'], todos.getTodos)
  const session = await getSession(context)

  if (!session)
    return {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: false,
      },
    }

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  }
}
