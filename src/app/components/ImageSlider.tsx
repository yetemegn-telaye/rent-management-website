import { useState } from "react";
import Image from "next/image";
import officeImg1 from "../public/images/office1.webp";
import officeImg2 from "../public/images/office2.jpg";


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    officeImg1,
    officeImg2,

  ];

  const handlePrevClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
    <Image
        src={images[currentIndex]}
        alt="Office Example"
        width={800}
        height={200}
        className="rounded-xl"
    />
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 cursor-pointer"
        onClick={handlePrevClick}
      >
        &lt;
      </div>
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 cursor-pointer"
        onClick={handleNextClick}
      >
        &gt;
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-secondary' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
