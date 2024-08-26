import Image from 'next/image';
import buildingImg1 from '../public/images/office1.webp';
import buildingImg2 from '../public/images/office2.jpg';
import buildingImg from '../public/ambassador2.webp';
import homeIcon from '../public/icons/homeIcon1.svg';
import newtworkIcon from '../public/icons/networkIcon.svg';
import keyIcon from '../public/icons/keyIcon.svg';

export default function HowItWorksSection() {
  return (
    <div className="container mx-auto flex flex-wrap items-center  justify-center gap-12 bg-white my-12 py-14 px-6">
     
      <div className="flex flex-wrap justify-center items-start w-full lg:w-2/5">
        <div className="w-full">
          <Image src={buildingImg} alt="Main Building" width={200} height={100} className="w-full h-52 rounded-xl"/>
        </div>
        <div className="flex flex-col gap-4 lg:flex lg:flex-row justify-between w-full mt-4">
          <Image src={buildingImg1} alt="Office Example"  height={80} className="lg:w-1/2 w-72 rounded-xl"/>
          <Image src={buildingImg2} alt="Office Example"height={80} className="lg:w-1/2 w-64 rounded-xl"/>
        </div>
      </div>

      
      <div className="flex flex-col w-full lg:w-2/5 mt-6 lg:mt-0 px-4">
        <h2 className="text-2xl font-bold">How It works?</h2>
        <h3 className="mt-2 text-xl">Find a perfect Work space</h3>
        <p className="mt-2 text-gray-600 text-xs font-light">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam.</p>
        <ul className="mt-8 space-y-4 text-sm">
          <li className='flex flex-col justify-between items-start'>
            <div className='flex justify-between gap-4'>
            <Image src={homeIcon} alt="Home Icon" width={30} height={30} className="mr-2"/>
            <p className='font-bold'>Find Listing</p>
            </div> 
            <p className='ml-14'> Sumo petentium ut per, at his wisi utinam adipiscing. Et et graeco.</p>
           
           </li>
           <li className='flex flex-col justify-between items-start'>
            <div className='flex justify-between gap-4'>
            <Image src={newtworkIcon} alt="Network Icon" width={30} height={30} className="mr-2"/>
            <p className='font-bold'>Come and Explore</p>
            </div> 
            <p className='ml-14'> Sumo petentium ut per, at his wisi utinam adipiscing. Et et graeco.</p>
           
           </li>
           <li className='flex flex-col justify-between items-start'>
            <div className='flex justify-between gap-4'>
            <Image src={keyIcon} alt="Home Icon" width={30} height={30} className="mr-2"/>
            <p className='font-bold'>Take The Keys</p>
            </div> 
            <p className='ml-14'> Sumo petentium ut per, at his wisi utinam adipiscing. Et et graeco.</p>
           
           </li>
        </ul>
      </div>
    </div>
  );
}
