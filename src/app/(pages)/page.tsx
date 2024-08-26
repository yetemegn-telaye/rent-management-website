import Image from 'next/image'
import ListingsSection from '../components/ListingsSection'
import Link from 'next/link'
import icon1 from '../public/icons/Icon-1.svg';
import icon2 from '../public/icons/Icon-2.svg';
import icon3 from '../public/icons/Icon.svg';
import officeType from '../public/images/office1.webp';
import commercialType from '../public/images/office5.jpeg';
import HowItWorksSection from '../components/HowItWorksSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  return (
    <div className="py-12">
         <div className='container mx-auto px-4 py-12 mb-16'>
        <div className='flex flex-col'>
          <h3 className='text-2xl text-dark font-semibold text-center'>
            Why You Should Work With Us
          </h3>
          <p className="text-gray-400 font-extralight text-center mb-6">Browse through our wide range of choice</p>
        </div>
        <div className='flex flex-col gap-6 lg:flex lg:flex-row justify-between items-center container mx-auto p-12 px-6 lg:px-12'>
          <div className='flex flex-col items-center justify-center gap-3'>
            <Image src={icon3} alt='icon'  width={40} height={40}/>
            <p className='text-md'>Wide Range of Options</p>
            <p className='text-sm font-light'>We have a variety of options for your business.</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3'>
            <Image src={icon1} alt='icon'  width={40} height={40}/>
            <p className='text-md'>Rent Working Spaces</p>
            <p className='text-sm font-light'>We have a variety of options for your business.</p>
          </div>
          <div className='flex flex-col items-center justify-center gap-3'>
            <Image src={icon2} alt='icon'  width={40} height={40}/>
            <p className='text-md'>Trusted by Thoused</p>
            <p className='text-sm font-light'>We offer you reliable and secure service.</p>
          </div>
        </div>
      </div>
      <div className='container my-8 mx-auto px-4 flex flex-col gap-3'>
            <h3 className="text-2xl text-dark font-semibold text-center">Most Viewed Listings</h3>
            <p className="text-gray-400 font-extralight text-center mb-6">Browse through our wide range of choice</p>
      </div>
   
      <div className='container mx-auto my-12'>
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
     <div className="bg-primary mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-dark">Find Listings with Categories</h2>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="flex items-center mt-12 justify-center md:grid-cols-2 gap-9 pb-16 px-4 sm:px-0">
                
                    <div  className="flex flex-col items-center bg-white w-72 rounded-lg shadow-lg overflow-hidden">
                        <Image src={officeType} alt='imag' className="w-full h-96 object-cover"/>
                        <div className="absolute p-4 text-white">
                            <h3 className="text-lg font-semibold">OFFICES</h3>
                            <p className="text-gray-200">12 listings</p>
                        </div>
                    </div>
                    <div  className="flex flex-col items-center bg-white w-72 rounded-lg shadow-xl overflow-hidden">
                        <Image src={officeType} alt='imag' className="w-full h-96 object-cover"/>
                        <div className="absolute p-4 text-white">
                            <h3 className="text-lg font-semibold">Commercial</h3>
                            <p className="text-gray-200">12 listings</p>
                        </div>
                    </div>
              
            </div>
        </div>
        <HowItWorksSection />
        <AboutSection />
        <ServicesSection />
   </div>
  )
}
