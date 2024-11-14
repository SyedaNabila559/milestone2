import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div style={{ backgroundColor: '#044E83' }} className='bg-blue-600 h-20 fixed w-full z-10 top-0'>
      <div className="flex justify-between items-center h-full px-8">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
            alt="Logo"
            className='h-16'
          />
          <h3
            className='text-2xl font-bold text-blue-200 ml-4'
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
          >
            Tuition Free Education Program on Latest Technologies
          </h3>
        </div>

        {/* Navigation Links */}
        <ul className='font-semibold flex gap-10'>
          <Link href="/"><li>Home</li></Link>
          <Link href="/apply"><li>Apply</li></Link> 
          <Link href="/job"><li>Jobs</li></Link>    
          <Link href="/courses"><li>Courses</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header

  