import Image from 'next/image'
import ListingsSection from '../components/ListingsSection'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-12">
         <div>
        <div className='flex flex-col'>
          <h3 className='text-2xl text-dark font-semibold text-center'>
            Why You Should Work With Us
          </h3>
          <p className="text-gray-400 font-extralight text-center mb-6">Browse through our wide range of choice</p>
        </div>
        <div className='flex flex-col gap-3 lg:flex lg:flex-row justify-between items-center container mx-auto px-4 sm:px-6 lg:px-12'>
          <div>
            section1
          </div>
          <div>
            section2
          </div>
          <div>
            section3
          </div>
        </div>
      </div>
      <div className='my-8 flex flex-col gap-3'>
            <h3 className="text-2xl text-dark font-semibold text-center">Most Viewed Listings</h3>
            <p className="text-gray-400 font-extralight text-center mb-6">Browse through our wide range of choice</p>
      </div>
   
      <div className='my-8'>
    <ul className='flex justify-center items-center gap-2 md:gap-7 flex-wrap'>
        <li>
            <Link href='/' className='p-2 px-4 bg-primary rounded-full border border-dark text-xs md:text-base'>All Listings</Link>
        </li>
        <li>
            <Link href='/' className='p-2 px-4 hover:bg-primary hover:border hover:rounded-full text-xs md:text-base'>Available</Link>
        </li>
        <li>
            <Link href='/' className='p-2 px-4 hover:bg-primary hover:border hover:rounded-full text-xs md:text-base'>Rented</Link>
        </li>
        <li>
            <Link href='/' className='p-2 px-4 hover:bg-primary hover:border hover:rounded-full text-xs md:text-base'>Price</Link>
        </li>
        <li>
            <Link href='/' className='p-2 px-4 hover:bg-primary hover:border hover:rounded-full text-xs md:text-base'>Floor</Link>
        </li>
    </ul>
</div>

     <ListingsSection />
  
   </div>
  )
}
