import Link from 'next/link'
import React from 'react'
export const runtime = 'edge'
async function getAbout() {
    const response = await fetch('http://localhost:3000/api/about', { cache: 'no-cache' }) 
    return response.json()
}

export default async function page() {
    const about = await getAbout()
    return(
        <>
          <header className='bg-[#f9f9f9] p-5 border-b border-[#e9e9e9]'>
            <div className='max-w-[1440px] flex justify-between mx-auto'>  
              <a href="/" className='text-[28px] font-bold text-[#f90]'>LoGo</a>
              <nav>
                <ul className='flex gap-10 text-[24px] font-medium'>
                  <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/'}>Home</Link></li>
                  <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/products'}>Products</Link></li>
                </ul>
              </nav>
            </div>
          </header>
          <main className='h-[600px]'>
            <div className='h-full flex justify-center items-center'>
              <h1 className='text-[50px] font-bold'>API: {about}</h1>
            </div>
          </main>
        </>
    )
}
