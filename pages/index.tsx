import { HomePage } from '@/components/page/Home/Home'
import { todos } from '@/utils/api'
import { QueryClient, useQuery, dehydrate } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'

export default function Home() {
  // const { data } = useQuery({
  //   queryKey: ['todos'],
  //   queryFn: getTodos,
  //   initialData: props.todos,
  // })
  const { data } = useQuery({ queryKey: ['todos'], queryFn: todos.getTodos })
  return <HomePage data={data} />
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient()
  // const todos = await getTodos()
  await queryClient.prefetchQuery(['todos'], todos.getTodos)

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  }
}
