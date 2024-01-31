import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
          <h1 className='text-[50px] font-bold'>HOME PAGE FOR TESTING...</h1>
        </div>
      </main>
    </>
  )
}
