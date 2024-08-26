
import Link from 'next/link';
import Image from 'next/image';
import officeImg1 from "../public/images/office1.webp";
import officeImg2 from "../public/images/office2.jpg";
import officeImg3 from "../public/images/office3.jpg";
import officeImg5 from "../public/images/office5.jpeg";

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

export default function ListingsSection() {
    return (
<div className="container mx-auto px-4 mb-24 sm:px-6 lg:px-12">
  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-sm">
                {listings.map((listing) => (
                    <div key={listing.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            
                           
                            <div className="w-full" style={{ paddingBottom: "75%" }}> {/* Adjust the paddingBottom to change the aspect ratio */}
        <Image 
            src={listing.imageUrl} 
            alt={listing.spaceId} 
            layout="fill" 
            objectFit="cover" 
            className="absolute inset-0" 
        />
    </div>
                            {listing.openForRent ? (
                            
                                <span className="text-xs font-medium uppercase px-2 py-1 text-white bg-dark rounded-full absolute top-3 left-2">
                                    FOR RENT
                                </span>
                            
                            ): 
                            (
                            
                                <span className="text-xs font-light uppercase px-2 py-1 text-white bg-red-700 rounded-full absolute top-3 left-2">
                                   Closed
                                </span>
                            
                            )
                            }

                            
                                <span className="text-xs font-medium uppercase px-2 py-1 text-dark bg-light rounded-full absolute top-3 left-24">
                                    {listing.viewCount} views
                                </span>
                              
                       

                        </div>
                        <div className="flex flex-col gap-2 p-4">
                            <div className="text-dark text-lg">{listing.spaceType}  {listing.spaceId}</div>
                            <div className="text-gray-500">{listing.floor}</div>
                            <div className='flex items-center justify-between'>
                            <div className="text-red-700 font-light">{listing.price}ETB</div>
                            <div className="flex items-center justify-between gap-1 text-gray-600 text-sm">
                                <span className='border-r pr-2'>📐 {listing.area} sq ft.</span>
                                <span className='border-r pr-2'>🛁 2</span>
                                <button className='p-1 px-4 bg-primary rounded-full text-dark hover:bg-dark hover:text-white'><Link href={`/listings/${listing.id}`}>View</Link></button>
                            </div>
                            </div>
                          
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-14">
                <Link href="/all-listings" className="bg-light text-dark  p-3 rounded-full font-light">
                    See All Listing →
                </Link>
            </div>
        </div>
    );
}
