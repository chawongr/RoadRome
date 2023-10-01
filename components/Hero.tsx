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
        <h1 className="flex justify-center 2xl:text-[72px] text-center sm:text-[55px] lg:pl-[600px] lg:pr-[600px] text-[50px] font-extrabold pt-[80px] pl-[200px] pr-[200px]">
          Exploring Your Automotive Dreams with RoadRome
        </h1>

        <p className="flex justify-center text-[22px] text-center text-black-100  pl-[250px] pr-[250px] pt-5">
          We make it possible for you to explore and choose your dream car with confidence
        </p>

        <div className="flex justify-center pt-[50px]">
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
