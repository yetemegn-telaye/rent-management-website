"use client";
import Image from "next/image";
import officeImg1 from "../../../public/images/office1.webp";
import officeImg2 from "../../../public/images/office2.jpg";
import officeImg3 from "../../../public/images/office3.jpg";
import officeImg5 from "../../../public/images/office5.jpeg";
import ImageSlider from "@/app/components/ImageSlider";
import phoneIcon from "../../../public/icons/phoneicon.svg";
import Link from "next/link";
import SecondLayout from "../../secondLayout";


export default function ListingDetail({params}: {params: any}) {
    const listings = [
        {
            id: 1,
            spaceType: "Office",
            openForRent: true,
            spaceId: "OFF001",
            floor: "2nd Floor",
            price: "35,000",
            priceRange: "30,000 - 40,000",
            area: 50,
            viewCount: 14,
            imageUrl: officeImg1,
        },
        {
            id: 2,
            spaceType: "Commercial",
            openForRent: true,
            spaceId: "CM001",
            floor: "1st Floor",
            price: "45,000",
            priceRange: "40,000 - 55,000",
            area: 40,
            viewCount: 14,
            imageUrl: officeImg5,
        },
        {
            id: 3,
            spaceType: "Office",
            openForRent: false,
            spaceId: "OFF002",
            floor: "4th Floor",
            price: "20,000",
            priceRange: "20,000 - 30,000",
            area: 30,
            viewCount: 14,
            imageUrl: officeImg3,
        },
        {
            id: 4,
            spaceType: "Office",
            openForRent: true,
            spaceId: "OFF003",
            floor: "2nd Floor",
            price: "35,000",
            priceRange: "30,000 - 40,000",
            area: 100,
            viewCount: 14,
            imageUrl: officeImg2,
        },
        {
            id: 5,
            spaceType: "Office",
            openForRent: true,
            spaceId: "OFF005",
            floor: "2nd Floor",
            price: "35,000",
            priceRange: "30,000 - 40,000",
            area: 40,
            viewCount: 14,
            imageUrl: officeImg1,
        },
        {
            id: 6,
            spaceType: "Commercial",
            openForRent: true,
            spaceId: "CM002",
            floor: "2nd Floor",
            price: "30,000",
            priceRange: "30,000 - 40,000",
            area: 50,
            viewCount: 14,
            imageUrl: officeImg5,
        },
    ];
    var selectedListing = listings.find(listing => listing.id == params.listingId);
    return (
        <SecondLayout>
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full flex flex-col gap-12 items-center justify-between"> 
          <div className='flex flex-col mt-12'>
          <h3 className='text-2xl text-dark font-semibold text-center'>
          {selectedListing?.spaceType} ({selectedListing?.spaceId})
          </h3>
          <p className="text-gray-400 font-extralight text-center mb-6">Browse through our wide range of choice</p>
        </div>
        <div className="w-full flex justify-center gap-8 items-start">
            <div className="flex flex-col w-1/2 gap-3 items-center">
                <div className="flex flex-col items-end gap-3">
                <p className="mr-5 bg-primary align-end font-light text-dark border border-dark rounded-full px-2">{selectedListing?.viewCount} Views</p>
                {/* <Image src={selectedListing!.imageUrl} alt="Office Example" width={600} height={70} className=" h-52 rounded-xl"/>  */}
                <ImageSlider/>
                </div>
                <div className="flex justify-around w-full text-dark text-opacity-50 px-8 font-light">
            <div className="flex flex-col gap-2">
                <p>2nd Floor</p>
                <p>50 Sq ft.</p>
                <p>1 Conference Rooms</p>
            </div>
            <div className="flex flex-col gap-2">
                <p><span className="text-dark">Furnished:</span> No</p>
                <p>2 Rooms</p>
                <p><span className="text-dark">Price:</span> {selectedListing?.priceRange}</p>
            </div>
            </div>
            <div className="flex justify-center gap-8 w-1/2 mt-12">
               <button className="border border-dark p-2 px-4 rounded-xl bg-dark text-white hover:bg-white hover:text-dark"> <Link href="/contact" ><Image src={phoneIcon}  width={15} height={15} alt="phone icon"/></Link></button>
               <button className="border border-dark p-1 px-2 rounded-xl bg-dark text-white hover:bg-white hover:text-dark"> <Link href="/contact" >Chat</Link></button>
            </div>
            </div>
       
          
            <div className="flex justify-between gap-12 py-8 text-dark text-sm">
                <div className="flex flex-col gap-6 justify-around">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Listed Date</p>
                        <p>January 02,2024</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Security Camera</p>
                        <p>Available by Floor</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Balcony</p>
                        <p>Wide Balcony</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Wall Paint</p>
                        <p>White</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Elevator</p>
                        <p>Elevator Available</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Elevator Distance</p>
                        <p>1 meter</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">City View</p>
                        <p>City View</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Position</p>
                        <p>Corner</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-around">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Previous Use</p>
                        <p>Construction Company</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Neighborhood Businesses</p>
                        <p>Marketing Company</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Main Enterance Distance</p>
                        <p>Not available</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Stairs Distance</p>
                        <p>1 meter</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Natural Lighting</p>
                        <p>Available</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">High Ceiling</p>
                        <p>Standard</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-300">Neighborhood Businesses</p>
                        <p>Marketing Company</p>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
      </SecondLayout>
    );
}