"use client";
import SecondLayout from "@/app/(pages)/secondLayout";
import Link from "next/link";
import Image from "next/image";
import buildingImg from "../../public/images/ambassador1.webp";
import buildingImg2 from "../../public/images/office2.jpg";

export default function About() {
    return (
        <SecondLayout>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-24 items-center justify-between"> 
          <div className='flex flex-col mt-12'>
          <h3 className='text-2xl text-dark font-semibold text-center'>
            About Us
          </h3>
          <p className="text-gray-400 font-extralight text-center mb-6">Details about our company</p>
        </div>


        <div className="w-full flex justify-center gap-32 items-start">
           
                
            
            <div className="flex flex-col w-1/2 gap-5 items-center text-dark text-opacity-45">
                <p className="text-dark text-center text-2xl">Our History</p>
                <p>The building’s journey began when Ambassador Garment & Trade Plc launched an architectural 
                    design competition for a mixed-use building after acquiring a plot of land adjacent to the north 
                    of the present Abrehot Library. Siting the potential of the project, RAAS Architects entered the 
                    competition, whose design entry eventually won. “We thought this was an excellent opportunity to link 
                    the heritage of 4kilo with modern times, an opportunity to contribute to the enrichment of its
                     historical context” RAAS Architects. The architects looked at three important aspects to lay the 
                     basis for the building’s design: history, context, and sustainability.</p>
                
                     <button className="border border-dark text-center p-1 px-2 rounded-xl bg-dark text-white w-1/5 hover:bg-white hover:text-dark"> <Link href="/contact" >Learn more</Link></button>
            </div>
            
            
            
       
          
                <div className="flex flex-col items-center gap-3 py-8 text-dark text-sm">
                
                <Image src={buildingImg} alt="Office Example" width={600} height={70} className=" h-52 rounded-xl"/> 
                <p className="text-gray-300">Ambassador Mall, 4 kilo</p>
                </div>

            </div>

            <div className="w-full flex gap-24 items-center">
           
            <div className="flex flex-col items-center gap-3 py-8 text-dark text-sm">
                
                <Image src={buildingImg2} alt="Office Example" width={500} height={30} className=" h-52 rounded-xl"/> 
                <Image src={buildingImg} alt="Office Example" width={500} height={30} className=" h-52 rounded-xl"/>
                
                </div>
            
            <div className="flex flex-col w-1/2 gap-5 items-center text-dark text-opacity-45">
                <p className="text-dark text-center text-2xl">Our Mission</p>
                <p>The building’s journey began when Ambassador Garment & Trade Plc launched an architectural 
                    design competition for a mixed-use building after acquiring a plot of land adjacent to the north 
                    of the present Abrehot Library. Siting the potential of the project, RAAS Architects entered the 
                    competition, whose design entry eventually won. “We thought this was an excellent opportunity to link 
                    the heritage of 4kilo with modern times, an opportunity to contribute to the enrichment of its
                     historical context” RAAS Architects. The architects looked at three important aspects to lay the 
                     basis for the building’s design: history, context, and sustainability.</p>
                
                    
            </div>
            
            
            
       
          
              

            </div>
        </div>
      </SecondLayout>
    );
}