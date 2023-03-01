import { LoginPage } from '@/components/page/LoginPage/LoginPage'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { Session } from 'next-auth'
import { getSession } from 'next-auth/react'

export default function Login() {
  return <LoginPage />
}

export const getServerSideProps: GetServerSideProps<{ session: Session | null }> = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context)

  if (session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      session,
    },
  }
}
