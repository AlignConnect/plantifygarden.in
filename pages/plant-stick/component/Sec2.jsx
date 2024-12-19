import dynamic from 'next/dynamic';
import Link from 'next/link'
import React from 'react'


const ProductSelection = dynamic(() => import('../../commonUse/ProductSelection/SelectProduct'), {
    loading: () => <p>load</p>
});


const Sec2 = () => {
    return (

        <div className='relative bg-[#f0f0f0]'>



            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/29ee856a-b9e2-4190-d114-112eddac9e00/public)] bg-cover bg-no-repeat bg-center min-h-[400px] sm:min-h-[800px] flex flex-col justify-around items-center'>


                <div className='w-[95%] sm:w-[40%] mx-auto py-5'>

                    <h1 className='fontPoppins font-bold text-lg sm:text-4xl text-white  border-2 rounded-bl-[40px] rounded-br-[40px] sm:px-7 sm:py-5 text-center'>FULFILL ALL
                        <span className='text-[#3cfc01] '> YOUR PLANT'S NEEDS IN JUST 1 STICK</span>
                    </h1>

                </div>

                <div className='px-2 text-white text-center text-lg sm:text-3xl sm:w-[40%] mx-auto'>
                    <p>
                        दरअसल, पौधों को स्वस्थ व <span className='text-[#3cfc01]'> हरा भरा</span> रखने के लिए <span className='text-[#3cfc01]'> मैक्रो न्यूट्रिएंट्स </span> की जरुरत पड़ती है। जैसे इंसान में पोषक तत्वों की कमी होने से रोग लगने लगते है वैसे ही पौधों में भी पोषक तत्वों की कमी होने से पत्तियों में <span className='text-[#3cfc01]'> पीलापन, म्लानि (मुरझा) </span> या चूर्णिल <span className='text-[#3cfc01]'> फुफुन्द </span> जैसे सूखाने वाले रोग लग जाता है।

                    </p>
                </div>


            </div>

            <ProductSelection />
            


            <div className='bg-[url(https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/933c2a5c-b63f-45fc-1892-3c77bb80bc00/public)] bg-cover bg-no-repeat min-h-[500px] grid grid-cols-9 justify-between items-center w-full sm:w-[80%] mx-auto my-3 rounded-xl '>

                <div className='col-span-9 sm:col-span-5 sm:w-[90%]'>

                    <div className='text-white text-[30px] font-semibold sm:text-5xl fontPoppins text-center p-3' style={{ textShadow: "2px 6px black" }}>
                        Trusted By   <br /> <span className='text-[#3bff00]'>Happy  Plant Parents</span>
                    </div>

                    <div className='text-center relative top-10 hidden sm:block'>
                        <Link href={"/checkout"} className='z-10 bg-slate-50 vb fontPoppins px-5 py-2 rounded-sm font-semibold absolute top-0 left-[50] transform translate-x-[-50%]'>Order Now</Link>
                    </div>

                </div>


                <div className='col-span-9 sm:col-span-4'>

                    <div className='grid grid-cols-4 items-center gap-10 w-[100%] ms-auto sm:relative top-16 p-3'>

                        <div className='col-span-2 my-3'>

                            {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8585dfe8-36bd-43ea-4da0-c4e6e4c99b00/public" alt="asd" loading='lazy' className='w-[250px]  scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl' /> */}

                            <video width="200" height="140" poster='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5768f19f-b5c8-456c-8868-23f5d1c38700/public' muted loop autoPlay className='z-10 scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl'>
                                <source src="https://cdn.shopify.com/videos/c/o/v/6d139cebb7d549a9baa5993763c402a9.mp4" type="video/mp4" />
                            </video>


                        </div>

                        <div className='col-span-2 my-3 ' >

                            {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b695a2fc-9ec1-497d-02cc-4a2b6cd81d00/public" alt="asd" loading='lazy' className='w-[250px]  scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl' /> */}
                            <video width="200" height="140" poster='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/88026092-64d2-4f66-ba35-3c323e891400/public' controls className=' scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl'>
                                <source src="https://cdn.shopify.com/videos/c/o/v/d2a5ac6ba8b74e3888b79ba33a620126.mp4" type="video/mp4" />
                            </video>
                        </div>


                        <div className='col-span-2 my-3'>
                            {/* 
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fccc8aa4-42e8-417d-358a-026991cff900/public" alt="asd" loading='lazy' className='w-[250px]  scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl' /> */}

                            <video width="200" poster='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2603650b-b325-4c00-b4b9-bb3c185a3000/public' controls className='scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl'>
                                <source src="https://cdn.shopify.com/videos/c/o/v/4dd81837678d4b5fa6b7fba424bfcfb1.mp4" type="video/mp4" />
                            </video>

                        </div>


                        <div className='col-span-2 my-3'>

                            {/* <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a9b93063-ccfc-47a0-55e7-a72fb1549200/public" alt="asd" loading='lazy' className='w-[250px]  scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl' /> */}


                            <video width="200" height="140" poster='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc497945-1646-4d0f-aee0-ab619c1e4200/public' controls className=' scale-110 drop-shadow-xl mx-auto border-white border-2 p-2 rounded-3xl'>
                                <source src="https://cdn.shopify.com/videos/c/o/v/43416a51c8d8443e904d13808d0c0b04.mp4" type="video/mp4" />
                            </video>

                        </div>

                    </div>

                </div>


            </div>

            <div className='text-center relative top-10 sm:hidden block'>
                <Link href={"/checkout"} className='z-10  bg-yellow-300 fontPoppins px-5 py-2 rounded-sm font-semibold'>Order Now</Link>
            </div>

            <div className='mt-20 w-full px-3 sm:w-[70%] mx-auto text-lg font-semibold'>

                <h1 className='text-center fontPoppins font-bold text-3xl' >BLAND <span className='text-[#0f7820]'> OF POWERFUL <br /> ELEMENT IN EVERY STICK </span></h1>



                <div className='my-5'>
                    <p> <span className='text-[#0f7820] my-3'> "Plantify Food Stick समुंद्री शैवाल (Seaweed extract) </span>, अमीनो एसिड, ह्यूमिक एसिड व मैक्रो और माइक्रो न्यूट्रिएंट्स से भरपूर है जो पौधों को हरा-भरा बनाने और रोगमुक्त रखने में मदद करता है।" </p>
                </div>


                <div>
                    <h2 className='text-[#0f7820] text-xl my-3'>समुंद्री शैवाल (Seaweed extract):</h2>
                    <p> यह पौधों के लिए एक टॉनिक के रूप में काम करता है। यह फास्फोरस, मैग्नीशियम, जस्ता, नाइट्रोजन, पोटेशियम से भरपूर होता है जो हर प्रकार के घरेलु पौधों के विकास में उपयोगी होता है। </p>
                </div>

                <div>
                    <h2 className='text-[#0f7820] text-xl my-3'>अमीनो एसिड (Amino acid ): </h2>
                    <p>यह पौधों की वृद्धि करने वाले पदार्थों और आवश्यक खनिजों से समृद्ध होता है। यह मिट्टी की संरचना में सुधार करता है। इससे पौधों की ऊंचाई, टहनियों की मोटाई और पत्तियों के क्षेत्रफल में विस्तार होता है।  </p>
                </div>
                <div>
                    <h2 className='text-[#0f7820] text-xl my-3'>ह्यूमिक एसिड (Humic acid):</h2>
                    <p>ह्युमिक एसिड मुख्य रूप से मिट्टी को भुरभुरी बनाता हैं जिससे पौधों के जड़ों का विकास अधिक होता है। इतना ही नहीं, यह पौधों में प्रकाश संश्लेषण की क्रिया को तेज करता है और रोगमुक्त भी रखता है। </p>
                </div>

                <div>
                    <h2 className='text-[#0f7820] text-xl my-3'>मैक्रोन्यूट्रिएंट्स (Macro nutrients):</h2>
                    <p>मैक्रोन्यूट्रिएंट्स में कार्बन, हाइड्रोजन, नाइट्रोजन, ऑक्सीजन, फॉस्फोरस, पोटेशियम, कैल्शियम, सल्फर और मैग्नीशियम शामिल हैं। जो पौधों को रोगमुक्त रखने और विकसित करने में उपयोगी होते है।  </p>
                </div>

                <div className='py-5'>
                    निष्कर्ष: <span className='text-[#0f7820]'> Plantify Food Stick</span>  में वो प्रत्येक तत्व उचित मात्रा में शामिल है जो आपके पौधों को स्वस्थ रखने, हरा-भरा व विकसित करने के लिए जरुरी है।
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


    )
}

export default Sec2