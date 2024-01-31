import Link from 'next/link'
import React from 'react'

export const runtime = 'edge'

async function getKVvalue() {
    const response = await fetch('https://imp-test.pages.dev/api/kv', { next: { revalidate: 5 } })
    return response.json()
}

export default async function page() {
    const kvValue = await getKVvalue()
  return (
    <>
      <header className='bg-[#f9f9f9] p-5 border-b border-[#e9e9e9]'>
        <div className='max-w-[1440px] flex justify-between mx-auto'>  
          <a href="/" className='text-[28px] font-bold text-[#f90]'>LoGo</a>
          <nav>
            <ul className='flex gap-10 text-[24px] font-medium'>
              <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/products'}>Products</Link></li>
              <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/about'}>About</Link></li>
              <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/'}>Home</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='h-[600px]'>
        <div className='h-full flex justify-center items-center'>
          <div>
            <h1 className='text-[50px] font-bold'>VAUES FROM THE KV:</h1>
            <p>The Value of the key <span className='text-[#f9f9f9] bg-[#383838] px-[4px] font-light py-[1px] rounded-md'>user-name</span> is <span className='text-[#f9f9f9] bg-[#383838] px-[4px] font-light py-[1px] rounded-md'>{kvValue}</span> </p>
            <Link href={'/'} className='p-3 text-[24px] font-medium border rounded-lg transition hover:scale-105 border-[#e9e9e9] bg-[#f9f9f9] flex w-fit mx-auto mt-10'>Back Home</Link>
          </div>
        </div>
      </main>
    </>
  )
}
