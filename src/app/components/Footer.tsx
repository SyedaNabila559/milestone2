import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-gray-100 h-96'>
      <ul className='flex justify-center py-16 h-full gap-48 '>
        <li>
          <h3 className='font-sans text-2xl font-semibold text-black'>Core Courses</h3>
          <ul className='mt-5 text-black'>
            <li className='mb-2'>
              <Link href='/c1'>Programming Fundamentals</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c2'>Web2 Using NextJS</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c3'>Earn as You Learn</Link>
            </li>
          </ul>
        </li>

        <li>
          <h3 className='font-sans text-2xl font-semibold text-black'>Advanced Courses</h3>
          <ul className='mt-5 text-black'>
            <li className='mb-2'>
              <Link href='/c1'>Web 3 and Metaverse</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c2'>Cloud-Native Computing</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c3'>Artificial Intelligence (AI) and Deep Learning</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c1'>Ambient Computing and IoT</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c2'>Genomics and Bioinformatics</Link>
            </li>
            <li className='mb-2'>
              <Link href='/c3'>Network Programibility and Automation</Link>
            </li>
          </ul>
        </li>

        <li> 
          <h3 className='font-sans text-2xl font-semibold text-black'>Social Links</h3>
          <div className='flex gap-4 mt-4'>
            <Link href='https://www.youtube.com/@KamranTessorikk' target="_blank">
              <Image src="/yt.png" alt='yt' width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </Link>
            <Link href='https://www.instagram.com/KamranTessoriPk' target="_blank">
              <Image src='/ig.png' alt='ig' width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </Link>
            <Link href='https://twitter.com/KamranTessoriPk' target="_blank">
              <Image src='/x.png' alt='X Logo' width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </Link>
            <Link href='https://www.facebook.com/TeamKTessori' target="_blank">
              <Image src='/fb.png' alt='Facebook Logo' width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </Link>
            <Link href='https://www.tiktok.com/@KamranTessoriPk' target="_blank">
              <Image src='/tt.png' alt='TikTok Logo' width={40} height={40} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            </Link>
          </div>
          <h3 className='text-blue-500 mt-5 flex ml-1 underline'>
            <Link href="mailto:education@governorsindh.com">education@governorsindh.com</Link>
          </h3>
        </li>
      </ul>
    </div>
  )
}

export default Footer;