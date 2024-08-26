import ListingsSection from "@/app/components/ListingsSection";

export default function Listing({params}: {params: any}) {
    return (
        <div className="container mx-auto py-12 my-14">
             <div className='flex flex-col mb-8'>
          <h3 className='text-2xl text-dark font-semibold text-center'>
            All Listings
          </h3>
          <p className="text-gray-400 font-extralight text-center mb-6">Browse through our wide range of choice</p>
        </div>
            <ListingsSection/>
        </div>
    );
}