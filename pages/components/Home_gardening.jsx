import { useRouter } from 'next/navigation'
import React from 'react'

const Home_gardening = () => {

    const router = useRouter()

    return (
        <section className=''>

            <div className="hm_g_bg">

                <div className="w-full sm:max-w-[80%] mx-auto ">


                    <div className="grid sm:grid-cols-2 items-center gap-3 py-14">

                        <div className="">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/513e3e33-1e2c-466d-3310-0208e722dc00/public" alt="" className='w-3/4 mx-auto' />
                        </div>

                        <div className="">

                            <div className="fontPoppins text-white text-[1.5rem] sm:text-[2.3vw] uppercase sm:py-8 py-4 font-extrabold leading-tight px-2">
                                Revolutionize Home Gardening <span className="text-[#40c329]">with Plantify Food Sticks!</span>
                            </div>

                            <p className='text-lg sm:text-2xl fontNoto text-justify py-2 text-white px-2'>
                                अब आपके घर किसी भी प्रकार का पौधा हो उसे हरा-भरा रखकर घर की खूबसूरती बढ़ाने के लिए Plantify Food Stick का उपयोग करें। और अपने होम गार्डनिंग को चिंतामुक्त बनाएं, अभी आर्डर करे
                            </p>

                            <div className="mt-4 sm:text-left text-center">
                                <a href="#order-now">

                                    <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2rem]  font-semibold rounded hover:bg-green-700  " >
                                        ORDER NOW
                                    </button>
                                </a>
                            </div>

                        </div>

                    </div>


                    <div className="grid sm:grid-cols-12 items-center gap-3 text-center !justify-center sm:py-14 py-2  fontPoppins">

                        <div className="sm:col-span-4">
                            <div className="uppercase text-[#41c42a] text-4xl font-extrabold">
                                1 Stick
                            </div>
                            <p className='text-xl text-white'>Last upto 30 days</p>
                        </div>

                        <div className="sm:col-span-4 my-2 sm:my-0">
                            <div className="uppercase text-[#41c42a] text-4xl font-extrabold">
                                30 Days
                            </div>
                            <p className='text-xl text-white'>day and night protection</p>
                        </div>

                        <div className="sm:col-span-4">
                            <div className="uppercase text-[#41c42a] text-4xl font-extrabold">
                                40 Sticks
                            </div>
                            <p className='text-xl text-white'>Last more than other</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home_gardening