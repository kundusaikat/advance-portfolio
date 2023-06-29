import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const SlidingImage = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [currentIndex, data.length, isHovered]);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div
        className="relative w-64 h-64 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="h-full flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        {isHovered && (
          <>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-l rounded-e-full"
              onClick={previousImage}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-r rounded-s-full"
              onClick={nextImage}
            >
               <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </>
        )}

        <div className="flex mt-2 absolute bottom-2 w-full m-auto">
          <div className="flex justify-center items-center m-auto gap-2">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-3 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-gray-500" : "bg-gray-300"
                }`}
                style={{
                  transition: "background-color 0.5s ease-in-out",
                  backgroundColor:
                    index === currentIndex ? "#4F46E5" : "#D1D5DB",
                }}
                onClick={() => handleIndicatorClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
