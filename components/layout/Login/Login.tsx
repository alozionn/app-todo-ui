import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface Inputs {
  email: string
  password: string
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    signIn('credentials', { email: data.email, password: data.password })
  }

  return (
    <>
      <h2 className="mb-1 text-2xl font-markpro-bold">Welcome back!</h2>
      <h5 className="mb-7 text-md font-markpro-bold text-cool-grey-two">Login to continue</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="input mb-3"
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <Link href="/signup" className="underline text-dark-blue-gray text-xs mb-7">
          Don&apos;t have an account? Sign up.
        </Link>

        <button
          className="w-full bg-dark-sky-blue text-white py-2 text-center rounded-md mt-12 hover:bg-dark-blue-gray"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  )
}
