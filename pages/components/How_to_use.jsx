import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React from 'react'


const ProductSelection = dynamic(() => import('../commonUse/ProductSelection/SelectProduct'), {
    loading: () => <p>load</p>
});

const How_to_use = () => {

    const router = useRouter()

    const cellClass = "px-2 py-4 text-left  border border-solid border-black   text-gray-600 fontPoppins";
    const headerClass = "px-2 py-4 text-left font-medium text-gray-600 border border-solid border-black fontPoppins";



    const how_to_use_sticks = (arr) => {
        return arr?.map((e, key) => {
            return <div className='grid grid-cols-12 gap-4 py-2 px-2  items-center' key={key}>
                <div className="col-span-5 sm:col-span-3">
                    <img src={e.img} className="w-3/4 mx-auto" alt="" />
                </div>

                <div className='col-span-7 sm:col-span-9 fontNoto md:text-3xl text-xl font-bold '>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>

            </div >
        })
    }

    return (
        <section className=''>

            <div className="bg-white">

                <div className="w-full sm:max-w-[80%] mx-auto ">


                    <ProductSelection />

                    <div className=" grid sm:grid-cols-12 items-center justify-center sm:py-10 py-2 gap-3">

                        <div className="col-span-7">
                            <div className="fontPoppins text-black text-[2rem] sm:text-[2.3vw] uppercase sm:py-8 py-7  text-center font-extrabold leading-tight px-2">
                                How to <span className="text-[#40c329]">Use:</span>
                            </div>

                            <p className='text-lg sm:text-2xl fontNoto py-3 text-center px-2'>
                                इसका उपयोग बहुत ही सरल है जो आपकी होम गार्डनिंग को आसान बनाता है।
                            </p>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a3b33f0a-b6c5-4409-43c6-374744286f00/public" alt="" className='w-3/4 sm:w-1/2 mx-auto' />



                        </div>



                        <div className="col-span-5">
                            <div className="fontPoppins uppercase text-black text-[1.5rem] sm:text-[1.7vw] py-2 text-center sm:text-left font-semibold">
                                3 easy steps to use
                            </div>
                            {
                                how_to_use_sticks([
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0c0e0cee-edf4-451f-4aee-59cd91e58b00/public",
                                        title: "गमले का आकार देखें"
                                    },
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9f6838e5-b63a-4157-992c-30dfa6d50100/public",
                                        title: " साइज के हिसाब से स्टिक गमले में गाड़े  "
                                    },
                                    {
                                        img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/99c7abcf-05e4-48e9-7f11-80d6c8cf5300/public",
                                        title: " हमेशा की तरह थोड़ा पानी डालें  "
                                    },
                                ])
                            }
                        </div>

                    </div>
                    <div className="my-4 text-center">
                        <a href="#order-now">

                            <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2rem]  font-semibold rounded hover:bg-green-700  " >
                                ORDER NOW
                            </button>
                        </a>
                    </div>

                </div>
            </div>


            <div className="bg-green-700">

                <div className="w-full sm:max-w-[80%] mx-auto sm:py-10 pb-8">

                    <div className="sm:py-3 py-1 fontNoto text-white text-2xl sm:text-[2vw] leading-tight">

                        <div className=" pt-5 sm:pt-2 uppercase   text-center leading-tight">
                            नीचे गमले के साइज के आधार पर <span className='fontPoppins font-semibold' >"Plantify Food Stick"</span>
                        </div>
                        <p className="mt-2  text-center">उपयोग करने की विधि बताई गयी है।</p>

                    </div>
                    <div className="w-full sm:max-w-[70%] mx-auto ">


                        <div className="mx-1 py-5">
                            <table className="w-full bg-white border-collapse  border-dashed border-black">
                                <thead>
                                    <tr className="">
                                        <th className={headerClass}>Pot Diameter</th>
                                        <th className={headerClass}>4 inch</th>
                                        <th className={headerClass}>6 inch</th>
                                        <th className={headerClass}>8 inch</th>
                                        <th className={headerClass}>10 inch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-gray-200'>
                                        <td className={cellClass}>No. of Stick to Insert</td>
                                        <td className={cellClass}>1 stick</td>
                                        <td className={cellClass}>2 sticks</td>
                                        <td className={cellClass}>4 sticks</td>
                                        <td className={cellClass}>6 sticks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>

            </div>

        </section >
    )
}

export default How_to_use