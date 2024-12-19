import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React from 'react'


const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});

const Story = () => {

    const router = useRouter()

    const plants_issue_points = (arr) => {
        return arr?.map((e, key) => {
            return <div className='sm:py-10 py-4' key={key}>
                <div className="">
                    <img src={e.img} className="sm:w-3/4 w-[90%] mx-auto" alt="" />
                </div>
                <div className='fontNoto pt-3 sm:pt-6  sm:text-2xl text-xl font-extrabold text-center text-black'>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>
            </div >
        })
    }



    return (
        <section>

            <div className="w-full sm:max-w-[80%] mx-auto ">


                <div className="sm:grid sm:grid-cols-2 items-center justify-center sm:py-20 py-8 px-2">


                    <div className="">
                        <YoutubeFrame vid='a8PDMeiKOwE' className="py-5" />
                    </div>


                    <div className="fontPoppins">

                        <div className="font-bold text-black text-3xl sm:text-[3vw] uppercase sm:py-4 pt-5 sm:text-left text-center">
                            About <span className="text-[#40c329]">Food stick</span>
                        </div>

                        <p className='text-lg sm:text-2xl fontNoto py-3 text-justify'>
                            प्लांटिफाई फ़ूड स्टिक एक जेनरिक और प्राकृतिक प्लांट बूस्टर फार्मूलेशन है। यह आज के समय में हर उस घर की जरुरत है जिस घर में पौधों से प्यार करने वाले लोग रहते है। बात इनडोर की हो या आउटडोर की यह आपके गार्डनिंग को 99% तक आसान बना देता है। सिर्फ एक स्टिक में आपका मुरझाया पौधा भी हरा भरा हो जायेगा।
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


                <div className="fontNoto text-black text-4xl sm:text-[2.3vw] uppercase sm:py-4  text-center font-extrabold leading-tight">
                    पौधों के इन समस्याओं <span className="text-[#40c329]"><br />में उपयोगी </span>
                </div>


                <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 justify-center items-center">
                    {
                        plants_issue_points([
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/543566a0-c382-41b7-03f6-f1a420bb3700/public",
                                title: "पौधों की वृद्धि एवं विकास न होना "
                            },
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2d692196-3ef8-4184-4f5c-78ac72770700/public",
                                title: "पत्तो का मुरझाना या पीला पड़ना"
                            },
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ed9aa72c-616e-4ca7-31a3-f4983b190c00/public",
                                title: "जड़ में सड़न या कीड़े लगना"
                            },
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/16c6819a-3e81-4cef-5e6d-ae659ba9cc00/public ",
                                title: "चूर्णिल फुफुन्द रोग लगना"
                            }
                        ])
                    }
                </div>
                <div className="w-full sm:max-w-[70%] mx-auto ">
                    <p className='text-lg sm:text-2xl fontNoto sm:py-6 py-2 sm:text-center text-justify px-2    '>
                        देखें, अगर आप घर के अंदर, घर के बाहर या घर की छत पर गमलों में फूल उगाते है पर आपके पौधे विकसित नहीं हो रहे, पत्तियों में पीलापन लग रहा है या मुरझा कर गिर रहे तो निराश न हो बल्कि सही उपाय आजमाएं। पौधों में हरियाली बरकरार रखने के लिए पोषक तत्वों की जरुरत पड़ती है जिन्हे Plantify Food Stick के इस्तेमाल से आसानी से पूरा किया जा सकता है।
                    </p>
                </div>

                <div className="fontPoppins font-bold text-black text-3xl sm:text-[2.3vw] uppercase sm:py-7 pt-5 pb-2 text-center">
                    Key benifits of <span className="text-[#40c329]">Plantify Food Stick</span>
                </div>


                <div className="grid sm:grid-cols-4 grid-cols-2 gap-3 justify-center items-center">
                    {
                        plants_issue_points([
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c64c3bce-4f90-4c2b-942e-ca996b204000/public",
                                title: "मुरझाये पौधों को पुनर्जीवित करता है"
                            },
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a83dae53-2d5e-4c56-a744-4188c429f200/public",
                                title: "पौधों को रोगमुक्त रखने में मदद करता है "
                            },
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2dd14387-730e-4804-5dab-a1d73a729e00/public",
                                title: "पौधों के विकास में मदद करता है "
                            },
                            {
                                img: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/aa7a3a4c-2e0a-4ab1-9e32-6b28245dcd00/public",
                                title: "पौधों को हरा-भरा व स्वस्थ रखता है "
                            }
                        ])
                    }
                </div>

                <div className="my-4 text-center">
                    <a href="#order-now">

                        <button className="fontPoppins px-8 py-2 bg-[#41c42a] text-white text-[1.2rem]  font-semibold rounded hover:bg-green-700  " >
                            ORDER NOW
                        </button>
                    </a>
                </div>

            </div>


            <div className="bg-gray-100">


                <div className="w-full sm:max-w-[80%] mx-auto py-3 ">

                    <div className="fontPoppins text-black text-2xl sm:text-[2.3vw] uppercase sm:py-6 pt-5  text-center font-extrabold leading-tight px-2">
                        Fulfill all your plant's needs <span className="text-[#40c329]">in just 1 stick!</span>
                    </div>


                    <div className="w-full sm:max-w-[70%] mx-auto py-3 px-1">


                        <p className='text-lg sm:text-2xl fontNoto py-3 sm:text-center text-justify'>
                            दरअसल, पौधों को स्वस्थ व हरा भरा रखने के लिए मैक्रो न्यूट्रिएंट्स की जरुरत पड़ती है। जैसे इंसान में पोषक तत्वों की कमी होने से रोग लगने लगते है वैसे ही पौधों में भी पोषक तत्वों की कमी होने से पत्तियों में पीलापन, म्लानि(मुरझा) या चूर्णिल फुफुन्द जैसे सूखाने वाले रोग लग जाता है।
                        </p>

                    </div>


                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6fa8f1f0-575a-42e3-a45f-33fa66a32400/public" alt="" className='w-full sm:block hidden' />
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1f748483-a41a-4f92-b357-36c99277d200/public" alt="" className='w-full sm:hidden block' />
            </div>
        </section >
    )
}

export default Story