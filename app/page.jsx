import { FUNCTIONS_CONFIG_MANIFEST } from 'next/dist/shared/lib/constants'
import Image from 'next/image'
import Link from 'next/link'

async function getFromKv() {
  const response = await fetch('http://localhost:3000/api/about', { cache: 'no-cache' })
  return response.json()
}

export default async function Home() {
  const kvValue = await getFromKv()
  return(
    <>
      <header className='bg-[#f9f9f9] p-5 border-b border-[#e9e9e9]'>
        <div className='max-w-[1440px] flex justify-between mx-auto'>  
          <a href="/" className='text-[28px] font-bold text-[#f90]'>LoGo</a>
          <nav>
            <ul className='flex gap-10 text-[24px] font-medium'>
              <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/products'}>Products</Link></li>
              <li className='hover:text-[#f90] transition cursor-pointer hover:scale-105'><Link href={'/about'}>About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main className='h-[600px]'>
        <div className='h-full flex justify-center items-center'>
          <div>
            <h1 className='text-[50px] font-bold'>HOME PAGE FOR TESTING...</h1>
            <p className='max-w-[700px] my-8 leading-[25px]'><span className='text-[#f25] font-medium'>NOTE:</span> <br />the KV read below returns the value of the <span className='text-[#f9f9f9] bg-[#383838] font-light px-[4px] py-[1px] rounded-md'>&#34;user-name&#34;</span> which it has been deployed before to the KV storage and it&#39;s value on the KV is <span className='text-[#f9f9f9] bg-[#383838] px-[4px] font-light py-[1px] rounded-md'>mohamed adham</span></p>
            <Link href={'/kv'} className='p-3 text-[24px] font-medium border rounded-lg transition hover:scale-105 border-[#e9e9e9] bg-[#f9f9f9] flex w-fit mx-auto mt-10'>Read KV Value</Link>
          </div>
        </div>
      </main>
    </>
  )
}
