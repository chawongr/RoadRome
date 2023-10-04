'use client'

import { useState } from "react";

import Image from "next/image";

import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Link from "next/link";


const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (

        <div className="relative w-full max-w-[1490px] flex items-center justify-between pt-7 mx-auto px-10">
            <Image src="/carLogo.svg" width={100} height={100} alt="" className="" />

            <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">
                <Link href="/">Home</Link>
                <Link href="/catalogue">Catalogue</Link>
            </ul>
            <button type="button" className="text-gray-950 hover:text-white border-2 border-gray-950 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-950 dark:hover:text-white dark:hover:bg-gray-950 dark:focus:ring-gray-800">Sign In</button>

            <HiMenuAlt3
                size={30}
                className="block md:hidden cursor-pointer text-black"
                onClick={() => setShowMobileMenu((prev) => !prev)}
            />
            <div
                className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[410px]" : "top-0"
                    } left-0 bg-[#dde0e5] h-[410] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
            >
                <AiOutlineClose
                    size={25}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => setShowMobileMenu(false)}
                />

                <ul className="pt-[60px] items-center flex flex-col gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/catalogue">Catalogue</Link>
                </ul>

            </div>
            {/* </BrowserRouter> */}
        </div>

    );
};

export default Navbar;
