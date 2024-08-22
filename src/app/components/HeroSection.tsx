"use client";
import Image from "next/image";
import heroImage from "../public/ambassador2.webp";
import Navbar from "./Navbar";



export default function HeroSection() {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    alt="Ambassador Mall"
                />
            </div>
            <div className="relative bg-black bg-opacity-50">
                <Navbar />
                <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen">
                <button className="border text-white font-light text-sm px-4 py-1 sm:text-sm sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-full mb-10">
                            Let Us Grow Together
                    </button>
                    <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">
                        Find your ideal working space
                    </h1>
                    <p className="text-white text-sm md:max-w-md mx-auto mb-3 md:mb-6">
                        Find Listings to rent at Ambassador
                    </p>
                    <div className="space-x-2 md:space-x-4">
                        <button className="bg-gray-400 bg-opacity-40 text-white font-light text-sm px-4 py-1 sm:text-sm sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-lg">
                            Office
                        </button>
                        <button className="bg-gray-400 bg-opacity-40 text-white  font-light text-sm px-4 py-1 sm:text-sm sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-lg">
                            Commercial
                        </button>
                        <button className="bg-gray-400 bg-opacity-40 text-white font-light text-sm px-4 py-1 sm:text-sm sm:px-4 sm:py-1.5 md:px-6 md:py-2 rounded-lg">
                            Storage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
