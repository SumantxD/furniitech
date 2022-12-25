import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' h-20 w-screen bg-gradient-to-b from-slate-800 to-slate-900 fixed top-0 text-gray-50 flex justify-between border-b-2 border-pink-400'>
      <p className=' pt-4 pl-2'>Logo</p>
      <ul className=' flex flex-row space-x-10  justify-end mr-5  mt-5'>
        <li>
          <Link href={'./'}>
            Go home
          </Link>
        </li>
        <li>
          <Link href={'./products'}>
            Products
          </Link>
        </li>
        <li>
          <Link href={'./testimonials'}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
