import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Header = () => {


    const router = useRouter()

    return (
        <section className=''>


            <div className="bg-[#40c329] py-2">
            </div>

            {/* Desktop view */}
            <div className="relative sm:block hidden">
                <div className=" relative z-10">

                    <div className="w-full sm:max-w-[80%] mx-auto ">

                        <div className="grid sm:grid-cols-2 justify-center items-center sm:pb-[15%] sm:pt-[3%]">

                            <div className="">

                                <div className="fontBebas leading-none">

                                    <div className="text-[#41c42a] sm:text-[2.5vw] -tracking-tighter">
                                        PLANTIFY
                                    </div>

                                    <div className="font-bold text-black sm:text-[7vw] ">
                                        PLANT FOOD <span className="text-[#40c329]">
                                            STICK
                                        </span>
                                    </div>


                                </div>


                                <div className="">
                                    <p className="fontNoto text-[1.4vw] text-black font-extrabold">
                                        पौधों को मुरझाने से बचाएं, हरियाली बढ़ाएं
                                    </p>

                                    <p className="fontPoppins text-[1.2vw]  bg-white w-1/2 text-center text-black py-2 my-6 font-semibold rounded-md">
                                        1 STICK LAST 30 DAYS
                                    </p>

                                    <a href="#order-now">

                                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2vw] font-semibold rounded hover:bg-green-700 " >
                                            ORDER NOW
                                        </button>
                                    </a>
                                </div>



                            </div>

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/21372f05-513d-494c-a927-a0bd18e5a200/public" alt="" className='w-full mx-auto' loading='lazy' />

                        </div>




                    </div>

                </div>
                <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/44d23856-e370-4d69-31b5-506118cc4700/public" alt="pic" fill loading='lazy' className='' />
            </div>



            {/* Mobile View */}
            <div className="relative sm:hidden block">
                <div className=" relative z-10">

                    <div className="w-full">

                        <div className="pb-[22%] pt-[5%]">

                            <div className="text-center">

                                <div className="fontBebas leading-none">

                                    <div className="text-[#41c42a] text-3xl -tracking-tighter">
                                        PLANTIFY
                                    </div>

                                    <div className="font-bold text-black text-6xl ">
                                        PLANT FOOD <span className="text-[#40c329]"> STICK</span>
                                    </div>


                                </div>


                                <div className="">
                                    <p className="fontNoto text-xl text-black font-extrabold pt-3">
                                        पौधों को मुरझाने से बचाएं, हरियाली बढ़ाएं
                                    </p>

                                    <p className="fontPoppins text-md  bg-white  text-center text-black py-1 my-3 font-semibold rounded-md mx-10">
                                        1 STICK LAST 30 DAYS
                                    </p>


                                    <a href="#order-now">

                                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[4vw] font-semibold rounded hover:bg-green-700 " >
                                            ORDER NOW
                                        </button>
                                    </a>
                                </div>



                            </div>

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/21372f05-513d-494c-a927-a0bd18e5a200/public" alt="" className='w-full mx-auto' loading='lazy' />

                        </div>




                    </div>

                </div>

                <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f90b6ef1-25a8-4649-c3e4-cd3acc00e400/public" alt="pic" fill loading='lazy' className='' />
            </div>

        </section >
    )
}

export default Header