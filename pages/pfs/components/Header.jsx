import React from 'react'

const Header = () => {
    return (
        <section>

            <div className='w-full fontPoppins'>



                <div className=" py-3 text-center md:text-lg text-[0.8rem]">
                    Struggling with houseplants? Get a free plant care guide&gt;
                </div>


                <div className="flex items-center justify-center gap-8 bg-[#2a9265] text-white py-2">
                    <a href="#home" className="">Home</a>
                    <a href="#blog" className="">Blog</a>
                    <a href="#about" className="">About</a>
                    <a href="#shop" className="">Shop</a>
                </div>

                <div className="relative ">
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/30b424c2-4d85-40a5-f7aa-cbb043c24100/public"
                        alt="Houseplants"
                        className="w-full sm:block hidden"
                    />
                    <img
                        src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c40ff47e-5fdb-44dd-4ce3-b0bc7f74d200/public"
                        alt="Houseplants"
                        className="w-full  h-[34vh] sm:hidden block"
                    />

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/35 ">
                        <div className="fontJosefin sm:text-3xl text-[1rem] px-2">
                            Welcome to the houseplant & plant care blog
                        </div>
                        <div className="fontAbril uppercase sm:text-5xl text-4xl mt-2">
                            healthy plants
                        </div>
                        <div className="fontAbril uppercase sm:text-4xl text-3xl mt-1">
                            happy homes
                        </div>
                    </div>
                </div>



            </div>


        </section>
    )
}

export default Header