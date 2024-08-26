import Link from "next/link";

export default function AboutSection (){
    return(
     <div className="bg-primary mx-auto flex justify-around py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-72 gap-6">
        <div className="flex justify-start gap-3">
        <p className="border border-dark p-1 rounded-full">logo</p>
        <h4 className="text-dark text-xl font-bold">Ambassador Mall</h4>
        </div>
        <div className="flex flex-col gap-3">
            <p className="font-light text-gray-400 text-sm">
            Tucked in the historical and the current, the Ambassador Mall building is
             easily recognizable through its rectangular volume, white stripes, and floating eave.
            </p>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                <p>30+</p>
                <p className="text-sm text-gray-500">Years</p>
                </div>
                <div className="text-center">
                <Link href="/all-listings" className="bg-light text-dark  p-2 text-sm rounded-full font-light">
                    About →
                </Link>
                </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col w-72 gap-6">
        <div className="flex justify-start items-center gap-3">
        <p className="border border-dark p-1 rounded-full">logo</p>
        <h4 className="text-dark text-md font-bold">XP Property Management</h4>
        </div>
        <div className="flex flex-col gap-3">
            <p className="font-light text-gray-400 text-sm">
            Tucked in the historical and the current, the Ambassador Mall building is
             easily recognizable through its rectangular volume, white stripes, and floating eave.
            </p>
          
        </div>
      </div>
       
    </div>
    );
}