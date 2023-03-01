import { signOut } from 'next-auth/react'

export const Header = () => {
  return (
    <div className="flex justify-end px-4 py-5 text-dark-blue-gray" onClick={() => signOut()}>
      Logout
    </div>
  )
}
