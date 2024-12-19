import React from 'react'

const Sec3 = () => {


    const ReviewCard = ({ image, name, rating, title, review }) => {
        return (
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-4 h-full">
                <div className="flex justify-center">
                    <img
                        className="w-20 h-20 rounded-full border-2 border-green-400"
                        src={image}
                        alt={`${name} profile`}
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <div className="flex justify-center mt-2">
                        {[...Array(rating)].map((_, i) => (
                            <svg
                                key={i}
                                className="w-5 h-5 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.982a1 1 0 00.95.69h4.174c.969 0 1.371 1.24.588 1.81l-3.374 2.455a1 1 0 00-.364 1.118l1.287 3.982c.3.922-.755 1.688-1.538 1.118L10 13.187l-3.374 2.455c-.783.57-1.838-.196-1.538-1.118l1.287-3.982a1 1 0 00-.364-1.118L2.637 9.409c-.783-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.982z" />
                            </svg>
                        ))}
                    </div>
                    <p className="font-semibold text-lg mt-2">{title}</p>
                    <p className="text-gray-600 mt-2">{review}</p>
                </div>
            </div>
        );
    };


    return (
        <section >

            <div className='bg-[#c8ffd8] p-5'>

                <div className='s-full sm:w-[70%] mx-auto grid grid-cols-9 border-2 border-green-600 border-dotted sm:h-[650px] p-5'>



                    <div className='col-span-9 sm:col-span-4'>

                        <div className='flex items-center gap-3'>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e96d7b02-f3d8-49b6-fc77-f542ff007b00/public" alt="asdasd" loading='lazy' className='w-[100px]' />
                            </div>




                            <div className='font-bold fontPoppins text-xl'>
                                HOW TO USE
                            </div>
                        </div>

                        <div className='py-4 font-bold text-2xl ps-5'>
                            <p>इसका उपयोग बहुत ही सरल है  </p>
                            <p className='text-[#1c772e]'>जो आपकी होम गार्डनिंग को आसान बनाता है। </p>
                        </div>

                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/502d705e-a5ed-422c-168b-487ed2b43e00/public" alt="dasd" loading='lazy' className='w-[420px]  mx-auto' />
                        </div>


                    </div>



                    <div className='col-span-9 sm:col-span-5'>


                        <p className='text-[#225c2e] fontPoppins font-bold text-5xl sm:text-5xl py-2 tracking-wide'>3 EASY</p>
                        <p className='text-[#225c2e] fontPoppins font-bold text-4xl sm:text-5xl sm:ps-10 tracking-[2px]'>STEPS TO USE</p>


                        <div className='py-1 hidden sm:block'>
                            <div className='flex items-center gap-3 py-2'>
                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c398a3bd-dd7a-49df-698f-bedccacb4800/public" alt="dassd" loading='lazy' className='w-[100px] sm:w-[150px]' />
                                </div>

                                <div>
                                    <p className='font-bold text-2xl'>गमले का आकार देखें </p>
                                </div>
                            </div>


                            <div className='flex items-center gap-3 py-2 sm:ps-[160px] sm:relative -top-16'>
                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c37f9d3b-08d7-4d9a-55aa-b3d7a2cbf900/public" alt="dassd" loading='lazy' className='w-[190px] sm:w-[150px]' />
                                </div>

                                <div>
                                    <p className='font-bold text-2xl'>साइज के हिसाब से स्टिक गमले में गाड़े  </p>
                                </div>
                            </div>


                            <div className='flex items-center gap-3 py-2 sm:ps-[320px] sm:relative -top-36'>
                                <div>
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b87ba0e6-a4bf-4f8e-575a-85ab4e8a0900/public" alt="dassd" loading='lazy' className='w-[150px]' />
                                </div>

                                <div>
                                    <p className='font-bold text-2xl'>हमेशा की तरह थोड़ा पानी डालें  </p>
                                </div>
                            </div>

                        </div>


                        <div className='grid sm:hidden grid-cols-5 items-center py-3'>

                            <div className='col-span-2'>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c398a3bd-dd7a-49df-698f-bedccacb4800/public" alt="dassd" loading='lazy' className='w-[100px] sm:w-[150px]' />
                            </div>

                            <div className='col-span-3'>
                                <p className='font-bold text-2xl'>गमले का आकार देखें </p>
                            </div>


                            <div className='col-span-2 my-4'>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c37f9d3b-08d7-4d9a-55aa-b3d7a2cbf900/public" alt="dassd" loading='lazy' className='w-[100px] sm:w-[150px]' />
                            </div>

                            <div className='col-span-3'>
                                <p className='font-bold text-2xl'>साइज के हिसाब से स्टिक गमले में गाड़े </p>
                            </div>



                            <div className='col-span-2'>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b87ba0e6-a4bf-4f8e-575a-85ab4e8a0900/public" alt="dassd" loading='lazy' className='w-[100px] sm:w-[150px]' />
                            </div>

                            <div className='col-span-3'>
                                <p className='font-bold text-2xl'>हमेशा की तरह थोड़ा पानी डालें  </p>
                            </div>

                        </div>




                    </div>
                </div>

                <div className='text-center '>

                    <a href="#order-now">

                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2vw] font-semibold rounded hover:bg-green-700 " >
                            ORDER NOW
                        </button>
                    </a>
                </div>


                <div className='bg-black text-white'>

                    <h1 className='pt-3 text-2xl text-center font-bold'>निचे गमले के साइज के आधार पर <span className='text-[#24ff00]'>Plantify Food Stick</span> उपयोग करने की विधि बताई गयी है।
                    </h1>



                    <div className='py-5  w-full'>
                        <table className='bg-white text-black  mx-auto rounded-3xl overflow-hidden '>

                            <tbody className='w-full'>
                                <tr>
                                    <td className='border-collapse border-2 border-black p-4 sm:p-5 font-bold'>गमले का आकार:  <p className=''>(Size)</p> </td>
                                    <td className='border-collapse border-2 border-black p-4 sm:p-5'>4  <span className='hidden sm:inline'>Size</span> </td>
                                    <td className='border-collapse border-2 border-black p-4 sm:p-5'>6  <span className='hidden sm:inline'>Size</span> </td>
                                    <td className='border-collapse border-2 border-black p-4 sm:p-5'>8  <span className='hidden sm:inline'>Size</span> </td>
                                    <td className='border-collapse border-2 border-black p-4 sm:p-5'>10  <span className='hidden sm:inline'>Size</span> </td>

                                </tr>

                                <tr>

                                    <td className='border-collapse border-2 border-black p-3 sm:p-5 font-bold'>स्टिक की मात्रा  <p className=''>(Stick)</p> </td>
                                    <td className='border-collapse border-2 border-black p-3 sm:p-5'>1 <span className='hidden sm:inline'>Stick</span> </td>
                                    <td className='border-collapse border-2 border-black p-3 sm:p-5'>2  <span className='hidden sm:inline'>Stick</span> </td>
                                    <td className='border-collapse border-2 border-black p-3 sm:p-5'>4  <span className='hidden sm:inline'>Stick</span> </td>
                                    <td className='border-collapse border-2 border-black p-3 sm:p-5'>6  <span className='hidden sm:inline'>Stick</span> </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>









            </div>

            <div className=''>
                <h1 className='py-5 font-bold text-center fontPoppins text-xl'>Customer Reviews</h1>
            </div>


            <div className=" bg-blue-50 px-4 sm:px-8 py-4 flex justify-center gap-4">




                <div className='  grid grid-cols-8 justify-center gap-4'>
                    <div className='col-span-8 sm:col-span-2 border '>
                        <ReviewCard
                            image="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c5e1b2a0-4397-42e3-4540-8164bb341100/public"
                            name="Pooja"
                            rating={5}
                            title="Best indoor plant solution"
                            review="I received this pack and used it on my plants last week. Such a good sign of change is visible. Plants are blooming and flowering, happy with the magic."
                        />
                    </div>

                    <div className='col-span-8 sm:col-span-2 border'>
                        <ReviewCard
                            image="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5a0a729f-2e34-40bb-69db-15e83dc39500/public"
                            name="Ritu Dimri"
                            rating={5}
                            title="Very useful"
                            review="Humne ye 1 mahine pehle mgvaya tha aur bohot acchi condition mein deliver hua aur vo bhi in time. Mere indoor plant ke liye bohot useful raha ab hume kahi bahar jana hota hai to chinta nahi krni pdti."
                        />


                    </div>

                    <div className='text-center  col-span-8 sm:hidden'>

                        <a href="#order-now">

                            <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2vw] font-semibold rounded hover:bg-green-700 " >
                                ORDER NOW
                            </button>
                        </a>
                    </div>

                    <div className='col-span-8 sm:col-span-2 border'>
                        <ReviewCard
                            image="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1bf804b4-c008-4904-0e5b-b603398d7100/public"
                            name="Mishka"
                            rating={5}
                            title="Very happy with the results"
                            review="Honestly this is the best plant care product so easy to use and also affordable too. After applying this stick my garden plants look so green and vibrant."
                        />
                    </div>
                    <div className='col-span-8 sm:col-span-2 border'>
                        <ReviewCard
                            image="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2dad5b3a-4027-4880-dc03-300599057a00/public"
                            name="Nikita Sharma"
                            rating={5}
                            title="Good Result"
                            review="Very nice sticks, after using them my roses bloom beautifully and night jasmine has a great fragrance throughout the house."
                        />


                    </div>
                </div>
            </div>


            <div className="bg-green-200 pt-4 mx-auto   bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ff132a1f-3d6a-41fd-82aa-dddd3ca56700/public)]">
                <div className='w-full sm:w-[760px] mx-auto bg-[#164413a4] p-4 my-5'>
                    <div className='p-2 border-dotted border-2'>
                        <div className="grid grid-cols-7 items-center text-center ">
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/03b3978b-d68b-4004-ae2f-84ad6092c500/public" alt="Plantify Food Sticks" className="col-span-7 sm:col-span-3 w-[80%] mx-auto p-8 bg-[#027f17] rounded-xl" />
                            <div className='col-span-7 sm:col-span-4'>
                                <h1 className="text-2xl font-bold text-white p-2 text-start fontPoppins">Revolutionize Home Gardening with <span className='text-[#23fb01]'> Plantify Food Sticks! </span></h1>
                                <p className=" mt-2 text-white text-start">
                                    अब आपके घर किसी भी प्रकार का पौधा हो उसे हरा-भरा रखकर घर की खूबसूरती बढ़ाने के लिए Plantify Food Stick का उपयोग करें। और अपने होम गार्डनिंग को चिंतामुक्त बनाएं, अभी आर्डर करे !
                                </p>


                                <div className="mt-4 text-center">
                                    <a href="#order-now">

                                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2rem]  font-semibold rounded hover:bg-green-700  " >
                                            ORDER NOW
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


                <div className='bg-[#00000088] py-3'>

                    <div className='flex justify-evenly items-center fontPoppins font-semibold text-center'>

                        <div>
                            <h1 className='text-[#23fb01]'>1 STICK</h1>
                            <p className='text-white'>LAST UPTO 30 DAYS</p>
                        </div>


                        <div>
                            <h1 className='text-[#23fb01]'>30 DAYS</h1>
                            <p className='text-white'>DAY AND NIGHT PROTECTION</p>
                        </div>

                        <div>
                            <h1 className='text-[#23fb01]'>40 STICKS</h1>
                            <p className='text-white'>LAST MORE THEN OTHER</p>
                        </div>

                    </div>

                </div>



            </div>

            {/* https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/03b3978b-d68b-4004-ae2f-84ad6092c500/public */}
        </section >

    )
}

export default Sec3