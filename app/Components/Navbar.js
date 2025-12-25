import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div className='h-14 bg-purple-600 flex justify-between px-3 items-center text-white '>
        <div className="logo font-bold text-lg"><Link href="/"> Linkify</Link></div>
     <ul className=' flex justify-center items-center gap-4'>
        <Link href="/"> <li>Home </li></Link>
        <Link href="/shorten"> <li>Shorten </li></Link>
        <Link href="about"> <li>About</li></Link>
        <Link href="/contact"> <li>Contact us</li></Link>
         {/* <li className='flex gap-3'>
            <Link href="/genrate"><button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold cursor-pointer'>Try now</button></Link>
            <Link href="/github"><button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 font-bold cursor-pointer'>Github</button></Link>
            </li>  */}
        
     </ul>
    </div>
  )
}

export default Navbar
