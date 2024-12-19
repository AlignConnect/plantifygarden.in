import dynamic from 'next/dynamic'
import React from 'react'

const Youtubframe = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>Loading</p>
})


const You = () => {
    return (
        <section>

            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e89625b2-face-4e2c-1a02-a0441bb3b900/public)] py-4 sm:py-10 w-full bg-green-300'>

                {/* <div className='w-[98%] sm:w-[50vw
                ] mx-auto rounded-2xl '>
                    <Youtubframe vid={"eL6MO-iZ5nk"} />
                </div> */}

                {/* https://cdn.shopify.com/videos/c/o/v/5ced6bb87bbc49bd9411d8c324a008a7.mp4 */}

                <video controls className='w-[340px] sm:w-[800px] mx-auto rounded-lg'>

                    <source src='https://cdn.shopify.com/videos/c/o/v/5ced6bb87bbc49bd9411d8c324a008a7.mp4'
                        type='video/mp4'
                    />

                </video>

                <div className='bg-[#fff500] w-[180px] py-2 mt-5 md:mt-10 text-lg font-bold fontPoppins px-2 mx-auto text-center'>

                    <a href="#order-now">

                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2vw] font-semibold rounded hover:bg-green-700 " >
                            ORDER NOW
                        </button>
                    </a>
                </div>


            </div>

            <div className='w-full'>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6aefc367-2c00-467a-9ffb-833b1cfb5e00/public" alt="asd" loading='eager' className='w-full sm:w-[100%] sm:h-[100vh] mx-auto py-3' />
            </div>


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ea76ce71-812a-46cd-cfd2-62cd2620af00/public)] bg-no-repeat bg-cover' >

                <div className='grid grid-cols-4 items-center px-2 py-5 sm:w-[60%] mx-auto'>

                    <div className='col-span-4 sm:col-span-2 order-2 sm:order-1 p-2'>
                        <p className='text-lg sm:text-3xl py-3 font-semibold'>
                            <span className='font-bold'>Plantify Food Stick</span>  एक जेनरिक और प्राकृतिक प्लांट बूस्टर फार्मूलेशन है। यह आज के समय में हर उस घर की जरुरत है जिस घर में पौधों से प्यार करने वाले लोग रहते है। बात इनडोर की हो या आउटडोर की यह आपके गार्डनिंग को 99% तक आसान बना देता है। सिर्फ एक स्टिक में आपका मुरझाया पौधा भी हरा भरा हो जायेगा।
                        </p>
                    </div>

                    <div className='col-span-4 sm:col-span-2 order-1 sm:order-2 text-center'>


                        <h3 className='font-bold bg-[#fff500] fontPoppins inline-block px-4 py-2 my-3 text-2xl'>ABOUT FOOD <span className='text-black'>STICK</span></h3>


                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/03b3978b-d68b-4004-ae2f-84ad6092c500/public" alt="dsfsdf" loading='lazy' className='w-[60%] mx-auto' />

                    </div>


                </div>

                <div className='text-center shadow-md'>

                    <a href="#order-now">

                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2vw] font-semibold rounded hover:bg-green-700 " >
                            ORDER NOW
                        </button>
                    </a>
                </div>

            </div>



        </section>
    )
}

export default You