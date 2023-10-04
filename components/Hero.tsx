'use client'

import Image from "next/image"
import CustomButton from "./CustomButton"

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (

    <div className="">

      <div className="flex flex-col pt-[30px] ">
        <h1 className="flex justify-center text-center md:text-[45px] sm:pl-[50px] sm:pr-[50px] pt-[50px] text-[28px] font-bold pl-5 pr-5">
          Exploring Your Automotive Dreams with RoadRome
        </h1>

        <p className="flex justify-center text-[16px] text-center text-black-100 sm:text-[16px] sm:pl-[100px] sm:pr-[100px] md:text-[20px] pl-[50px] pr-[50px] pt-5">
          We make it possible for you to explore and choose your dream car with confidence
        </p>

        <div className="flex justify-center pt-9">
          <button onClick={handleScroll} className=" w-[150px] p-2  pl-4 pr-4 rounded-full text-white bg-black">
            Explore Cars
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Image src="/car.svg" alt="hero" width={800} height={800} />
      </div>

    </div>
  )
}

export default Hero
