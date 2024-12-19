import Link from 'next/link';
import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
    return (
        <div className='sm:bg-[#d1ffce] px-1 sm:px-4 py-2 fontPoppins'>

            <div className='sm:px-8 p-2 bg-[#fafff9] rounded-md md:rounded-full w-full sm:w-[70vw] mx-auto shadow-xl flex justify-between'>
                <div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/87b479ae-e446-4349-4c91-3cec1af86100/public" alt="asd" loading='eager' decoding='async' className='w-[100px] py-2 ' />
                </div>

                <div className='gap-3 sm:flex items-center text-green-900 font-semibold hidden '>

                    <div className='px-3 shadow-sm rounded-xl shadow-[grey] bg-white'>
                        <Link href={"/checkout"}> HOME</Link>
                    </div>

                    <div className='px-3 shadow-sm rounded-xl shadow-[grey] bg-white'>
                        <Link href={"/checkout"}>ABOUT</Link>
                    </div>

                    <div className='px-3 shadow-sm rounded-xl shadow-[grey] bg-white'>
                        <Link href={"/checkout"}>CONTACT</Link>
                    </div>

                </div>
                <div className='block sm:hidden'>
                    <a href="/checkout" >
                        <div className='px-3 block sm:hidden'>
                            <CiMenuBurger size={30} />
                        </div>
                    </a>
                </div>


            </div>

        </div>
    )
}

export default Header