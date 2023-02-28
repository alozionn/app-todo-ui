import Image from 'next/image'

export const Logo = () => {
  return (
    <Image src="/logo.svg" alt="Todo Logo" width={40} height={32} priority className="mb-[25px]" />
  )
}
