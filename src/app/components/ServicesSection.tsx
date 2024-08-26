import Link from "next/link";
import Image from "next/image";
import officeIcon from "../public/icons/to-work-in-an-office-2 1.svg";

export default function ServicesSection() {
    return (
        <div className="mt-8 mx-auto py-12 px-4 sm:px-6 lg:px-12">
        <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-dark">Our Services</h2>
          
        </div>
        <div className="flex items-center mt-12 justify-center md:grid-cols-2 gap-9 pb-16 px-4 sm:px-0">
            
        <div className="bg-red-300 bg-opacity-10 p-6 px-12 flex flex-col w-96 gap-6">
        <div className="flex justify-start gap-3">
     
        <h4 className="text-dark font-bold">Want to Grow Your Business?</h4>
        </div>
        <div className="flex items-end gap-3">
       
            <div className="flex flex-col gap-3 items-start justify-between">
            
              
            <p className="font-light text-gray-400 text-sm">
            Tucked in the historical and the current, the Ambassador Mall building is
             easily recognizable through its rectangular volume, white stripes, and floating eave.
            </p>
            <div className="text-center">
            <Link href="/all-listings" className="bg-dark text-white  p-2 text-sm rounded-full font-light">
                    Get Started →
            </Link>
            </div>
            </div>
           <Image src={officeIcon} alt='working' className="w-32 h-20 object-fit text-primary"/>
        </div>
      </div>
      <div className="bg-gray-300 bg-opacity-10 p-6 px-12 flex flex-col w-96 gap-6">
        <div className="flex justify-start gap-3">
     
        <h4 className="text-dark font-bold">Looking for a Working Space?</h4>
        </div>
        <div className="flex items-end gap-3">
       
            <div className="flex flex-col gap-3 items-start justify-between">
            
              
            <p className="font-light text-gray-400 text-sm">
            Tucked in the historical and the current, the Ambassador Mall building is
             easily recognizable through its rectangular volume, white stripes, and floating eave.
            </p>
            <div className="text-center">
            <Link href="/all-listings" className="bg-dark text-white  p-2 text-sm rounded-full font-light">
                    learn more →
            </Link>
            </div>
            </div>
           <Image src={officeIcon} alt='working' className="w-32 h-20 object-fit text-primary"/>
        </div>
      </div>
          
        </div>
    </div>
    );
}